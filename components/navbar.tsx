"use client"

import { useState, useEffect, useTransition } from "react"
import Link from "next/link"
import { Menu, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useTranslations, useLocale } from "next-intl"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const navLinks = [
	{ href: "#about", key: "about" },
	{ href: "#projects", key: "projects" },
	{ href: "#contact", key: "contact" },
]

export function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)
	const [isPending, startTransition] = useTransition()

	const t = useTranslations("navbar")
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const switchLanguage = () => {
		const nextLocale = locale === "en" ? "it" : "en"
		startTransition(() => {
			const segments = pathname.split("/")
			let newPath = ""

			if (segments[1] === locale) {
				segments[1] = nextLocale
				newPath = segments.join("/")
			} else {
				newPath = `/${nextLocale}${pathname}`
			}

			const query = searchParams?.toString()
			if (query) newPath += `?${query}`

			// preserve hash if present (client-side only)
			if (typeof window !== "undefined" && window.location.hash) {
				newPath += window.location.hash
			}

			router.replace(newPath)
		})
	}

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
			<header
				className={`transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
					scrolled
						? "w-full max-w-md bg-background/70 backdrop-blur-xl border border-border/50 shadow-lg rounded-fulltranslate-y-0"
						: "w-full max-w-lg bg-transparent border-transparent shadow-none translate-y-2"
				}`}
			>
				<nav className="px-5 py-2.5 flex items-center justify-between">
					<Link
						href="/"
						className="flex items-center gap-2 font-semibold group transition-transform duration-300 hover:scale-105 active:scale-95"
					>
						<span className="text-primary font-mono group-hover:rotate-12 transition-transform">
							&lt;/&gt;
						</span>
						<span className="text-foreground">Cristian Poretto</span>
					</Link>
					<div className="flex items-center gap-1">
						<Button
							variant="ghost"
							size="icon"
							onClick={switchLanguage}
							className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-300"
							disabled={isPending}
						>
							<span className="text-sm font-bold">{locale === "en" ? "IT" : "EN"}</span>
							<span className="sr-only">Switch language</span>
						</Button>
						<ThemeToggle />
						<Sheet open={open} onOpenChange={setOpen}>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-300"
								>
									<Menu className="h-5 w-5" />
									<span className="sr-only">{t("sr_open_menu")}</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-64 pt-12">
								<SheetTitle className="sr-only">Navbar menu</SheetTitle>
								<div className="flex flex-col gap-2">
									{navLinks.map((link, i) => (
										<Link
											key={link.href}
											href={link.href}
											onClick={() => setOpen(false)}
											className="text-lg font-medium text-foreground/60 hover:text-primary hover:translate-x-2 transition-all duration-300 p-2 rounded-lg hover:bg-primary/5"
											style={{ transitionDelay: `${i * 50}ms` }}
										>
											{t(`links.${link.key}`)}
										</Link>
									))}
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</nav>
			</header>
		</div>
	)
}
