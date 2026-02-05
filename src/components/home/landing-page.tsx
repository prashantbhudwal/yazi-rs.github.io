import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { useColorMode } from "@docusaurus/theme-common"
import { ArrowRight, ArrowUpRight, Menu, Moon, Search, Sparkles, Sun, X } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"

import SearchBar from "@theme/SearchBar"
import { cardsData, landingFeatures } from "@site/src/components/home/landing-data"
import { Badge } from "@site/src/components/ui/badge"
import { Button } from "@site/src/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@site/src/components/ui/card"
import { cn } from "@site/src/lib/utils"

function SearchButton(): React.ReactNode {
	return (
		<div className="relative flex items-center">
			<div className="sr-only">
				<SearchBar />
			</div>
			<Button
				variant="ghost"
				size="sm"
				className={cn(
					"h-8 gap-1.5 px-3 text-muted-foreground hover:text-foreground",
					"border border-border/80 bg-background/30",
					"rounded-full items-center"
				)}
				onClick={() => {
					(document.querySelector(".DocSearch-Button") as HTMLElement | null)?.click()
				}}
			>
				<HugeiconsIcon icon={Search} className="h-4 w-4" />
				<span className="hidden lg:inline text-sm font-medium">Search</span>
				<span className="hidden lg:inline-flex items-center gap-0.5 text-xs font-bold text-foreground/90 ml-1">
					<span>⌘</span>
					<span>K</span>
				</span>
			</Button>
		</div>
	)
}

type NavItem = {
	label: string
	to: string
}

const leftNavItems: NavItem[] = [
	{ label: "Docs", to: "/docs/installation" },
	{ label: "Features", to: "/features" },
	{ label: "Blog", to: "/blog" },
]

const rightNavItems: NavItem[] = [
	{ label: "GitHub", to: "https://github.com/sxyazi/yazi" },
]

function ColorModeToggle() {
	const { colorMode, setColorMode } = useColorMode()
	const isDark = colorMode === "dark"

	return (
		<Button
			variant="ghost"
			size="icon"
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			title={isDark ? "Light mode" : "Dark mode"}
			onClick={() => setColorMode(isDark ? "light" : "dark")}
			className="h-8 w-8 rounded-full border border-border/80 bg-background/30"
		>
			{isDark ? <HugeiconsIcon icon={Sun} className="h-4 w-4" /> : <HugeiconsIcon icon={Moon} className="h-4 w-4" />}
		</Button>
	)
}

function NavLinks({ onClick }: { onClick?: () => void }) {
	return (
		<>
			{leftNavItems.map(item => (
				<Button key={item.label} variant="ghost" size="sm" asChild>
					<Link to={item.to} onClick={onClick}>
						{item.label}
					</Link>
				</Button>
			))}
			{rightNavItems.map(item => (
				<Button key={item.label} variant="ghost" size="sm" asChild>
					<Link to={item.to} onClick={onClick}>
						{item.label}
					</Link>
				</Button>
			))}
		</>
	)
}

