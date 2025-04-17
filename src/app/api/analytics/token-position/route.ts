import { NextRequest, NextResponse } from 'next/server';
import { ethers } from 'ethers';

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  "function decimals() view returns (uint8)"
];

const TIERS = [
  { min: 0.05, max: 0.1, label: "Crayfish", emoji: "🦐" },
  { min: 0.1, max: 1, label: "Crab", emoji: "🦀" },
  { min: 1, max: 3, label: "Fish", emoji: "🐟" },
  { min: 3, max: 5, label: "Shark", emoji: "🦈" },
  { min: 5, max: 10, label: "Whale", emoji: "🐋" },
  { min: 10, max: 100, label: "Mega Whale", emoji: "🐋🦈" },
];

function getPositionTier(percentage: number) {
  for (const tier of TIERS) {
    if (percentage >= tier.min && percentage < tier.max) {
      return `${tier.label} ${tier.emoji}`;
    }
  }
  return "Plankton 🪸"; // < 0.05% - You can add an emoji here too
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const user = searchParams.get("user");
    const contract = searchParams.get("contract");

    if (!user || !contract) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    const provider = new ethers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
    const tokenContract = new ethers.Contract(contract, ERC20_ABI, provider);

    const [balance, totalSupply, decimals] = await Promise.all([
      tokenContract.balanceOf(user),
      tokenContract.totalSupply(),
      tokenContract.decimals(),
    ]);

    const formattedBalance = ethers.formatUnits(balance, decimals);
    const formattedTotalSupply = ethers.formatUnits(totalSupply, decimals);

    // Cap balance to 3 decimals
    const cappedBalance = parseFloat(formattedBalance).toFixed(3);

    const percentage = (parseFloat(formattedBalance) / parseFloat(formattedTotalSupply)) * 100;
    const tier = getPositionTier(percentage);

    return NextResponse.json({
      user,
      contract,
      balance: String(cappedBalance), // Return the capped balance
      totalSupply: String(formattedTotalSupply),
      decimals: Number(decimals), // Fixed: Convert BigInt to number
      percentage: percentage.toFixed(2),
      tier,
    });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
