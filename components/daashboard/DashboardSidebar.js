"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Upload,       // Fayl yuklash
    BrainCircuit, // Fleshkartalar (miya faoliyati)
    Lightbulb,    // Quiz (yangi g'oya)
    UserCog,      // Sozlamalar
    LogOut,       // Chiqish
    ChevronsLeft, // Menuni yopish
    Menu          // Menuni ochish
} from 'lucide-react';

const navItems = [
  { name: 'Upload', icon: Upload, id: 'upload' },
  { name: 'Flashcards', icon: BrainCircuit, id: 'flashcards' },
  { name: 'Quiz', icon: Lightbulb, id: 'quiz' },
];

const DashboardSidebar = ({ activeTab, setActiveTab }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.aside
      animate={{ width: isExpanded ? '256px' : '80px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="relative flex h-screen flex-col bg-[#10131a] text-gray-300"
    >
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-8 z-10 rounded-full border-2 border-[#10131a] bg-gray-200 p-1 text-gray-600 transition-transform hover:scale-110"
      >
        {isExpanded ? <ChevronsLeft size={16} /> : <Menu size={16} />}
      </button>

      {/* --- O'ZGARTIRILGAN QISM: Logotip --- */}
      <div className="flex h-20 w-full items-center justify-center border-b border-gray-700/50">
        <AnimatePresence mode="wait">
          <motion.div
            key={isExpanded ? 'logo-full' : 'logo-short'}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? (
              // Kengaygan holatda to'liq logotip
              <h1 className="text-3xl font-bold text-white">
                EDU<span className="text-[#14d3b2]">.AI</span>
              </h1>
            ) : (
              // Kichraygan holatda faqat birinchi harf
              <h1 className="text-1xl font-bold text-[white]">EDU<span className="text-[#14d3b2]">.AI</span></h1>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Asosiy Navigatsiya (o'zgarmagan) */}
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex w-full items-center gap-4 rounded-lg p-3 transition-colors duration-200 ${
                activeTab === item.id 
                ? 'bg-[#14d3b2] text-[#10131a] font-semibold shadow-lg' 
                : 'hover:bg-white/10'
            }`}
          >
            <item.icon size={24} />
            <AnimatePresence>
                {isExpanded && (
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="whitespace-nowrap"
                    >
                        {item.name}
                    </motion.span>
                )}
            </AnimatePresence>
          </button>
        ))}
      </nav>

      {/* Pastki qism (o'zgarmagan) */}
      <div className="border-t border-gray-700/50 p-4">
        <Link href="#" className="flex w-full items-center gap-4 rounded-lg p-3 transition-colors hover:bg-white/10">
            <UserCog size={24} />
            <AnimatePresence>
                {isExpanded && (
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="whitespace-nowrap"
                    >
                        Settings
                    </motion.span>
                )}
            </AnimatePresence>
        </Link>
        <Link href="#" className="mt-1 flex w-full items-center gap-4 rounded-lg p-3 text-red-400 transition-colors hover:bg-red-400/10 hover:text-red-300">
            <LogOut size={24} />
            <AnimatePresence>
                {isExpanded && (
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="whitespace-nowrap"
                    >
                        Log Out
                    </motion.span>
                )}
            </AnimatePresence>
        </Link>
      </div>
    </motion.aside>
  );
};

export default DashboardSidebar;