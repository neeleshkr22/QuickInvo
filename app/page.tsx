"use client";

import { useState } from "react";
import InvoicePreview from "@/components/invoice-preview";
import InvoiceForm from "@/components/invoice-form";
import { Button } from "@/components/ui/button";
import { Eye, Github, Star, Moon } from "lucide-react";
import { NotepadTextDashed } from 'lucide-react';
import { CircleArrowOutUpRight } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';


export default function Home() {
  const [started, setStarted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // 👉 Invoice Generator Page
  if (started) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white p-3 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">QuickInvo</h1>
              <p className="text-gray-400">Create professional invoices quickly</p>
            </div>
            <Button
              onClick={() => setShowPreview(!showPreview)}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              <Eye className="mr-2 w-4 h-4" />
              {showPreview ? "Back to Form" : "Preview Invoice"}
            </Button>
          </div>
          {showPreview ? (
            <InvoicePreview onBack={() => setShowPreview(false)} />
          ) : (
            <InvoiceForm />
          )}

        </div>
      </div>
    );
  }

  // 👉 Landing Page
  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col ">

      <header className="flex items-center justify-between px-4 sm:px-8 py-5 border-b border-neutral-800 sm:ml-50 sm:mr-50">
        <div className="flex items-center space-x-2">
          <div className="bg-transparent rounded-md">
            <NotepadTextDashed className="w-5 h-5 text-white" />
          </div>
          <span className="font-serif font-stretch-condensed text-lg">QuickInvo</span>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <Moon className="w-4 h-4 mr-1" />
          </Button>
          <Button
            size="sm"
            className="bg-neutral-800 text-gray-200 hover:bg-neutral-700 rounded-full px-4"
            onClick={() => setStarted(true)}
          >
            Invoice It  <CircleArrowOutUpRight className="text-gray-400 size-3 mt-1" />
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6 py-12 sm:py-24 relative overflow-hidden sm:ml-50 sm:mr-50">
        {/* background subtle circles */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(50,50,50,0.3),transparent_70%)]"></div>



        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl mb-6 z-10 leading-tight sm:leading-[0.8] text-center sm:text-start font-mono font-stretch-extra-condensed text-gray-500 sm:mr-80">
          Create <span className="text-amber-50">Beautiful</span> Invoices
          <br />
          Not <span className="text-amber-50">Ugly</span> Ones
        </h1>

        {/* Buttons */}
        <div className="flex flex-col ml-17 sm:flex-row items-center gap-4 mt-6 z-10 sm:mr-[99vh]">
          <Button
            size="lg"
            className="relative overflow-hidden px-6 py-3 rounded-2xl text-white font-semibold
             bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-800 
             shadow-[inset_2px_2px_6px_rgba(255,255,255,0.3),inset_-2px_-2px_6px_rgba(0,0,0,0.6),0_6px_12px_rgba(0,0,0,0.5)]
             hover:from-indigo-700 hover:via-indigo-500 hover:to-indigo-700 
             transition-all duration-300 transform  hover:shadow-[inset_2px_2px_6px_rgba(255,255,255,0.3),inset_-2px_-2px_6px_rgba(0,0,0,0.6),0_8px_16px_rgba(0,0,0,0.6)]"
            onClick={() => setStarted(true)}
          >
            <span className="relative z-10 flex items-center gap-2 font-mono">
              Get Started <ArrowUpRight className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 opacity-40 rounded-2xl pointer-events-none" />
          </Button>

          <Button
            size="lg"
            variant="secondary"
            className="bg-neutral-800 text-gray-200 hover:bg-neutral-700 rounded-full px-6"
          >
            <Github className="w-5 h-5" /> <span className="font-mono">Open Source</span>
          </Button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-8 py-12 sm:py-16 border-t border-neutral-800 bg-neutral-950 sm:mr-50 sm:ml-50">
        <div className="border-r-0 md:border-r border-neutral-800 md:pr-6">
          <h3 className="text-lg font-semibold mb-3">Beautiful</h3>
          <p className="text-gray-400 text-sm">
            Professionally designed and visually appealing invoices can increase
            the chances of clients paying promptly.
          </p>
        </div>
        <div className="border-r-0 md:border-r border-neutral-800 md:px-6">
          <h3 className="text-lg font-semibold mb-3">Free & Unlimited</h3>
          <p className="text-gray-400 text-sm">
            Create and send as many invoices as you need — no limits, no hidden
            costs, just seamless billing freedom.
          </p>
        </div>
        <div className="md:pl-6">
          <h3 className="text-lg font-semibold mb-3">Safe & Open Source</h3>
          <p className="text-gray-400 text-sm">
            Your data stays yours — we never track, sell, or share it.
            Store everything locally or securely — the choice is yours.
          </p>
        </div>
      </section>
    </div>
  );
}
