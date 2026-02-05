import React from "react"
import { useLocation } from "@docusaurus/router"
import DefaultNavbar from "@theme-original/Navbar"

type NavbarProps = React.ComponentProps<typeof DefaultNavbar>

export default function NavbarWrapper(props: NavbarProps) {
	const { pathname } = useLocation()

	if (pathname === "/") {
		return null
	}

	return <DefaultNavbar {...props} />
}
