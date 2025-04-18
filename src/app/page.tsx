"use client";
import Image from "next/image";
import Link from "next/link"; // For navigation to the tool page

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
              <button className="bg-neutral-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-neutral-600 transition-colors">
                Try the products
              </button>
            </div>
          </div>
        </div>
      </main >

    {/* Features Section */ }
    < section className = "bg-neutral-700 py-12 px-8 md:px-16" >
      {/* first product overview */ }
      < h1 className = "text-4xl font-bold pb-8 " > Check the tools available</h1 >
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
              <h1 className="text-2xl pb-2">SMC Token Analytics</h1>
              <p className="text-sm pb-4">Discover details of governance data <br />Voting profile, ranks, charts</p>
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
              <p className="text-sm pb-4">Discover all Aleo projects prices data in one dashboard</p>
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

    

    {/* Footer */ }
    < footer className = "bg-neutral-900 py-6 text-center text-gray-500" >
        <p>Built with ❤️ using Next.js, Tailwind CSS, and open sourced APIs</p>
        <p className="mt-2">
          {/* <Link href="/bg-fill" className="text-neutral-300 hover:underline">
            Get Started
          </Link>
          {" | "} */}
          <a href="https://github.com/gamertechsdefi/aleo-tools" className="text-neutral-300 hover:underline">
            GitHub
          </a>
          {" | "}
          <Link href="/support" className="text-neutral-300 hover:underline">
            Support
          </Link>
        </p>
      </footer >
    </div >
  );
}