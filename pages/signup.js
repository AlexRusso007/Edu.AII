"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Sparkles } from 'lucide-react';

const SignUpPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-[#191c20] shadow-2xl md:grid-cols-2">
                
                {/* --- Chap Tomon: Rasm va Matn --- */}
                <motion.div 
                    className="relative hidden flex-col justify-between p-10 text-white md:flex"
                    style={{ background: 'linear-gradient(135deg, #10131a, #1f232c)'}}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <h1 className="text-2xl font-bold">EDU<span className="text-[#14d3b2]">.AI</span></h1>
                    <div className="z-10">
                        <h2 className="text-3xl font-bold">Start Your Journey.</h2>
                        <p className="mt-2 text-gray-400">Unlock the power of AI to supercharge your learning.</p>
                    </div>
                    <Image
                        src="/IMAGE/back.png" // Landingdagi asosiy rasmni ishlatamiz
                        alt="Astronaut"
                        width={700}
                        height={400}
                        className="absolute -bottom-20 -right-20 opacity-30"
                    />
                </motion.div>

                {/* --- O'ng Tomon: Ro'yxatdan o'tish Formasi --- */}
                <motion.div 
                    className="flex flex-col justify-center bg-white p-8 md:p-12"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="w-full max-w-md">
                        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                        <p className="mt-2 text-gray-600">
                            Already have an account?{' '}
                            <Link href="/sign-in" className="font-semibold text-[#14d3b2] hover:underline">
                                Sign In
                            </Link>
                        </p>

                        <div className="mt-8 space-y-4">
                            {/* Google bilan kirish */}
                            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 font-semibold text-gray-800 transition hover:bg-gray-100">
                                <svg className="h-5 w-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                Sign up with Google
                            </button>

                            <div className="flex items-center">
                                <hr className="flex-1 border-gray-300" />
                                <span className="px-4 text-sm text-gray-500">OR</span>
                                <hr className="flex-1 border-gray-300" />
                            </div>

                            {/* Asosiy forma */}
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input type="text" placeholder="Full Name" className="w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-[#14d3b2] focus:ring-1 focus:ring-[#14d3b2]" />
                            </div>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-[#14d3b2] focus:ring-1 focus:ring-[#14d3b2]" />
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input type="password" placeholder="Password" className="w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-[#14d3b2] focus:ring-1 focus:ring-[#14d3b2]" />
                            </div>

                            <motion.button 
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#14d3b2] to-[#11b89c] py-3 font-bold text-white shadow-lg"
                                whileHover={{ scale: 1.02, y: -2, boxShadow: '0 10px 20px -5px rgba(20, 211, 178, 0.4)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Sparkles size={18} />
                                Create Free Account
                            </motion.button>
                        </div>

                        <p className="mt-8 text-center text-xs text-gray-500">
                            By creating an account, you agree to our{' '}
                            <a href="#" className="underline hover:text-gray-800">Terms of Service</a>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SignUpPage;