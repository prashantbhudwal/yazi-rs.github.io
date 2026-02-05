import React from "react"
import { useLocation } from "@docusaurus/router"
import useBaseUrl from "@docusaurus/useBaseUrl"
import DefaultNavbar from "@theme-original/Navbar"

type NavbarProps = React.ComponentProps<typeof DefaultNavbar>

export default function NavbarWrapper(props: NavbarProps) {
	const { pathname } = useLocation()
	const baseUrl = useBaseUrl("/")

	// Hide default navbar on homepage (pathname matches baseUrl)
	if (pathname === baseUrl || pathname === baseUrl.replace(/\/$/, "")) {
		return null
	}

	return <DefaultNavbar {...props} />
}
