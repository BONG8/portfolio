"use client"

import { Compass, Code2, Sparkles } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

const techStack = [
	{ name: "Next.js", icon: "▲" },
	{ name: "React", icon: "⚛" },
	{ name: "TypeScript", icon: "TS" },
	{ name: "Tailwind", icon: "🎨" },
	{ name: "Node.js", icon: "⬢" },
	{ name: "Python", icon: "🐍" },
	{ name: "Java", icon: "☕" },
]

function useScrollAnimation() {
	const elementRef = useRef<HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.1 }
		)
		if (elementRef.current) observer.observe(elementRef.current)
		return () => observer.disconnect()
	}, [])

	return { elementRef, isVisible }
}

export function About() {
	const t = useTranslations("about")
	const header = useScrollAnimation()
	const journey = useScrollAnimation()
	const arsenal = useScrollAnimation()
	const beyond = useScrollAnimation()

	return (
		<section id="about" className="py-24 container mx-auto px-4">
			<div
				ref={header.elementRef}
				className={`flex items-center justify-between mb-12 transition-all duration-700 ease-out ${
					header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				}`}
			>
				<h2 className="text-3xl font-bold tracking-tight text-foreground">{t("title")}</h2>
			</div>

			<div className="space-y-12">
				{/* Journey Section */}
				<div ref={journey.elementRef} className="relative">
					<Card
						className={`overflow-hidden transition-all duration-1000 ease-out border-l-4 border-l-primary/20 ${
							journey.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
						}`}
					>
						<CardContent className="pt-8 pb-8">
							<div className="flex items-center gap-3 mb-8">
								<div className="p-2 bg-primary/10 rounded-lg">
									<Compass className="w-5 h-5 text-primary" />
								</div>
								<h4 className="font-bold text-xl text-foreground">{t("journey.title")}</h4>
							</div>

							<div className="relative pl-6 space-y-8">
								{/* Animated Timeline Line */}
								<div
									className="absolute left-0 top-2 bottom-2 w-0.5 bg-linear-to-b from-primary to-transparent transition-all duration-1000 ease-in-out"
									style={{ height: journey.isVisible ? "100%" : "0%" }}
								/>

								<div
									className={`relative transition-all duration-700 delay-300 ${
										journey.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
									}`}
								>
									<div className="absolute -left-7.25 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
									<Badge variant="secondary" className="mb-3">
										{t("journey.beginning")}
									</Badge>
									<p className="text-base text-muted-foreground leading-relaxed">
										{t("journey.beginningDesc")}
									</p>
								</div>

								<div
									className={`relative transition-all duration-700 delay-500 ${
										journey.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
									}`}
								>
									<div className="absolute -left-7.25 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background animate-ping" />
									<Badge variant="secondary" className="mb-3">
										{t("journey.current")}
									</Badge>
									<p className="text-base text-muted-foreground leading-relaxed">
										{t.rich("journey.currentDesc", {
											important: (chunks) => <span className="text-primary font-bold">{chunks}</span>
										})}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Arsenal Section */}
				<div
					ref={arsenal.elementRef}
					className={`transition-all duration-700 delay-100 ${
						arsenal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
					}`}
				>
					<Card className="overflow-visible bg-transparent border-0 shadow-none sm:bg-card sm:border sm:shadow-sm">
						<CardContent className="p-0 sm:p-6 sm:pt-6">
							<div className="flex items-center gap-3 mb-8 px-1 sm:px-0">
								<div className="p-2 bg-primary/10 rounded-lg">
									<Code2 className="w-5 h-5 text-primary" />
								</div>
								<h4 className="font-bold text-xl text-foreground">{t("arsenal.title")}</h4>
							</div>

							<div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
								{techStack.map((tech, index) => (
									<div
										key={tech.name}
										className={`group relative flex flex-col items-center gap-3 p-4 bg-linear-to-b from-secondary/50 to-secondary/10 border border-border/50 rounded-xl transition-all duration-500 hover:z-10 hover:scale-105 hover:bg-secondary hover:border-primary/50 hover:shadow-xl ${
											arsenal.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
										}`}
										style={{ transitionDelay: `${index * 50}ms` }}
									>
										<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-background shadow-sm group-hover:scale-110 group-hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center text-primary text-2xl sm:text-3xl">
											{tech.icon}
										</div>
										<span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
											{tech.name}
										</span>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Beyond Code Section */}
				<div
					ref={beyond.elementRef}
					className={`flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-secondary/20 p-6 rounded-2xl border border-border/50 backdrop-blur-sm transition-all duration-1000 delay-200 ${
						beyond.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
					}`}
				>
					<div className="p-3 bg-background rounded-full shadow-sm shrink-0">
						<Sparkles className="w-6 h-6 text-primary animate-pulse" />
					</div>
					<div>
						<h4 className="font-bold text-foreground mb-2">{t("beyond.title")}</h4>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{t("beyond.description")}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
