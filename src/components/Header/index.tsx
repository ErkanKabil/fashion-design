"use client"
import React from 'react';
import {ROUTES} from "@/core/constants/routes";
import Link from 'next/link';
import Image from 'next/image'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem,
    NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../ui/navigation-menu';

const Header = () => {
    return (
        <div className={"flex items-center flex-col md:flex-row container mx-auto gap-3"}>
                <Link href={ROUTES.HOME} className={"w-60 h-14 relative"}>
                    <Image src={"/logo.svg"} alt={"Fashion Design"} fill className={"object-scale-down"}></Image>
                </Link>
                <div className={"md:ms-auto"}>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href={ROUTES.HOME} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                                <Link href={ROUTES.STATISTICS} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Statistics
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>
        </div>
    );
};

export default Header;
