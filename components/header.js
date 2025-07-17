"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import LanguageChanger from './LanguageChanger';

const navVariants = { /* ... */ };
const linkHoverTap = { /* ... */ };
const buttonHoverTap = { /* ... */ };
const dropdownVariants = { /* ... */ };
const languages = [
  { code: 'uz', name: 'Uzbek' },
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Russian' },
];

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation('common');

  return (
    <>
      <motion.nav
        className="absolute top-0 left-0 z-50 flex w-full items-center justify-between py-4 px-6 text-white md:px-16"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ===== LOGO ===== */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-wider md:text-4xl">EDU.AI</h1>
          <p className="-mt-1 ml-0.5 text-xs font-light text-gray-300 tracking-wide md:text-sm">
            {t('slogan')}
          </p>
        </div>

        {/* ===== DESKTOP NAVIGATION ===== */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-10">
            <motion.li className="cursor-pointer text-gray-300" variants={linkHoverTap} whileHover="hover" whileTap="tap">{t('features')}</motion.li>
            <motion.li className="cursor-pointer text-gray-300" variants={linkHoverTap} whileHover="hover" whileTap="tap">{t('useCases')}</motion.li>
            <motion.li className="cursor-pointer text-gray-300" variants={linkHoverTap} whileHover="hover" whileTap="tap">{t('pricing')}</motion.li>
          </ul>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <LanguageChanger className="rounded-lg border border-white px-4 py-2 font-semibold transition-colors hover:bg-[#14d3b2] hover:text-[#10131a] cursor-pointer" />
            </div>
            <motion.button className="rounded-lg border border-white px-6 py-2 font-semibold transition-colors hover:bg-white hover:text-black" variants={linkHoverTap} whileHover="hover" whileTap="tap">
              {t('signin')}
            </motion.button>
            <motion.button className="rounded-lg bg-[#14d3b2] px-6 py-2 font-bold text-[#10131a] transition-colors hover:bg-[#11b89c]" variants={buttonHoverTap} whileHover="hover" whileTap="tap">
              {t('signup')}
            </motion.button>
          </div>
        </div>
        {/* MOBILE MENU BUTTON */}
        <div className="flex md:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>
      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 z-50 flex h-screen w-full flex-col items-center justify-center gap-8 bg-[#10131a] text-2xl text-white md:hidden"
          >
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6">
              <X size={32} />
            </button>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>{t('features')}</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>{t('useCases')}</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>{t('pricing')}</a>
            <hr className="w-1/2 border-gray-600"/>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>{t('signIn')}</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="rounded-lg bg-[#14d3b2] px-8 py-3 font-bold text-[#10131a]">{t('signUp')}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;