"use client"
import {Btn1, BtnLogin, BtnRegister} from "../common/btn"
import {Button} from '@nextui-org/button';
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link
} from "@nextui-org/react";

import React from 'react'

export function Navbar1() {
    const [isMenuOpen,
        setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "About",
        "How It Work",
        "Pricing",
        "Contact",
        "Features"
    ];
    return (
        <div className="w-full h-fit">
            <div
                className="w-full px-10 h-[99px] hidden max-lg:hidden max-w-[1280px] flex justify-between items-center mx-auto">
                <div className="">
                    <div
                        className="text-center text-white text-2xl font-bold font-['Inter'] leading-normal">Viralyst</div>
                </div>
                <div className="justify-start items-start gap-10 inline-flex">
                    <div
                        className="text-center cursor-pointer text-white text-lg font-normal font-['Inter'] leading-[18px]">About</div>
                    <div
                        className="text-center cursor-pointer text-white text-lg font-normal font-['Inter'] leading-[18px]">How it work</div>
                    <div
                        className="text-center cursor-pointer text-white text-lg font-normal font-['Inter'] leading-[18px]">Pricing</div>
                    <div
                        className="text-center cursor-pointer text-white text-lg font-normal font-['Inter'] leading-[18px]">Contact</div>
                    <div
                        className="text-center cursor-pointer text-white text-lg font-normal font-['Inter'] leading-[18px]">Features</div>
                </div>
                <div className="flex justify-between items-center">
                    <BtnLogin name="Login"/>
                    <BtnRegister name="Register"/>
                </div>
                <Button>Click me</Button>
            </div>
            <div className="lg:hidden flex justify-between"></div>

            <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} 
                className="bg-[#181818] h-[99px] text-white bg-black">
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen
                        ? "Close menu"
                        : "Open menu"}/>
                </NavbarContent>

                    <NavbarBrand>
                        <Link href="#" className="text-2xl text-white font-bold font-['Inter'] leading-normal">Viralyst</Link>
                    </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-4 text-white" justify="center">
                    <NavbarItem>
                        <Link className="text-white" href="#">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link className="text-white" href="#">
                            How It Work
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-white" href="#">
                            Pricing
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-white" href="#">
                            Contact
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-white" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                    <BtnLogin name="Login"/>
                    </NavbarItem>
                    <NavbarItem>
                    <BtnRegister name="Register"/>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color='foreground'
                                href="#"
                                size="lg">
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    )
}
