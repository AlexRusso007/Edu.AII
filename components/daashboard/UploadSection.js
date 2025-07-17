"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, FileText, Link } from 'lucide-react';

const UploadSection = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <h2 className="text-xl font-semibold text-gray-800">Upload a Document</h2>
            <p className="mt-1 text-gray-500">Upload a file to get started with summaries, flashcards, and quizzes.</p>

            <motion.div 
                className="mt-6 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center"
                whileHover={{ scale: 1.02, borderColor: '#14d3b2' }}
            >
                <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <UploadCloud size={48} className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text" />
                </motion.div>
                <p className="mt-4 font-semibold text-gray-700">Drag & drop files here</p>
                <p className="text-sm text-gray-500">or</p>
                <motion.button 
                    className="mt-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 font-semibold text-white transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Browse Files
                </motion.button>
                <p className="mt-4 text-xs text-gray-400">Supported formats: PDF, DOCX, TXT, PPTX</p>
            </motion.div>

            <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-sm text-gray-500">OR</span>
                <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            <div className="relative mt-8">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Link size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-transparent bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text" />
                </motion.div>
                <motion.input 
                    type="text" 
                    placeholder="Paste a URL from the web" 
                    className="w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    whileFocus={{ scale: 1.01 }}
                />
            </div>
        </motion.div>
    );
};

export default UploadSection;