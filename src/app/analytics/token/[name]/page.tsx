"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "next/navigation";

export default function TokenPage() {
    const { token } = useParams();
    const searchParams = useSearchParams();

    const user = searchParams.get("user");
    const contract = searchParams.get("contract");

    const [data, setData] = useState<null | {
        balance: string;
        totalSupply: string;
        decimals: number;
        percentage: string;
        tier: string;
    }>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user || !contract) {
            setError("Missing user or contract in query.");
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                const res = await fetch(`/api/analytics/token-position?user=${user}&contract=${contract}`);
                const json = await res.json();

                if (!res.ok) throw new Error(json.error || "Error fetching data");

                setData({
                    balance: json.balance,
                    totalSupply: json.totalSupply,
                    decimals: json.decimals,
                    percentage: json.percentage,
                    tier: json.tier,
                });
            } catch (err: any) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user, contract]);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-4">
                {token?.toString().toUpperCase()} Token Analysis
            </h1>

            {loading ? (
                <p className="text-neutral-400">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : data ? (
                <div className="flex flex-col gap-4 w-full max-w-md text-center bg-neutral-800 border border-neutral-600 p-6 rounded-xl">
                    <p>
                        <span className="font-semibold">Position Tier:</span>{" "}
                        <span className="text-neutral-400 font-bold text-xl">{data.tier}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Wallet:</span> {user}
                    </p>
                    <p>
                        <span className="font-semibold">Token Balance:</span>{" "}
                        <span className="text-green-400">{data.balance}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Holding %:</span>{" "}
                        <span className="text-cyan-300">{data.percentage}%</span>
                    </p>
                </div>
            ) : null}
        </main>
    );
}
