"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Flashcard from './Flashcard';

const flashcardData = [
  {
    id: 1,
    question: "What is Wave-Particle Duality?",
    answer: "The principle that all particles exhibit both wave and particle properties."
  },
  {
    id: 2,
    question: "What does the Uncertainty Principle state?",
    answer: "It's impossible to know both the exact position and momentum of a particle at the same time."
  },
  {
    id: 3,
    question: "Define Quantum Entanglement.",
    answer: "A phenomenon where particles are linked so their fates are intertwined, regardless of distance."
  },
  {
    id: 4,
    question: "Who developed the theory of general relativity?",
    answer: "Albert Einstein."
  },
  {
    id: 5,
    question: "What is a black hole's event horizon?",
    answer: "The 'point of no return', the boundary beyond which events cannot affect an outside observer."
  },
  {
    id: 6,
    question: "What is dark matter?",
    answer: "A hypothetical form of matter believed to make up 85% of the universe's matter."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const FlashcardsSection = () => {
  return (
    // --- YANGI DIZAYN: To'q fonli konteyner ---
    <div className="rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 p-8 shadow-2xl">
      <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
      >
        {/* Sarlavha qismi */}
        <div className="flex items-center justify-between">
          <div>
              <h2 className="text-2xl font-bold text-white">Generated Flashcards</h2>
              <p className="mt-1 text-gray-400">Click on any holographic panel to reveal the answer.</p>
          </div>
          <button className="rounded-lg bg-[#14d3b2] px-5 py-2 font-semibold text-[#10131a] transition hover:bg-opacity-90">
              Export All
          </button>
        </div>
        
        {/* Kartochkalar uchun grid */}
        <motion.div 
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {flashcardData.map((card) => (
            <Flashcard key={card.id} question={card.question} answer={card.answer} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlashcardsSection;