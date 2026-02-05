import Layout from "@theme/Layout"
import LandingPage from "@site/src/components/home/landing-page"

export default function Home() {
	return (
		<Layout noFooter description="Blazing fast terminal file manager written in Rust, based on async I/O.">
			<LandingPage />
		</Layout>
	)
}
