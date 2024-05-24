'use client'//idk why need this but without this got error

import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import Navbar from "@/app/nav/page";

export default function Home() {
    return (
        <Navbar/>// this is how you create a component
    )
}


