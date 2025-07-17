"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, User, Settings as SettingsIcon } from 'lucide-react';

const DashboardHeader = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="flex h-20 w-full flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back, Alex!</p>
      </div>
      
      <div className="flex items-center gap-6">
        {/* Profile Dropdown */}
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-3">
            <Image src="/IMAGE/bluegirl.jpg" width={40} height={40} alt="User Avatar" className="rounded-full" />
            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold text-gray-800">Alex Russo</p>
              <p className="text-xs text-gray-500">Pro Plan</p>
            </div>
            <ChevronDown size={16} />
          </button>
          <AnimatePresence>
            {profileOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 z-10 mt-2 w-48 rounded-lg border bg-white p-2 shadow-lg"
              >
                <a href="#" className="flex w-full items-center gap-3 p-2 text-sm text-gray-700 hover:bg-gray-100"><User size={16} /> My Profile</a>
                <a href="#" className="flex w-full items-center gap-3 p-2 text-sm text-gray-700 hover:bg-gray-100"><SettingsIcon size={16} /> Account</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;