"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn } from 'lucide-react';

const SignInPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-[#191c20] shadow-2xl md:grid-cols-2">
                
                {/* --- Chap Tomon: Rasm (o'zgarmagan) --- */}
                <motion.div 
                    className="relative hidden flex-col justify-between p-10 text-white md:flex"
                    style={{ background: 'linear-gradient(135deg, #10131a, #1f232c)'}}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <h1 className="text-2xl font-bold">EDU<span className="text-[#14d3b2]">.AI</span></h1>
                    <div className="z-10">
                        <h2 className="text-3xl font-bold">Welcome Back.</h2>
                        <p className="mt-2 text-gray-400">Continue your journey to smarter learning.</p>
                    </div>
                    <Image
                        src="/IMAGE/back.png"
                        alt="Astronaut"
                        width={500}
                        height={400}
                        className="absolute -bottom-20 -right-20 opacity-30"
                    />
                </motion.div>

                {/* --- O'ng Tomon: Kirish Formasi --- */}
                <motion.div 
                    className="flex flex-col justify-center bg-white p-8 md:p-12"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="w-full max-w-md">
                        <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
                        <p className="mt-2 text-gray-600">
                            Don't have an account?{' '}
                            <Link href="/sign-up" className="font-semibold text-[#14d3b2] hover:underline">
                                Sign Up
                            </Link>
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-[#14d3b2] focus:ring-1 focus:ring-[#14d3b2]" />
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input type="password" placeholder="Password" className="w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-[#14d3b2] focus:ring-1 focus:ring-[#14d3b2]" />
                            </div>
                            
                            <div className="text-right">
                                <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#14d3b2]">Forgot password?</a>
                            </div>

                            <motion.button 
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#14d3b2] to-[#11b89c] py-3 font-bold text-white shadow-lg"
                                whileHover={{ scale: 1.02, y: -2, boxShadow: '0 10px 20px -5px rgba(20, 211, 178, 0.4)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <LogIn size={18} />
                                Sign In
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SignInPage;