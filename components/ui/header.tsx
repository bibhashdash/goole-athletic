import Link from "next/link";
import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation-menu";

export const Header = () => {
    return (
        <header className="w-full flex px-12 py-1 items-center font-sans justify-between">
            <Link href="/" className="w-fit">
                <img src="/assets/gafc-logo.png" width={64} height={64} alt="Goole Athletic Logo"/>
            </Link>
            <NavigationMenu>
                <NavigationMenuList className="flex gap-24">
                    <NavigationMenuItem className="text-white font-sans">Home</NavigationMenuItem>
                    <NavigationMenuItem className="text-white font-sans">News</NavigationMenuItem>
                    <NavigationMenuItem className="text-white font-sans">Fixtures</NavigationMenuItem>
                    <NavigationMenuItem className="text-white font-sans">Team</NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div>
                <Link href="/" className="w-fit">
                    <img src="/assets/facebook.png" width={24} height={24} alt="Facebook Logo"/>
                </Link>
            </div>
        </header>
    )
}