"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function Products() {
    return (
        <div>
            <Header />
            {/* Features Section */}
            < section className="bg-neutral-700 py-12 px-8 md:px-16" >
                {/* first product overview */}
                < h1 className="text-4xl font-bold pb-8 " > Check the products available</h1 >
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-neutral-200 text-neutral-900 gap-8 rounded-xl flex flex-col md:flex-row justify-between md:items-center px-8 py-16">
                        <div className="">
                            <h1 className="text-2xl pb-2">Background Updater</h1>
                            <p className="text-sm pb-4">Represent the SMCDAO, projects and products by updating your background in one click</p>
                            <Link href="/bg-fill" className="bg-neutral-900 px-4 py-2 rounded-sm text-neutral-200 font-semibold">Use background updater</Link>
                        </div>
                        <div>
                            <Image src="/images/dtg.png" alt="Image background holder" width={200} height={200} />
                        </div>
                    </div>

                    <div className="bg-neutral-200 text-neutral-900 gap-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between px-8 py-16">
                        <div className="">
                            <h1 className="text-2xl pb-2">SMC Position Analytics</h1>
                            <p className="text-sm pb-4">Discover your position on the fishes leaderboard at SMC projects</p>
                            <Link href="/analytics" className="bg-neutral-900 px-4 py-2 rounded-sm text-neutral-200 font-semibold">
                                Use the analytics tool</Link>
                            {/* <button onClick={() => alert("It's soon be here, kindly check back")}
                className="bg-neutral-900 px-4 py-2 rounded-sm text-neutral-200 font-semibold">
                Use the analytics tool
              </button> */}
                        </div>
                        <div>
                            <Image src="/images/analytics1.png" alt="Image background holder" width={200} height={200} className="rounded-md" />
                        </div>
                    </div>

                    <div className="bg-neutral-200 text-neutral-900 gap-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between px-8 py-16">
                        <div className="">
                            <h1 className="text-2xl pb-2">SMC Tracker</h1>
                            <p className="text-sm pb-4">Discover all SMCDAO projects details data in one dashboard</p>
                            {/* <Link href="/bg-fill" className="bg-neutral-900 px-4 py-2 rounded-sm text-neutral-200 font-semibold">Use the analytics tool</Link> */}
                            <button onClick={() => alert("It's soon be here, kindly check back")}
                                className="bg-neutral-900 px-4 py-2 rounded-sm text-neutral-200 font-semibold">
                                Use the analytics tool
                            </button>
                        </div>
                        <div>
                            <Image src="/images/analytics.png" alt="Image background holder" width={200} height={200} className="rounded-md" />
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
}