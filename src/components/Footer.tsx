"use client"

import Link from "next/link"

export default function Footer() {
    return (
        < footer className="bg-neutral-900 py-6 text-center text-gray-500" >
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
    );
}