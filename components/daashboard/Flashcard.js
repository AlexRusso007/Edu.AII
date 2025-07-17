"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle } from 'lucide-react';

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 100, damping: 15 }},
};

const Flashcard = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className="group h-72 cursor-pointer [perspective:1000px]"
            onClick={() => setIsFlipped(!isFlipped)}
            variants={cardVariants}
        >
            <motion.div
                className="relative h-full w-full rounded-2xl [transform-style:preserve-3d] transition-transform duration-700"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                whileHover={{ scale: 1.05 }}
            >
                {/* --- Old Tomoni (Savol) --- */}
                <div className="absolute flex h-full w-full flex-col justify-between rounded-2xl p-6 text-white shadow-xl [backface-visibility:hidden] 
                               bg-gradient-to-br from-gray-600/40 via-gray-700/50 to-gray-800/60 backdrop-blur-sm 
                               border border-white/20 transition-all duration-300 group-hover:border-[#14d3b2]">
                    
                    <div className="flex items-center gap-2 opacity-80">
                        <HelpCircle size={18} />
                        <span className="text-sm font-medium uppercase tracking-wider">Question</span>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-2xl font-bold text-center">{question}</p>
                    </div>

                    <div className="h-4"></div>
                </div>

                {/* --- Orqa Tomoni (Javob) --- */}
                <div className="absolute flex h-full w-full flex-col justify-between rounded-2xl p-6 text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] 
                               bg-gradient-to-br from-[#103442]/90 via-[#14d3b2]/60 to-[#102c38]/90 backdrop-blur-md
                               border border-[#14d3b2]/80">
                    
                    <div className="flex items-center gap-2 text-[#99f6e4]">
                        <CheckCircle size={18} />
                        <span className="text-sm font-bold uppercase tracking-wider">Answer</span>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-xl text-center leading-relaxed text-gray-200">{answer}</p>
                    </div>

                    <div className="h-4"></div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Flashcard;