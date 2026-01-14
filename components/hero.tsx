"use client"

import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useTranslations } from "next-intl"

const socialLinks = [
	{ icon: Github, href: "https://github.com/BONG8", label: "GitHub" },
	{ icon: Mail, href: "mailto:poretto.cristian07@gmail.com", label: "Email" },
]

export function Hero() {
	const t = useTranslations("hero")

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	}

	const itemVariants: Variants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 50 },
		},
	}

	return (
		<section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 text-center overflow-hidden">
			{/* Cinematic ambient background */}
			<motion.div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-125 sm:h-125 bg-primary/10 rounded-full blur-[100px] -z-10"
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="flex flex-col items-center relative z-10"
			>
				<motion.div variants={itemVariants} className="relative mb-6">
					<div className="rounded-full p-1 bg-linear-to-br from-primary to-primary/50">
						<Avatar className="w-32 h-32 border-4 border-background">
							<AvatarImage
								src="/professional-developer-portrait-young-man.jpg"
								alt="Profile photo"
							/>
							<AvatarFallback className="text-2xl">PC</AvatarFallback>
						</Avatar>
					</div>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 1, type: "spring" }}
						className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-background"
					/>
				</motion.div>

				<motion.h1
					variants={itemVariants}
					className="text-3xl font-bold text-foreground mb-2"
				>
					{t("greeting")}{" "}
					<span className="text-primary">{t("name")}</span>
				</motion.h1>

				<motion.p
					variants={itemVariants}
					className="text-muted-foreground text-sm mb-2"
				>
					{t("role")}
				</motion.p>

				<motion.p
					variants={itemVariants}
					className="text-muted-foreground/70 text-sm max-w-xs mb-8 leading-relaxed"
				>
					{t("description")}
				</motion.p>

				<motion.div
					variants={itemVariants}
					className="flex flex-col gap-3 w-full max-w-xs mb-8"
				>
					<Button asChild size="lg" className="group">
						<Link href="#projects">
							{t("viewWork")}
							<span className="ml-2 group-hover:translate-x-1 transition-transform">
								→
							</span>
						</Link>
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link href="#about">
							<span className="mr-2">👤</span>
							{t("aboutMe")}
						</Link>
					</Button>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="flex items-center gap-4"
				>
					{socialLinks.map((social) => (
						<Link
							key={social.label}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all hover:scale-110 active:scale-95"
							aria-label={social.label}
						>
							<social.icon className="w-5 h-5" />
						</Link>
					))}
				</motion.div>
			</motion.div>
		</section>
	)
}
