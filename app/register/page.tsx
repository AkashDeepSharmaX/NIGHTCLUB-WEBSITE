"use client"

import Link from "next/link";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       console.log("Login with", email, password)
    };
    return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 via-gray-800 
    to-gray-900 px-4 text-white">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-700">
            {/* Top --- Title */}
        <div className="text-center">
            <h2 className="text-2xl font-bold text-center">Create An Account</h2>
            <p className="mt-2 text-sm text-gray-400">Already have an account?{""} 
                <Link href="/login" className="text-indigo-400 hover:underline">Sign In</Link>
            </p>
        </div>


          {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                <Input
                type="text"
                placeholder="First Name"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className="w-full  border border-gray-600 bg-gray-800 text-white rounded-lg focus:border-indigo-500 placeholder
                 focus:ring-indigo-500"
                />
            
             <Input
                type="text"
                placeholder="Last Name"
               
                className="w-full  border border-gray-600 bg-gray-800 text-white rounded-lg focus:border-indigo-500 placeholder
                 focus:ring-indigo-500"
                />
                </div>

                <Input
                type="email"
                placeholder="Email"
            
                className="w-full  border border-gray-600 bg-gray-800 text-white rounded-lg focus:border-indigo-500 placeholder
                 focus:ring-indigo-500"
                />

                 <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className="w-full  border border-gray-600 bg-gray-800 text-white rounded-lg focus:border-indigo-500 placeholder
                 focus:ring-indigo-500"
                />

                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-gray-400">
                        <Checkbox className="border-gray-600 data-[state=checked]:bg-indigo-500 bg-white"/>
                        I agree to the {""}
                    </label>
                    <a href="#" className="text-sm text-indigo-400 hover:underline">Terms & Conditions</a>
                </div>

                <Button
                type="submit"
                className="w-full rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white py-2">
                    Create Account
                </Button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center py-2">
                <div className="h-px w-full bg-gray-700"></div>
                <span className="absolute bg-gray-900 px-3 text-sm text-gray-400">Or Continue With</span>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="flex items-center justify-center gap-2 border-gray-600 
                bg-gray-800 text-white hover:bg-gray-700">
                    <img src="/Google.svg" alt="Google" className="h-10 w-10"  />
                    Google
                </Button>
                   <Button variant="outline" className="flex items-center justify-center gap-2 border-gray-600 
                bg-gray-800 text-white hover:bg-gray-700">
                    <img src="/Apple.svg" alt="Google" className="h-5 w-5"  />
                    Apple
                </Button>
            </div>
        </div>
    </div>
    )
}