function Header() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50">
			<div className="flex w-full items-center justify-between px-2 py-3 lg:px-4">
				{/* Logo + nav - left */}
				<div className="flex items-center gap-2">
					<img src="webp/logo.webp" alt="Yazi" className="h-8 w-8 rounded-md" />
					<span className="text-sm font-semibold tracking-wide">Yazi</span>
					<div className="hidden items-center gap-1 md:flex ml-4">
						{leftNavItems.map(item => (
							<Button key={item.label} variant="ghost" size="sm" className="text-foreground!" asChild>
								<Link to={item.to}>{item.label}</Link>
							</Button>
						))}
					</div>
				</div>

				{/* Right nav items + actions */}
				<div className="hidden items-center gap-3 md:flex">
					{rightNavItems.map(item => (
						<Button key={item.label} variant="ghost" size="sm" className="text-foreground! gap-1" asChild>
							<Link to={item.to} target="_blank" rel="noopener noreferrer">
								{item.label}
								<HugeiconsIcon icon={ArrowUpRight} className="h-3.5 w-3.5" />
							</Link>
						</Button>
					))}
					<div className="flex items-center">
						<SearchButton />
					</div>
					<ColorModeToggle />
				</div>

				{/* Mobile menu button */}
				<div className="flex items-center gap-3 md:hidden">
					<div className="flex items-center">
						<SearchButton />
					</div>
					<ColorModeToggle />
					<Button
						variant="ghost"
						size="icon"
						aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
						onClick={() => setMobileOpen(v => !v)}
						className="h-9 w-9"
					>
						{mobileOpen ? (
							<HugeiconsIcon icon={X} className="h-4 w-4" />
						) : (
							<HugeiconsIcon icon={Menu} className="h-4 w-4" />
						)}
					</Button>
				</div>
			</div>

			<div
				className={cn(
					"overflow-hidden transition-all duration-300 ease-in-out md:hidden",
					mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
				)}
			>
				<div className="border-t border-border/60 bg-background px-4 py-4">
					<div className="flex flex-col gap-2">
						<NavLinks onClick={() => setMobileOpen(false)} />
					</div>
				</div>
			</div>
		</header>
	)
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection() {
	const { siteConfig } = useDocusaurusContext()

	return (
		<section className="relative overflow-hidden">
			<div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-8 lg:pb-20 lg:pt-12 2xl:max-w-7xl">
				{/* Centered Hero Content */}
				<div className="mx-auto flex w-full flex-col items-center gap-6 text-center px-4">
					<img src="webp/logo.webp" alt="Yazi" className="h-16 w-16  sm:h-20 sm:w-20" />
					<h1 className="text-balance text-6xl tracking-tight sm:text-7xl lg:text-8xl 2xl:text-9xl">
						{siteConfig.title}
					</h1>
					<p className="max-w-3xl text-base text-foreground/80 sm:text-lg lg:max-w-4xl 2xl:text-xl">
						{siteConfig.tagline}
					</p>
					<Button size="lg" className="!text-primary-foreground" asChild>
						<Link to="/docs/installation">
							Get Started
							<HugeiconsIcon icon={ArrowRight} className="h-4 w-4" />
						</Link>
					</Button>
				</div>

				{/* Hero Video */}
				<div className="mx-auto mt-12 max-w-4xl lg:mt-16 2xl:max-w-5xl">
					<div className="relative">
						<Card className="relative overflow-hidden rounded-lg border-border/50 bg-card/80 py-0">
							<video
								src="videos/scrollable-preview.mp4"
								className="aspect-video w-full object-cover"
								autoPlay
								loop
								muted
								playsInline
								preload="metadata"
							/>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}
function WhyYaziSection() {
	return (
		<section className="mx-auto w-full max-w-6xl px-4 pb-16 lg:max-w-7xl lg:pb-20 2xl:max-w-[96rem]">
			<div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 2xl:gap-10">
				{cardsData.map(card => (
					<Card
						key={card.title}
						className="flex h-full flex-col border-border/50 bg-card/60 backdrop-blur-sm transition-colors hover:border-border hover:bg-card/80"
					>
						<CardHeader className="shrink-0 pb-2">
							<CardTitle className=" font-medium leading-tight">{card.title}</CardTitle>
						</CardHeader>
						<CardContent className="pt-0">
							<p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}

// ─────────────────────────────────────────────────────────────────────────────
// Features Section
// ─────────────────────────────────────────────────────────────────────────────
function FeaturesSection() {
	return (
		<section id="features" className="border-y border-border/60 bg-muted/20">
			<div className="mx-auto w-full max-w-6xl px-4 py-16 lg:py-20 2xl:max-w-7xl">
				<div className="mx-auto mb-16 max-w-4xl text-center lg:mb-20">
					<h2 className="text-5xl font-semibold tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
						The fastest way to work with files.
					</h2>
				</div>

				<div className="space-y-24">
					{landingFeatures.map((feature, index) => (
						<FeatureArticle key={feature.id} feature={feature} index={index} />
					))}
				</div>
			</div>
		</section>
	)
}

function FeatureArticle({ feature, index }: { feature: (typeof landingFeatures)[number]; index: number }) {
	return (
		<article
			key={feature.id}
			id={feature.id}
			className={cn("grid gap-8 lg:grid-cols-2 lg:items-end", index % 2 === 1 && "lg:[&>*:first-child]:order-2")}
		>
			<div>
				<div className="relative overflow-hidden rounded-lg border border-border/70 bg-card/70">
					<video
						src={feature.video}
						className="block aspect-16/10 w-full object-cover"
						autoPlay
						loop
						muted
						playsInline
						preload="metadata"
					/>
				</div>
			</div>

			<div className="flex flex-col justify-end gap-3">
				<h3 className="!m-0 text-2xl font-semibold tracking-tight sm:text-3xl">{feature.title}</h3>
				<p className="!m-0 text-base text-muted-foreground">{feature.description}</p>
			</div>
		</article>
	)
}

// ─────────────────────────────────────────────────────────────────────────────
// Install Section
// ─────────────────────────────────────────────────────────────────────────────

function InstallCard() {
	return (
		<Card className="border-border/70 bg-card/60">
			<CardHeader>
				<CardTitle className="text-base">Quick install (macOS)</CardTitle>
				<CardDescription>Install Yazi and common optional dependencies.</CardDescription>
			</CardHeader>
			<CardContent>
				<pre className="m-0 overflow-x-auto rounded-lg border border-border/70 bg-background p-4 text-sm leading-relaxed">
					<code>brew install yazi ffmpeg sevenzip jq poppler fd ripgrep fzf zoxide resvg imagemagick</code>
				</pre>
			</CardContent>
			<CardFooter className="justify-end">
				<Button size="sm" className="text-primary-foreground!" asChild>
					<Link to="/docs/installation">See all platforms</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}

function InstallSection() {
	return (
		<section className="mx-auto w-full max-w-6xl px-4 py-16 lg:py-20 2xl:max-w-7xl">
			<InstallCard />
		</section>
	)
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────

function FooterBrand() {
	return (
		<div className="space-y-3">
			<div className="flex items-center gap-2">
				<img src="webp/logo.webp" alt="Yazi" className="h-7 w-7 rounded-md" />
				<span className="font-semibold">Yazi</span>
			</div>
			<p className="mb-0 text-sm text-muted-foreground">A blazing fast terminal file manager built in Rust.</p>
		</div>
	)
}

function FooterLinkGroup({ title, links }: { title: string; links: { label: string; to: string }[] }) {
	return (
		<div className="space-y-2 text-sm">
			<p className="mb-2 font-semibold text-foreground">{title}</p>
			{links.map(link => (
				<Link key={link.to} to={link.to} className="block text-muted-foreground hover:text-foreground">
					{link.label}
				</Link>
			))}
		</div>
	)
}

function Footer() {
	return (
		<footer className="border-t border-border/70 bg-muted/30">
			<div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 2xl:max-w-7xl">
				<FooterBrand />

				<FooterLinkGroup
					title="Resources"
					links={[
						{ label: "Docs", to: "/docs/installation" },
						{ label: "Features", to: "/features" },
						{ label: "Blog", to: "/blog" },
					]}
				/>

				<FooterLinkGroup
					title="Community"
					links={[
						{ label: "Discord (English)", to: "https://discord.gg/qfADduSdJu" },
						{ label: "Telegram (Chinese)", to: "https://t.me/yazi_rs" },
					]}
				/>

				<FooterLinkGroup title="More" links={[{ label: "GitHub", to: "https://github.com/sxyazi/yazi" }]} />
			</div>
			<div className="border-t border-border/70 px-4 py-5 text-center text-sm text-muted-foreground">
				Copyright © {new Date().getFullYear()} Yazi. Built with love.
			</div>
		</footer>
	)
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Landing Page
// ─────────────────────────────────────────────────────────────────────────────

export default function LandingPage() {
	const { colorMode } = useColorMode()
	const isDark = colorMode === "dark"

	return (
		<div className="landing-theme relative overflow-x-hidden bg-background text-foreground">
			{/* Gradient Background - starts from header */}
			<div className="pointer-events-none absolute inset-0">
				<div
					className="absolute inset-x-0 top-0 h-dvh"
					style={{
						background: "linear-gradient(to bottom, var(--primary) 0%, transparent 70%)",
						opacity: isDark ? 0.4 : 1,
					}}
				/>
			</div>

			<Header />

			<main>
				<HeroSection />
				<WhyYaziSection />
				<FeaturesSection />
				<InstallSection />
			</main>

			<Footer />
		</div>
	)
}
