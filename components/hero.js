"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, HelpCircle, Layers3 } from 'lucide-react'; // Modern, clean icons
import CodeAnimator from './codeanimator'; // We will create this next
import { useTranslation } from 'next-i18next';

// Animation variants for the parent container of the features
const featuresContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
    },
  },
};

// Animation variants for each individual feature item
const featureItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const { t } = useTranslation('common');
  const headline = t('hero_headline');

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-[#182633] overflow-hidden">
      {/* Left Side: Astronaut Illustration */}
      <div className="hidden md:flex flex-1 items-center justify-center h-auto mt-[160px] ml-[20px]">
        <Image
          src="/IMAGE/back.png"
          alt="Astronaut sitting on the moon in space"
          width={900}
          height={500}
          className="object-contain"
          priority
        />
      </div>
      {/* Right Side: Text Box */}
      <motion.div
        className="flex flex-1 items-center justify-center w-full h-auto px-8"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 max-w-xl w-full text-right">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-4 drop-shadow-lg"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.07 }}
          >
            {headline.split(/(\s+)/).map((word, index) => (
              word.trim() === '' ? ' ' : (
                <motion.span
                  key={index}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  {word}
                </motion.span>
              )
            ))}
          </motion.h1>
          <div className="text-base font-semibold text-orange-400 mb-2">{t('hero_welcome')}</div>
          <div className="text-base text-gray-200 mb-6">
            {t('hero_summary')}<br/>
            {t('hero_quiz')}<br/>
            {t('hero_flashcards')}
          </div>
          <motion.button
            className="mt-2 w-fit rounded-lg bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 px-8 py-3 font-bold text-navy shadow-lg hover:from-cyan-500 hover:to-blue-500 hover:scale-105 transition-all text-lg"
            whileHover={{ scale: 1.08, boxShadow: '0 0 32px #2dd4bf' }}
            whileTap={{ scale: 0.97 }}
          >
            {t('hero_cta')}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;