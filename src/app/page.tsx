"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left: Text Content */}
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold text-neutral-500 mb-4">
                SMC Tools
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Open source and free tools for the SMCDAO Community
              </p>
              <Link href="/tools" className="bg-neutral-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-neutral-600 transition-colors">
                Try the products
              </Link>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}