"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Token() {
  const router = useRouter();
  const [wallet, setWallet] = useState("");
  const [selectedToken, setSelectedToken] = useState("");

  const tokenMap: Record<string, string> = {
    wkc: "0x6Ec90334d89dBdc89E08A133271be3d104128Edb",
    dtg: "0xb1957BDbA889686EbdE631DF970ecE6A7571A1B6",
    pht: "0x885c99a787be6b41cbf964174c771a9f7ec48e04",
    war: "0x57bfe2af99aeb7a3de3bc0c42c22353742bfd20d",
    ocicat: "0x37Fe635D1e25B2F7276C1B9dBBcc7b087f80C050",
    btcdragon: "0x1ee8a2f28586e542af677eb15fd00430f98d8fd8",
    zedek: "0xCbEaaD74dcB3a4227D0E6e67302402E06c119271",
    durt: "0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1",
    yukan: "0xd086B849a71867731D74D6bB5Df4f640de900171",
    tkc: "0x06Dc293c250e2fB2416A4276d291803fc74fb9B5",
    twd: "0xDA1060158F7D593667cCE0a15DB346BB3FfB3596",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet || !selectedToken) return;
    const contract = tokenMap[selectedToken];
    router.push(`/analytics/token/${selectedToken}?user=${wallet}&contract=${contract}`);
  };

  return (
    <div>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Check your holdings type</h1>
        <p className="pb-8 flex flex-row gap-2 items-center">
          <span>Unique addresses that used this service:</span>
          <span className="font-semibold text-xl text-neutral-300">counting...</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center space-y-4"
        >
          <input
            type="text"
            className="p-4 w-[80%] border border-neutral-500 rounded-md"
            placeholder="Enter wallet address or domain name"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            required
          />

          <select
            id="token"
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value)}
            className="w-[80%] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
            required
          >
            <option value="" disabled>
              Select a token
            </option>
            {Object.keys(tokenMap).map((token, index) => (
              <option key={index} value={token} className="text-black">
                {token.toUpperCase()}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-700"
          >
            Analyze Token
          </button>
        </form>
      </main>
    </div>
  );
}
