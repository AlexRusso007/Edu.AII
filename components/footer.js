"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

// --- Animation Variants ---
const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Animate each column one after the other
      delayChildren: 0.2,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <footer className="relative w-full overflow-hidden bg-[#10131a] py-20 text-gray-400">
      {/* Background Dots - for that space feel */}
      <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-blue-400/50"></div>
      <div className="absolute top-1/2 left-1/2 h-2 w-2 rounded-full bg-blue-400/50"></div>
      <div className="absolute bottom-1/4 right-1/4 h-4 w-4 rounded-full bg-blue-400/30"></div>
      <div className="absolute top-10 right-1/3 h-2 w-2 rounded-full bg-white/30"></div>
      <div className="absolute bottom-10 left-1/3 h-2 w-2 rounded-full bg-white/30"></div>
      {/* Main Content */}
      <motion.div 
        className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-8 text-center md:grid-cols-3 md:text-left"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Column: Navigation */}
        <motion.div variants={columnVariants}>
          <h3 className="mb-4 text-lg font-semibold text-[#14d3b2]">{t('footer_navigate')}</h3>
          <ul className="space-y-3">
            <li><Link href="#" className="text-orange-500 transition-colors hover:text-white">{t('footer_home')}</Link></li>
            <li><Link href="#" className="transition-colors hover:text-white">{t('footer_students')}</Link></li>
            <li><Link href="#" className="transition-colors hover:text-white">{t('footer_educators')}</Link></li>
            <li><Link href="#" className="transition-colors hover:text-white">{t('footer_why')}</Link></li>
            <li><Link href="#" className="transition-colors hover:text-white">{t('footer_reviews')}</Link></li>
          </ul>
        </motion.div>
        {/* Center Column: Platform & Actions */}
        <motion.div className="flex flex-col items-center" variants={columnVariants}>
          {/* Pulsing Orb */}
          <motion.div 
            className="h-6 w-6 rounded-full bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <h3 className="mb-4 mt-6 text-lg font-semibold text-[#14d3b2]">{t('footer_platform')}</h3>
          <div className="flex items-center gap-4">
            <button className="rounded-md bg-[#14d3b2] px-6 py-2 font-bold text-[#10131a] transition-transform hover:scale-105">
              {t('signup')}
            </button>
            <button className="rounded-md border border-gray-400 px-6 py-2 font-semibold transition-colors hover:bg-white hover:text-black">
              {t('signin')}
            </button>
          </div>
        </motion.div>
        {/* Right Column: Contact */}
        <motion.div variants={columnVariants}>
          <h3 className="mb-4 text-lg font-semibold text-[#14d3b2]">{t('footer_contact')}</h3>
          <p>{t('footer_questions')}</p>
          <p className="mt-2">{t('footer_email')}</p>
          <a href="mailto:support@edu-ai.com" className="mt-1 inline-block text-[#14d3b2] transition-colors hover:text-white">
            support@edu-ai.com
          </a>
        </motion.div>
      </motion.div>
      {/* Copyright notice at the bottom */}
      <div className="mt-20 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
        <p>{t('footer_copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};

export default Footer;