"use client";

import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"
import { CookiePolicy } from "@/components/cookie-policy";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <CookiePolicy/>
      </main>
    </div>
  )
}
