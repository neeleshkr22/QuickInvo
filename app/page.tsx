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
      <div className="min-h-screen bg-neutral-950 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold font-mono">QuickInvo</h1>
              <p className="text-gray-400 font-mono">Create professional invoices quickly</p>
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

      <header className="flex items-center justify-between px-8 py-5 border-b border-neutral-800 ml-50 mr-50">
        <div className="flex items-center space-x-2">
          <div className="bg-transparent rounded-md">
            <NotepadTextDashed className="w-5 h-5 text-white" />
          </div>
          <span className=" font-serif font-stretch-condensed text-lg">QuickInvo</span>
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
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-24 relative overflow-hidden ml-50 mr-50">
        {/* background subtle circles */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(50,50,50,0.3),transparent_70%)]"></div>



        {/* Heading */}
        <h1 className="text-5xl sm:text-5xl  mb-6 z-10 leading-0.8 text-start font-mono font-stretch-extra-condensed text-gray-500 mr-80">
          Create <span className="text-amber-50">Beautiful</span> Invoices
          <br />
          Not <span className="text-amber-50 ">Ugly</span> Ones
        </h1>

        {/* Buttons */}
        <div className="flex mr-[99vh] gap-4 mt-6 z-10 ml-16 ">
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
            <Github className="w-5 mt-1 font-mono mr-2 "  /> <div className="font-mono"><a href="https://github.com/neeleshkr22/QuickInvo">Open Source</a> </div>
          </Button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-16 border-t border-neutral-800 bg-neutral-950 mr-50 ml-50">
        <div className="border-r border-neutral-800 pr-6">
          <h3 className="text-lg font-semibold font-mono mb-3">Beautiful</h3>
          <p className="text-gray-400 text-sm font-mono">
            Professionally designed and visually appealing invoices can increase
            the chances of clients paying promptly.
          </p>
        </div>
        <div className="border-r border-neutral-800 px-6">
          <h3 className="text-lg font-semibold font-mono mb-3">Free & Unlimited</h3>
          <p className="text-gray-400 text-sm font-mono">
            Create and send as many invoices as you need — no limits, no hidden
            costs, just seamless billing freedom.
          </p>
        </div>
        <div className="pl-6">
          <h3 className="text-lg font-semibold mb-3 font-mono">Safe & Open Source</h3>
          <p className="text-gray-400 text-sm font-mono">
            Your data stays yours — we never track, sell, or share it.
            Store everything locally or securely — the choice is yours.
          </p>
        </div>
      </section>
    </div>
  );
}
