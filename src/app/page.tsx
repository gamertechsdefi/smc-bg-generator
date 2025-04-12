"use client";
import Image from "next/image";
import Link from "next/link"; // For navigation to the tool page

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mt-16">
      {/* Hero Section */}
      <main className="flex-grow p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left: Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-500 mb-4">
                SMC Tools
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Open source and free backgrounds generating platform for the SMCDAO Community.
              </p>
              <Link href="/bg-fill">
                <button className="bg-neutral-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-[#66D4FF] transition-colors">
                  Try the Background Updater Now
                </button>
              </Link>
            </div>
            {/* Right: Hero Image */}
            <div className="md:w-1/2">
              <Image
                src="/images/smc.png" // Placeholder: replace with an actual image
                alt="Example of a processed image with custom background"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg shadow-md object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-neutral-800 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-200 text-center mb-8">
            Why Use ?
          </h2>
          <div className="flex flex-col md:flex-row md:justify-center gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <Image
                src="/images/smc2.png" // Placeholder: replace with an icon or example
                alt="One-click processing"
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-white mb-2">One-Click Magic</h3>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <Image
                src="/images/dtg.png" // Placeholder: replace with an icon or example
                alt="Onchain integration"
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Onchain Power</h3>
            </div>
            {/* Feature 3 */}

          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-500 text-center mb-8">
            See It in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Image
                src="/images/smc.png" // Placeholder: replace with a processed image
                alt="Example 1: SMCDAO"
                width={300}
                height={300}
                className="w-full h-auto rounded-md shadow-md object-contain"
              />
              <p className="mt-2 text-gray-300">SMCDAO background</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/wkc.png" // Placeholder: replace with a processed image
                alt="Example 2: WKC background"
                width={300}
                height={300}
                className="w-full h-auto rounded-md shadow-md object-contain"
              />
              <p className="mt-2 text-gray-300">WikiCat Background</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/dtg.png" // Placeholder: replace with a processed image
                alt="Example 3: DTG background"
                width={300}
                height={300}
                className="w-full h-auto rounded-md shadow-md object-contain"
              />
              <p className="mt-2 text-gray-300">Defi Tiger Token Background</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-6 text-center text-gray-500">
        <p>Built with ❤️ using Next.js, Tailwind CSS, and open sourced APIs</p>
        <p className="mt-2">
          <Link href="/bg-fill" className="text-neutral-300 hover:underline">
            Get Started
          </Link>
          {" | "}
          <a href="https://github.com/gamertechsdefi/smc-bg-generator" className="text-neutral-300 hover:underline">
            GitHub
          </a>
          {" | "}
          <Link href="/support" className="text-neutral-300 hover:underline">
            Support
          </Link>
        </p>
      </footer>
    </div>
  );
}