"use client"

import { Code, Globe } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useTranslations } from "next-intl"

const projects = [
	{
		id: "notebuddy",
		tech: ["Next.js", "TypeScript", "Tailwind"],
		live: "https://notebuddy.software/",
		image: "/notebuddy.png",
	},
	{
		id: "webAgency",
		tech: ["Next.js", "Tailwind"],
		live: "https://bong8.github.io/web-agency-landing/",
		github: "https://github.com/BONG8/web-agency-landing",
		image: "/web-agency-landing.png",
	},
]

export function Projects() {
	const t = useTranslations("projects")

	return (
		<section id="projects" className="py-16">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="flex items-center gap-3 mb-10"
			>
				<div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
					<Code className="w-4 h-4 text-primary" />
				</div>
				<div>
					<h2 className="text-lg font-semibold text-foreground">
						{t("title")}
					</h2>
					<p className="text-xs text-muted-foreground">{t("subtitle")}</p>
				</div>
			</motion.div>

			<div className="space-y-10">
				{projects.map((project, index) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						whileHover={{ y: -4 }}
					>
						<Card className="overflow-hidden group border-muted/60 shadow-md hover:shadow-xl transition-all duration-300">
							<CardHeader className="p-0">
								{/* Browser dots */}
								<div className="flex items-center gap-2 px-4 py-3 bg-secondary/80 border-b border-muted/50 backdrop-blur-sm">
									<div className="flex gap-1.5">
										<div className="w-3 h-3 rounded-full bg-red-500/80" />
										<div className="w-3 h-3 rounded-full bg-yellow-500/80" />
										<div className="w-3 h-3 rounded-full bg-green-500/80" />
									</div>
								</div>
								{/* Project Image */}
								<div className="relative aspect-video overflow-hidden">
									<Image
										src={project.image || "/placeholder.svg"}
										alt={t(`list.${project.id}.title`)}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
								</div>
							</CardHeader>

							<CardContent className="pt-6 px-6">
								<h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
									{t(`list.${project.id}.title`)}
								</h3>
								<p className="text-sm text-muted-foreground mb-6 leading-relaxed">
									{t(`list.${project.id}.description`)}
								</p>

								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<Badge
											key={tech}
											variant="secondary"
											className="bg-secondary/50"
										>
											{tech}
										</Badge>
									))}
								</div>
							</CardContent>

							<CardFooter className="flex gap-3 pt-2 pb-6 px-6">
								<Button asChild size="sm" className="flex-1 shadow-sm">
									<Link
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Globe className="w-4 h-4 mr-2" />
										{t("live")}
									</Link>
								</Button>
								{project.github ? (
									<Button
										asChild
										size="sm"
										variant="outline"
										className="flex-1 bg-transparent hover:bg-secondary/50"
									>
										<Link
											href={project.github || "#"}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Code className="w-4 h-4 mr-2" />
											{t("code")}
										</Link>
									</Button>
								) : (
									<Button
										size="sm"
										variant="outline"
										className="flex-1 bg-muted text-muted-foreground cursor-not-allowed opacity-60"
										disabled
									>
										<Code className="w-4 h-4 mr-2" />
										{t("code")}
									</Button>
								)}
							</CardFooter>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	)
}
