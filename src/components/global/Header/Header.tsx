"use client";

import React, { FunctionComponent, ReactElement, useState } from "react";
import MobileHeader from "../Header/MobileHeader";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarBrand,
} from "@nextui-org/react";
import type { NavLinks } from "../../../helpers/types";
import { useSelectedLayoutSegment } from "next/navigation";
import useMediaQuery from "beautiful-react-hooks/useMediaQuery";
import Image from "next/image";
import Logo from "../../../../public/images/UILogo-v2.png";

const Header = ({}) => {
  const links = [
    {
      navItem: "Experience",
      path: "/experience",
    },
    {
      navItem: "Contact",
      path: "/contact",
    },
  ];
  const pathname = useSelectedLayoutSegment();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="2xl">
      {isMobile ? (
        <>
          <NavbarContent>
            <NavbarMenuToggle />
          </NavbarContent>
          <MobileHeader links={links} />
        </>
      ) : (
        <>
          <NavbarBrand>
            <Link href="/">
              <Image src={Logo} alt="Logo" width={50} height={50} />
            </Link>
          </NavbarBrand>

          <NavbarContent justify="center">
            {links.map((item, index) => (
              <NavbarItem
                isActive={item.path === pathname}
                key={`${item}-${index}`}
              >
                <Link color="foreground" href={item.path}>
                  {item.navItem}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </>
      )}
    </Navbar>
  );
};

export default Header;
