"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cookie, X } from "lucide-react"
import { useTranslations } from "next-intl"

export function CookiePolicy() {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations("cookie_policy")

  useEffect(() => {
    // Check if the informational notice has been seen
    const dismissed = localStorage.getItem("cookie_notice_dismissed")
    
    // Show banner after a short delay if not dismissed
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem("cookie_notice_dismissed", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 z-50 w-full max-w-sm md:bottom-8 md:right-8"
        >
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-background/80 p-6 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
                {/* Decorative gradients */}
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
                
                <div className="relative flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                        <div className="hidden rounded-full bg-primary/10 p-2 text-primary sm:block">
                            <Cookie className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold leading-none tracking-tight flex items-center gap-2">
                                <Cookie className="h-4 w-4 sm:hidden text-primary" />
                                {t("title")}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {t("description")}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex justify-end">
                        <Button size="sm" onClick={handleDismiss} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                            {t("accept")}
                        </Button>
                    </div>
                </div>
                
                 <button 
                    onClick={handleDismiss}
                    className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground opacity-50 transition-opacity hover:opacity-100 hover:bg-secondary"
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </button>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}