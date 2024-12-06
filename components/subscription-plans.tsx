'use client'

import { useEffect, useState } from "react"
import { Check, Loader2 } from 'lucide-react'
import { Card } from "./ui/card"

interface Plan {
  id: string
  name: string
  resolution: string
  price: string
  videoQuality: string
  supportedDevices: string[]
  simultaneousStreams: number
  downloadDevices: number
  gradient: string
  popular?: boolean
}

const plans: Plan[] = [
  {
    id: "mobile",
    name: "Mobile",
    resolution: "480p",
    price: "$ 2.99",
    videoQuality: "Fair",
    supportedDevices: ["Mobile phone", "tablet"],
    simultaneousStreams: 1,
    downloadDevices: 1,
    gradient: "bg-gradient-to-br from-blue-950 via-blue-900 to-blue-500",
  },

  {
    id: "standard",
    name: "Standard",
    resolution: "1080p",
    price: "Free Trial",
    videoQuality: "Great",
    supportedDevices: ["TV", "computer", "mobile phone", "tablet"],
    simultaneousStreams: 2,
    downloadDevices: 2,
    gradient: "bg-gradient-to-tl from-pink-700 via-blue-800 to-blue-800",
  },
  {
    id: "premium",
    name: "Premium",
    resolution: "4K + HDR",
    price: "$ 22.99",
    videoQuality: "Best",
    supportedDevices: ["TV", "computer", "mobile phone", "tablet"],
    simultaneousStreams: 4,
    downloadDevices: 4,
    gradient: "bg-gradient-to-tl from-red-600 via-sky-950 to-blue-950",
  },
]

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState("mobile")
  const selectedPlanDetails = plans.find(plan => plan.id === selectedPlan)!
  const [isLoading, setIsLoading] = useState(false)

  const redirectToPage2 = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.location.href = "/"
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
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-300 border-0.5">
        <svg
          viewBox="0 0 111 30"
          className="h-6 w-24 fill-[#e50914]"
          aria-hidden="true"
          focusable="false"
        >
          <g>
            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" />
          </g>
        </svg>
        <button className="text-sm font-medium text-black">Sign Out</button>
      </header>
      <main className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 lg:px-32">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-gray-500">STEP <span className="font-bold">1</span> OF <span className="font-bold">2</span></p>
            <h1 className="text-2xl md:text-3xl text-black font-medium">Choose the plan that&apos;s right for you</h1>
            <h4 className=" text-gray-800 font-medium opacity-80">Pay $0.00 Today . Cancel online anytime. </h4>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid gap-6 md:grid-cols-3 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden cursor-pointer transition-shadow hover:shadow-lg p-2 rounded-xl  ${
                  selectedPlan === plan.id ? "ring-[0.5px] ring-primary ring-gray-600 " : ""
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gray-800 text-white text-center text-sm py-1">
                    Free Trial
                  </div>
                )}
                <div
                  className={`bg-gradient-to-r ${plan.gradient} p-6 text-white space-y-2 rounded-xl`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-regular">{plan.name}</h3>
                      <p className="text-sm opacity-90">{plan.resolution}</p>
                    </div>
                    {selectedPlan === plan.id && (
                      <Check className="h-5 w-5" />
                    )}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="border-b border-gray-400 py-2">
                    <p className="text-xs text-[#838383] font-normal">Monthly price</p>
                    <p className="text-xs text-[#464646] font-thin">{plan.price}</p>
                  </div>
                  <div className="border-b border-gray-400 py-2">
                    <p className="text-xs text-[#838383] font-normal">Video and sound quality</p>
                    <p className="text-xs text-[#464646] font-thin">{plan.videoQuality}</p>
                  </div>
                  <div className="border-b border-gray-400 py-2">
                    <p className="text-xs text-[#838383] font-normal">Resolution</p>
                    <p className="text-xs text-[#464646] font-thin">{plan.resolution}</p>
                  </div>
                  <div className="border-b border-gray-400 py-2">
                    <p className="text-xs text-[#838383] font-normal">Supported devices</p>
                    <p className="text-xs text-[#464646] font-thin">{plan.supportedDevices.join(", ")}</p>
                  </div>
                  <div className="border-b border-gray-400 py-2">
                    <p className="text-xs text-[#838383] font-normal">
                      Devices your household can watch at the same time
                    </p>
                    <p className="text-xs text-[#464646] font-thin">{plan.simultaneousStreams}</p>
                  </div>
                  <div className="">
                    <p className="text-xs text-[#838383] font-normal">Download devices</p>
                    <p className="text-xs text-[#464646] font-thin">{plan.downloadDevices}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-6 ">
            {/* Plan Selection */}
            <div className="relative">
              <div className="absolute -top-3 left-1/4 bg-gray-800 text-white text-center text-xs py-1 px-3 rounded">
                Free Trial
              </div>
              <div className="flex gap-1 overflow-x-auto pb-2 ">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`flex-1 min-w-[100px] cursor-pointer rounded-xl overflow-hidden ${
                      selectedPlan === plan.id ? "ring-[0.5px] ring-primary ring-gray-600" : ""
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <div className={`bg-gradient-to-b ${plan.gradient} p-4 text-white`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{plan.name}</h3>
                          <p className="text-sm opacity-90">{plan.resolution}</p>
                        </div>
                        {selectedPlan === plan.id && (
                          <Check className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Monthly price</span>
                <span className=" text-gray-900">{selectedPlanDetails.price}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Video and sound quality</span>
                <span className="font-normal text-gray-900">{selectedPlanDetails.videoQuality}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Resolution</span>
                <span className="font-normal text-gray-900">{selectedPlanDetails.resolution}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Supported devices</span>
                <span className="font-normal text-gray-900 text-right">{selectedPlanDetails.supportedDevices.join(", ")}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Devices your household can watch at the same time</span>
                <span className="font-normal text-gray-900">{selectedPlanDetails.simultaneousStreams}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Download devices</span>
                <span className="font-normal text-gray-900">{selectedPlanDetails.downloadDevices}</span>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500 space-y-4 sm:px-8">
            <p>
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our Terms of Use for
              more details.
            </p>
            <p>
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard, and
              1 with Basic and Mobile.
            </p>
          </div>

          <div className="flex items-center justify-center">
          <button
            onClick={redirectToPage2}
            disabled={isLoading}
            className={`w-full max-w-md h-16 text-xl bg-[#e50914] hover:bg-[#f6121d] text-white rounded-md flex items-center justify-center transition-colors duration-300 ${isLoading ? 'opacity-80' : ''}`}
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
            ) : null}
            {isLoading ? 'Loading...' : 'Next'}
          </button>
          </div>
        </div>
      </main>
    </div>
  )
}

