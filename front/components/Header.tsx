"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useWeb3 } from "../app/hooks/useWeb3"

const Header = () => {
  const pathname = usePathname()
  const { connect, disconnect, account } = useWeb3()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            BlockRent
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className={`hover:text-primary ${pathname === "/" ? "text-primary" : "text-gray-600"}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tenant"
                  className={`hover:text-primary ${pathname === "/how-it-works" ? "text-primary" : "text-gray-600"}`}
                >
                  Tenant
                </Link>
              </li>
              <li>
                <Link
                  href="/mediator"
                  className={`hover:text-primary ${pathname === "/dashboard" ? "text-primary" : "text-gray-600"}`}
                >
                  Mediator
                </Link>
              </li>
              <li>
                <Link
                  href="/landlord"
                  className={`hover:text-primary ${pathname === "/support" ? "text-primary" : "text-gray-600"}`}
                >
                  Landlord
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            {account ? (
              <button
                onClick={disconnect}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
              >
                Disconnect Wallet
              </button>
            ) : (
              <button
                onClick={connect}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

