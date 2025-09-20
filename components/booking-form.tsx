"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import QRCode from "qrcode"

// Interfaces
interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  reserveMo: string;
  reserveDy: string;
  reserveYr: string;
  occasion: string;
  partySize: string;
  specialRequests: string;
}

interface Errors {
  [key: string]: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    reserveMo: "",
    reserveDy: "",
    reserveYr: "",
    occasion: "",
    partySize: "",
    specialRequests: "",
  })
  const [errors, setErrors] = useState<Errors>({})
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: Errors = {}
    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Valid phone number is required (minimum 10 digits)"
    if (!formData.reserveMo) newErrors.reserveMo = "Month is required"
    if (!formData.reserveDy) newErrors.reserveDy = "Day is required"
    if (!formData.reserveYr) newErrors.reserveYr = "Year is required"
    if (!formData.occasion) newErrors.occasion = "Occasion is required"
    if (!formData.partySize || parseInt(formData.partySize) < 1) newErrors.partySize = "Party size must be at least 1"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      const qrData = `Reservation Details:\nName: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nDate: ${formData.reserveDy}/${formData.reserveMo}/${formData.reserveYr}\nOccasion: ${formData.occasion}\nParty Size: ${formData.partySize}\nSpecial Requests: ${formData.specialRequests}`
      try {
        const url = await QRCode.toDataURL(qrData, { width: 200, height: 200 })
        setQrCodeUrl(url)
      } catch (error) {
        console.error("Error generating QR code:", error)
      }
    } else {
      alert("Please complete the form to generate a QR code.")
    }
  }

  const handleDownload = () => {
    if (qrCodeUrl) {
      const link = document.createElement("a")
      link.download = "reservation_qrcode.png"
      link.href = qrCodeUrl
      link.click()
    }
  }

  return (
    <section className="py-16 bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4 shadow-[0_0_10px_rgba(255,0,255,0.5)] font-['Cinzel_Decorative']">
              Make a Reservation for Your Squad
            </h2>
          </div>

          <Card className="bg-gray-800/30 backdrop-blur-md border border-pink-500/20 rounded-lg shadow-[0_0_10px_rgba(255,0,255,0.3)]">
            <CardHeader>
              <CardTitle className="text-2xl text-pink-500 font-['Cinzel_Decorative']">
                Reservation Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-white font-semibold">
                      First Name
                    </Label>
                    <Input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="First Name"
                      className="mt-1 bg-gray-800 border-pink-500 focus:border-pink-300 text-white"
                      required
                    />
                    {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white font-semibold">
                      Last Name
                    </Label>
                    <Input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Last Name"
                      className="mt-1 bg-gray-800 border-pink-500 focus:border-pink-300 text-white"
                      required
                    />
                    {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white font-semibold">
                    Phone
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter phone number"
                    className="mt-1 bg-gray-800 border-pink-500 focus:border-pink-300 text-white"
                    minLength={10}
                    required
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="reserveMo" className="text-white font-semibold">
                      Month
                    </Label>
                    <Select
                      value={formData.reserveMo}
                      onValueChange={(value) => setFormData({ ...formData, reserveMo: value })}
                      className="mt-1 bg-gray-800 border-pink-500 focus:border-pink-300 text-white"
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => (
                          <SelectItem key={i} value={String(i + 1)}>{month}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.reserveMo && <p className="text-red-400 text-sm mt-1">{errors.reserveMo}</p>}
                  </div>
                  <div>
                    <Label htmlFor="reserveDy" className="text-white font-semibold">
                      Day
                    </Label>
                    <Select
                      value={formData.reserveDy}
                      onValueChange={(value) => setFormData({ ...formData, reserveDy: value })}
                      className="mt-1 bg-gray-800 border-pink-500 focus:border-pink-300 text-white"
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Day" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(31)].map((_, i) => (
                          <SelectItem key={i} value={String(i + 1)}>{i + 1}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.reserveDy && <p className="text-red-400 text-sm mt-1">{errors.reserveDy}</p>}
                  </div>
                  <div>
                    <Label htmlFor="reserveYr" className="text-white font-semibold">
                      Year
                    </Label>
                    <Select
                      value={formData.reserveYr}
                      onValueChange={(value) => setFormData({ ...formData, reserveYr: value })}
                      className="mt-1 bg-gray-800 border-pink-500 focus:border-pink-300 text-white"
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {[2025, 2026, 2027, 2028].map((year) => (
                          <SelectItem key={year} value={String(year)}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.reserveYr && <p className="text-red-400 text-sm mt-1">{errors.reserveYr}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="occasion" className="text-white font-semibold">
                    Occasion
                  </Label>
                  <Select
                    value={formData.occasion}
                    onValueChange={(value) => setFormData({ ...formData, occasion: value })}
                    className="mt-1 bg-gray-800 border-pink-500 focus:border-pink-300 text-white"
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      {['Birthday', 'Holiday', 'Job Promotion', 'Anniversary', 'Graduation', 'Marriage/Engagement', 'Wild Time'].map((occ) => (
                        <SelectItem key={occ} value={occ.toLowerCase()}>{occ}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.occasion && <p className="text-red-400 text-sm mt-1">{errors.occasion}</p>}
                </div>

                <div>
                  <Label htmlFor="partySize" className="text-white font-semibold">
                    Party Size
                  </Label>
                  <Input
                    type="number"
                    id="partySize"
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                    placeholder="Enter party size"
                    className="mt-1 bg-gray-800 border-pink-500 focus:border-pink-300 text-white"
                    min="1"
                    required
                  />
                  {errors.partySize && <p className="text-red-400 text-sm mt-1">{errors.partySize}</p>}
                </div>

                <div>
                  <Label htmlFor="specialRequests" className="text-white font-semibold">
                    Special Requests
                  </Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="Enter special requests"
                    className="mt-1 bg-gray-800 border-pink-500 focus:border-pink-300 text-white"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-md shadow-[0_0_10px_rgba(255,0,255,0.5)]"
                >
                  Submit
                </Button>
              </form>

              {qrCodeUrl && (
                <div className="mt-6 text-center">
                  <img src={qrCodeUrl} alt="QR Code" className="mx-auto mb-4" />
                  <Button
                    onClick={handleDownload}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4"
                  >
                    Download QR Code
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}