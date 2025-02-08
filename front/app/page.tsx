import Link from "next/link"
import { ArrowRight, Shield, Zap, BarChart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Secure Rental Agreements with Blockchain</h1>
          <p className="text-xl sm:text-2xl mb-8">
            Automate payments, handle disputes, and ensure transparency in your rental agreements.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Renting with Blockchain
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Agreements</h3>
              <p className="text-gray-600">
                Create and sign rental agreements securely on the blockchain, ensuring immutability and transparency.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Payments</h3>
              <p className="text-gray-600">
                Set up automatic rent payments using smart contracts, reducing late payments and administrative work.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
              <p className="text-gray-600">
                Handle disputes efficiently with a transparent, blockchain-based resolution process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

