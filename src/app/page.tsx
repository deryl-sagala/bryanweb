"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Feather, Book, Sparkles } from 'lucide-react';
import Image from "next/image";

const SpellEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      animate={{ opacity: [0, 0.5, 0] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      <motion.div
        className="absolute w-4 h-4 bg-yellow-300 rounded-full mix-blend-screen filter blur-sm"
        style={{ x: position.x - 8, y: position.y - 8 }}
      />
    </motion.div>
  );
};

const HomePage = () => {
  const [hoveredNav, setHoveredNav] = useState(null);


  return (
    <div className="min-h-screen bg-[url('/cropped.jpg')] bg-cover bg-fixed font-serif text-amber-100">
      <SpellEffect />
      <div className="min-h-screen bg-gradient-to-b from-slate-900/80 to-slate-800/80 backdrop-blur-sm">
        <header className="bg-slate-900/50 backdrop-blur-md sticky top-0 z-10 border-b border-amber-800/30">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.h1
              className="text-3xl font-light text-amber-300 tracking-wide flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hogwarts<span className="font-semibold">Express</span>
              <Wand2 className="ml-2 text-amber-300" size={24} />
            </motion.h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-1">
                {['Great Hall', 'Library', 'Quidditch', 'Potions', 'Spells'].map((item) => (
                  <motion.li
                    key={item}
                    // @ts-ignore
                    onHoverStart={() => setHoveredNav(item)}
                    onHoverEnd={() => setHoveredNav(null)}
                  >
                    <Button
                      variant="ghost"
                      className="text-amber-200 hover:text-amber-100 text-sm font-medium relative overflow-hidden"
                    >
                      {item}
                      <AnimatePresence>
                        {hoveredNav === item && (
                          <motion.div
                            className="absolute inset-0 bg-amber-700/30"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <motion.div
            className="h-[70vh] bg-cover bg-center rounded-lg shadow-lg mb-12 overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image width={2880} height={1800} src="/castle.jpg" alt="Hogwarts Castle" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/20 flex items-center">
              <div className="text-amber-100 p-12">
                <motion.h2
                  className="text-5xl md:text-6xl font-light mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Welcome to Hogwarts
                </motion.h2>
                <motion.p
                  className="text-xl md:text-2xl font-light mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Where magic begins and adventures never end
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button className="bg-amber-700 text-amber-100 hover:bg-amber-600 transition-colors duration-300">
                    Enroll Now
                  </Button>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="absolute top-4 right-4 text-amber-300"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={32} />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="bg-slate-800/50 backdrop-blur-sm border border-amber-800/30 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-900/50 to-amber-800/30">
                  <CardTitle className="text-2xl text-amber-200 font-light flex items-center">
                    The Magic of Hogwarts
                    <Feather className="ml-2 text-amber-300" size={24} />
                  </CardTitle>
                  <p className="text-sm text-amber-300">Written by <a href="#" className="text-amber-400 hover:underline">Hermione Granger</a> on September 1, 2024</p>
                </CardHeader>
                <CardContent>
                  <motion.p
                    className="mb-4 text-amber-100 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    At Hogwarts School of Witchcraft and Wizardry, every corridor whispers secrets, every classroom
                    holds wonders, and every day brings new magical discoveries. From the enchanted ceiling of the
                    Great Hall to the mysterious depths of the Black Lake, Hogwarts is a place where the extraordinary
                    becomes ordinary, and the impossible becomes possible.
                  </motion.p>
                  <motion.p
                    className="mb-4 text-amber-100 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Here, you&apos;ll learn to channel your inner magic, brew potions that defy logic, and cast spells
                    that can change the world. But more than that, you&apos;ll forge friendships that last a lifetime,
                    face challenges that test your courage, and unlock the true potential of your magical abilities.
                  </motion.p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-slate-800/50 backdrop-blur-sm border border-amber-800/30 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-900/50 to-amber-800/30">
                  <CardTitle className="text-xl text-amber-200 font-light flex items-center">
                    Hogwarts: A History
                    <Book className="ml-2 text-amber-300" size={24} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Image width={500} height={500} src="/gambar.jpg" alt="Hogwarts Crest" className="w-20 h-20 object-cover rounded-full mr-4 shadow-md border-2 border-amber-700" />
                    <p className="text-sm text-amber-100">
                      Explore the rich history and hidden secrets of Hogwarts Castle, from its founding by the four
                      greatest witches and wizards of the age to its role in shaping the wizarding world today.
                    </p>
                  </div>
                  <p className="text-sm text-amber-100 mb-4">
                    Discover the legends of the Chamber of Secrets, unravel the mysteries of the Room of Requirement,
                    and learn about the powerful magical protections that have kept Hogwarts safe for centuries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <footer className="bg-slate-900/70 backdrop-blur-sm text-amber-200 py-8 mt-12 border-t border-amber-800/30">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm font-light">&copy; 2024 Hogwarts School of Witchcraft and Wizardry. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">Owl Post</a>
              <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">Hogsmeade Visits</a>
              <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">Restricted Section</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;