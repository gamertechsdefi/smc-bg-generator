"use client"

import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Analytics() {

    const router = useRouter();
    return (
        <div>
            <Header />
            <main className="pt-16">
                <div className="flex flex-col items-center py-16 px-8">
                    <h1 className="text-4xl md:text-6xl font-bold">SMC Analysis</h1>
                    <p className="pb-16">Analyze tokens metrics, your position, etcs</p>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div onClick={() => router.push("/analytics/token")} className="group flex flex-col border border-neutral-300 bg-neutral-700 px-4 py-8 rounded-md">
                            <h1 className="text-xl font-semibold">Bags Postion Check</h1>
                            <p>Check where you bags belong amongst the holders tier</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}