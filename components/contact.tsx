"use client"

import type React from "react"
import { useState } from "react"
import { Github, Linkedin, Download, User, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useTranslations } from "next-intl"

const socialLinks = [
	{ icon: Github, href: "https://github.com/BONG8", label: "GitHub" },
	{ icon: Linkedin, href: "https://www.linkedin.com/in/cristian-poretto-7949a23a4/", label: "LinkedIn" },
]

export function Contact() {
	const t = useTranslations("contact")

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})
	const [focusedField, setFocusedField] = useState<string | null>(null)

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut" as any,
				staggerChildren: 0.1,
			},
		},
	} as any

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 },
	}

	return (
		<section id="contact" className="py-24 px-4">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				variants={containerVariants}
				className="max-w-3xl mx-auto"
			>
				<Card className="overflow-hidden border-muted/40 shadow-2xl bg-card/50 backdrop-blur-sm">
					<CardHeader className="text-center relative overflow-hidden">
						<motion.div
							className="w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent"
							animate={{ x: ["-100%", "100%"] }}
							transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
						/>
						<motion.p
							variants={itemVariants}
							className="text-xs text-primary font-medium uppercase tracking-wider mb-2"
						>
							{t("subtitle")}
						</motion.p>
						<motion.div variants={itemVariants}>
							<CardTitle className="text-3xl font-bold mb-2">{t("title")}</CardTitle>
						</motion.div>
						<motion.div variants={itemVariants}>
							<CardDescription className="text-base max-w-xs mx-auto">
								{t("description")}
							</CardDescription>
						</motion.div>
					</CardHeader>

					<CardContent>
						<form action="https://formsubmit.co/poretto.cristian07@gmail.com" method="POST" className="space-y-5">
							<motion.div variants={itemVariants} className="space-y-2">
								<Label
									htmlFor="name"
									className="text-xs font-semibold uppercase text-muted-foreground ml-1"
								>
									{t("form.name")}
								</Label>
								<motion.div className="relative group" whileTap={{ scale: 0.995 }}>
									<User
										className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
											focusedField === "name"
												? "text-primary"
												: "text-muted-foreground"
										}`}
									/>
									<Input
										id="name"
										placeholder={t("form.namePlaceholder")}
                    name="name"
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
										onFocus={() => setFocusedField("name")}
										onBlur={() => setFocusedField(null)}
										className="pl-10 bg-secondary/30 border-secondary-foreground/10 focus:border-primary/50 transition-all duration-300 h-11"
									/>
								</motion.div>
							</motion.div>

							<motion.div variants={itemVariants} className="space-y-2">
								<Label
									htmlFor="email"
									className="text-xs font-semibold uppercase text-muted-foreground ml-1"
								>
									{t("form.email")}
								</Label>
								<motion.div className="relative group" whileTap={{ scale: 0.995 }}>
									<Mail
										className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
											focusedField === "email"
												? "text-primary"
												: "text-muted-foreground"
										}`}
									/>
									<Input
										id="email"
										type="email"
                    name="email"
										placeholder={t("form.emailPlaceholder")}
										value={formData.email}
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
										onFocus={() => setFocusedField("email")}
										onBlur={() => setFocusedField(null)}
										className="pl-10 bg-secondary/30 border-secondary-foreground/10 focus:border-primary/50 transition-all duration-300 h-11"
									/>
								</motion.div>
							</motion.div>

							<motion.div variants={itemVariants} className="space-y-2">
								<Label
									htmlFor="message"
									className="text-xs font-semibold uppercase text-muted-foreground ml-1"
								>
									{t("form.message")}
								</Label>
								<div className="relative group">
									<MessageSquare
										className={`absolute left-3 top-4 w-4 h-4 transition-colors duration-300 ${
											focusedField === "message"
												? "text-primary"
												: "text-muted-foreground"
										}`}
									/>
									<Textarea
										id="message"
                    name="message"
										placeholder={t("form.messagePlaceholder")}
										value={formData.message}
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
										onFocus={() => setFocusedField("message")}
										onBlur={() => setFocusedField(null)}
										className="pl-10 min-h-32 bg-secondary/30 border-secondary-foreground/10 focus:border-primary/50 transition-all duration-300 resize-none py-3"
									/>
								</div>
							</motion.div>

							<motion.div variants={itemVariants} className="pt-2">
								<Button
									type="submit"
									className="w-full h-11 text-base font-medium group relative overflow-hidden"
								>
									<span className="relative z-10 flex items-center justify-center gap-2">
										{t("form.submit")}
										<motion.span
											animate={{ x: [0, 4, 0] }}
											transition={{
												repeat: Infinity,
												duration: 1.5,
												repeatDelay: 1,
											}}
										>
											➤
										</motion.span>
									</span>
									<div className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
								</Button>
							</motion.div>
						</form>

						<motion.div variants={itemVariants} className="text-center mt-10">
							<div className="flex items-center gap-4 justify-center mb-6">
								<div className="h-px bg-muted-foreground/20 flex-1" />
								<span className="text-xs text-muted-foreground uppercase tracking-wider">
									{t("connect")}
								</span>
								<div className="h-px bg-muted-foreground/20 flex-1" />
							</div>

							<div className="flex justify-center gap-4">
								{socialLinks.map((social) => (
									<motion.div
										key={social.label}
										whileHover={{ y: -4, scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Link
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="flex flex-col items-center gap-2 p-4 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors min-w-22.5 group border border-transparent hover:border-primary/20"
										>
											<social.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
											<span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
												{social.label}
											</span>
										</Link>
									</motion.div>
								))}
							</div>
						</motion.div>
					</CardContent>

					<CardFooter className="flex flex-col gap-6 border-t border-muted/40 pt-8 bg-muted/10">
						<motion.div variants={itemVariants} className="w-full">
							<p className="text-sm font-medium text-center mb-4">
								{t("buildTogether")}
							</p>
							<Button
								asChild
								variant="outline"
								className="w-full border-dashed border-muted-foreground/30 hover:border-primary hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-300 h-12"
							>
								<Link href="/resume.pdf" target="_blank">
									<Download className="w-4 h-4 mr-2" />
									{t("downloadResume")}
								</Link>
							</Button>
						</motion.div>
						<motion.p
							variants={itemVariants}
							className="text-center text-[10px] text-muted-foreground/60 uppercase tracking-widest"
						>
							{t("copyright")}
						</motion.p>
					</CardFooter>
				</Card>
			</motion.div>
		</section>
	)
}
