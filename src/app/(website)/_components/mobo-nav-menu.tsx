"use client";

import { motion } from "framer-motion";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import PrimaryButton from "@/components/global/button/primary-button";
import Logo from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const navItems: { title: string; href: string }[] = [
  {
    title: "Categories",
    href: "/categories",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Training",
    href: "/training",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Videos",
    href: "/videos",
  },
  {
    title: "About Us",
    href: "/company/about",
  },
  {
    title: "Contact Us",
    href: "/company/contact",
  },
  {
    title: "News & Events",
    href: "/company/news-events",
  },
];

export default function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="upper-md:hidden">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            size="icon"
            className="group grid size-10 place-items-center p-1.5 hover:bg-transparent"
          >
            <svg
              width="349"
              height="209"
              viewBox="0 0 349 209"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-full"
            >
              <rect
                width="349"
                height="33"
                rx="16.5"
                fill="#171201"
                className={cn(
                  "group-hover:fill-primary-700 origin-left transition-all duration-300 ease-in-out",
                  isOpen && "-translate-y-24 rotate-45",
                )}
              />
              <rect
                y="88"
                width="349"
                height="33"
                rx="16.5"
                fill="#171201"
                className={cn(
                  "group-hover:fill-primary-700 transition-all duration-300 ease-in-out",
                  isOpen && "opacity-0",
                )}
              />
              <rect
                y="176"
                width="349"
                height="33"
                rx="16.5"
                fill="#171201"
                className={cn(
                  "group-hover:fill-primary-700 origin-left transition-all duration-300 ease-in-out",
                  isOpen && "translate-y-4 -rotate-45",
                )}
              />
            </svg>
          </Button>
        </DrawerTrigger>

        <DrawerContent className="!m-0 h-full p-4">
          <DrawerHeader className="flex flex-row items-center justify-between p-0">
            <DrawerTitle>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <DrawerClose asChild>
                  <Link href="/">
                    <Logo dimensions={{ width: 100, height: 100 }} />
                  </Link>
                </DrawerClose>
              </motion.div>
            </DrawerTitle>

            <DrawerDescription className="sr-only">
              This is a mobo nav
            </DrawerDescription>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <DrawerClose className="bg-primary-450 text-primary-800 grid size-10 place-items-center rounded-full p-1.5">
                <XIcon />
              </DrawerClose>
            </motion.div>
          </DrawerHeader>

          <ul className="mt-8 flex flex-col items-center gap-4">
            {navItems.map((item, idx) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.4 }}
                className="font-bebas text-2xl"
              >
                <DrawerClose asChild>
                  <Link
                    href={item.href}
                    className="text-primary-900 hover:text-primary-700 transition duration-300 ease-in-out"
                  >
                    {item.title}
                  </Link>
                </DrawerClose>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 1,
              stiffness: 100,
              type: "spring",
              damping: 12,
            }}
          >
            <DrawerClose asChild>
              <PrimaryButton
                href="/company/contact"
                className="from-primary-700 via-primary-550 to-primary-700 grid h-12 rounded-full bg-gradient-to-r py-1 text-base tracking-wide uppercase"
              >
                Contact Us
              </PrimaryButton>
            </DrawerClose>
          </motion.div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
