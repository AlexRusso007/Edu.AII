"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, HelpCircle, Layers3 } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
};

const FeaturesSlider = () => {
  const { t } = useTranslation('common');
  const features = [
    {
      id: 1,
      title: t('features_1_title'),
      subtitle: t('features_1_subtitle'),
      description: t('features_1_description'),
      icon: null,
      image: '/IMAGE/moon-guy.png'
    },
    {
      id: 2,
      title: t('features_2_title'),
      subtitle: t('features_2_subtitle'),
      description: t('features_2_description'),
      Icon: BookOpen,
      image: null
    },
    {
      id: 3,
      title: t('features_3_title'),
      subtitle: t('features_3_subtitle'),
      description: t('features_3_description'),
      Icon: HelpCircle,
      image: null
    },
    {
      id: 4,
      title: t('features_4_title'),
      subtitle: t('features_4_subtitle'),
      description: t('features_4_description'),
      Icon: Layers3,
      image: null
    },
  ];

  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (newDirection) => {
    const newPage = (page + newDirection + features.length) % features.length;
    setPage([newPage, newDirection]);
  };

  const currentFeature = features[page];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        paginate(1);
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, [isHovered, page]);

  return (
    // UPDATED: Direct background color
    <section 
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#10131a]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute flex h-full w-full flex-col items-center justify-center gap-8 px-4"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">{currentFeature.title}</h2>
            <p className="mt-2 text-lg text-gray-400">{currentFeature.subtitle}</p>
          </div>
          
          <div className="relative h-64 w-64">
            {currentFeature.image ? (
              // Make sure your image is in `public/images/moon-guy.png`
              <Image src={currentFeature.image} layout="fill" objectFit="contain" alt={currentFeature.title} />
            ) : (
              // UPDATED: Direct text color for the icon
              <currentFeature.Icon className="h-full w-full text-[#14d3b2]" />
            )}
          </div>
          
          <p className="max-w-xl text-center text-lg text-gray-300">{currentFeature.description}</p>
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={30} />
      </button>
      <button
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        onClick={() => paginate(1)}
      >
        <ChevronRight size={30} />
      </button>
      
      <div className="absolute bottom-10 z-10 flex space-x-3">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > page ? 1 : -1])}
            // UPDATED: Direct background color for the active dot
            className={`h-3 w-3 rounded-full transition-all ${page === index ? 'w-6 bg-[#14d3b2]' : 'bg-gray-600'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSlider;