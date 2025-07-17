"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Rocket,       // Bu ikonka saqlanib qoldi
    Clock,        // History o'rniga
    ChevronRight, 
    BookOpen,     // BrainCircuit o'rniga
    Target,       // Lightbulb o'rniga
    Trophy        // ClipboardCheck o'rniga
} from 'lucide-react';

// --- O'ZGARTIRILGAN QISM: Yangi ikonlar bilan ma'lumotlar ---
const recentQuizzes = [
  { id: 1, topic: 'Quantum Mechanics Basics', questions: 15, lastTaken: '2 days ago', icon: BookOpen },
  { id: 2, topic: 'General Relativity', questions: 10, lastTaken: '1 week ago', icon: Target },
  { id: 3, topic: 'The Standard Model of Physics', questions: 20, lastTaken: '3 weeks ago', icon: Trophy },
];

const containerVariants = { /* ... o'zgarmagan ... */ };
const itemVariants = { /* ... o'zgarmagan ... */ };

const QuizSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Asosiy Sarlavha (o'zgarmagan) */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-gray-900">Knowledge Checkpoint</h2>
        <p className="mt-1 text-gray-600">Start a new quiz or review your past attempts.</p>
      </motion.div>

      {/* YANGI VIKTORINA BOSHLASH PANELI (o'zgarmagan, ROCKET qoldi) */}
      <motion.div
        className="group relative mt-8 overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-8 text-white shadow-2xl"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative z-10 flex flex-col items-start md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket size={48} className="text-[#14d3b2]" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold">Start a New Quiz</h3>
              <p className="text-gray-400">Challenge yourself on any topic.</p>
            </div>
          </div>
          <motion.button 
            className="mt-6 w-full rounded-lg bg-gradient-to-r from-[#14d3b2] to-[#0ea5e9] py-3 px-6 font-bold text-[#10131a] shadow-lg shadow-[#14d3b2]/20 transition-all duration-500 ease-out md:mt-0 md:w-auto"
            whileHover={{ scale: 1.03, y: -3, boxShadow: '0 15px 25px -5px rgba(20, 211, 178, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            Generate Quiz
          </motion.button>
        </div>
        <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-gradient-to-r from-[#14d3b2]/20 to-[#0ea5e9]/20"></div>
        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r from-[#14d3b2]/10 to-[#0ea5e9]/10"></div>
      </motion.div>
      
      {/* SO'NGGI VIKTORINALAR RO'YXATI (yangi ikonlar bilan ishlaydi) */}
      <motion.div className="mt-12" variants={itemVariants}>
        <div className="flex items-center gap-3">
          <Clock size={20} className="text-gray-500" />
          <h3 className="text-xl font-semibold text-gray-800">Recent Quizzes</h3>
        </div>
        
        <div className="mt-4 space-y-3">
          {recentQuizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              className="group flex items-center justify-between rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 p-4 shadow-sm transition-all duration-500 ease-out hover:border-[#14d3b2] hover:shadow-lg"
              whileHover={{ scale: 1.01, x: 3 }}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 p-3">
                    <quiz.icon size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{quiz.topic}</p>
                  <p className="text-sm text-gray-500">{quiz.questions} questions - Last taken: {quiz.lastTaken}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400 transition-colors group-hover:text-[#14d3b2]" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuizSection;