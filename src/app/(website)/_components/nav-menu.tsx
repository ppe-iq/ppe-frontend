"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import Logo from "@/components/global/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { categories, services } from "@/lib/constants";
import { cn } from "@/lib/utils";



export function NavMenu() {
  const pathname = usePathname();

  function isNavActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}`);
  }

  return (
    <NavigationMenu viewport={false} className="upper-md:block hidden">
      <NavigationMenuList className="gap-6">
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "font-bebas hover:!text-primary-800 !bg-transparent px-0 text-lg tracking-wider transition-colors duration-300",
              isNavActive("/categories") && "!text-primary-800",
            )}
          >
            <Link href="/categories">Categories</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!shadow-xs">
            <ul className="grid w-[750px] grid-cols-2 gap-2">
              {categories.map((category, idx) => (
                <motion.li
                  key={category.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                    rotate: 2,
                    filter: "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.07,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href={category.href}
                    className="hover:bg-secondary-500 flex items-start gap-2 rounded-md p-2 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <figure className="size-20 w-32 shrink-0">
                      <Image
                        src={category.imgUrl}
                        alt={category.title}
                        width={400}
                        height={400}
                        className="size-full rounded-md object-cover"
                      />
                    </figure>
                    <div className="flex flex-col gap-2">
                      <h2
                        className={cn(
                          "text-base leading-none font-medium",
                          isNavActive(category.href) &&
                          "text-primary-750 font-semibold",
                        )}
                      >
                        {category.title}
                      </h2>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-tight">
                        {category.description}
                      </p>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className="!text-lg">
            <Link
              href="/products"
              className={cn(
                "font-bebas hover:!text-primary-800 !bg-transparent px-0 tracking-wider transition-colors duration-300",
                isNavActive("/products") && "!text-primary-800",
              )}
            >
              Products
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "font-bebas hover:!text-primary-800 !bg-transparent px-0 text-lg tracking-wider transition-colors duration-300",
              isNavActive("/services") && "!text-primary-800",
            )}
          >
            <Link href="/services">Services</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="-left-48 !shadow-xs xl:-left-24">
            <ul className="grid w-[700px] grid-cols-2 gap-2">
              {services.map((service, idx) => (
                <motion.li
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.9,
                    rotate: 2,
                    filter: "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href={service.href}
                    className="hover:bg-secondary-500 flex items-start gap-2 overflow-hidden rounded-md p-2 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <figure className="size-20 w-32 shrink-0">
                      <Image
                        src={service.imgUrl}
                        alt={service.title}
                        width={400}
                        height={400}
                        className="size-full rounded-md object-cover"
                      />
                    </figure>

                    <div className="flex flex-col gap-2">
                      <h2
                        className={cn(
                          "text-base leading-none font-medium",
                          isNavActive(service.href) &&
                          "text-primary-750 font-semibold",
                        )}
                      >
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-tight">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className="!text-lg">
            <Link
              href="/training"
              className={cn(
                "font-bebas hover:!text-primary-800 !bg-transparent px-0 tracking-wider transition-colors duration-300",
                isNavActive("/training") && "!text-primary-800",
              )}
            >
              Training
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "font-bebas hover:!text-primary-800 !bg-transparent px-0 text-lg tracking-wider transition-colors duration-300",
              isNavActive("/company/") && "!text-primary-800",
            )}
          >
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent className="-left-32 !shadow-xs">
            <ul className="flex w-[450px] items-start gap-2">
              <motion.li
                className="flex flex-1"
                initial={{ opacity: 0, y: 10, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Link
                  href="/company/about"
                  className="hover:bg-secondary-500 flex flex-col items-start gap-3 rounded-md p-2 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Logo dimensions={{ width: 100, height: 50 }} />
                  <div className="space-y-px">
                    <h3
                      className={cn(
                        "text-base font-medium",
                        isNavActive("/company/about") &&
                        "text-primary-750 font-semibold",
                      )}
                    >
                      About PPE
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 max-w-sm text-sm leading-tight">
                      PPP started as a one-man operation, driven by a passion
                      for serving the industrial sector with dedication and
                      expertise.
                    </p>
                  </div>
                </Link>
              </motion.li>
              <motion.li
                className="flex flex-1 flex-col gap-px"
                initial={{ opacity: 0, y: 10, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9, rotate: 2 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href="/company/contact"
                    className="hover:bg-secondary-500 flex flex-col items-start gap-1 rounded-md p-2 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <h3
                      className={cn(
                        "text-base font-medium",
                        isNavActive("/company/contact") &&
                        "text-primary-750 font-semibold",
                      )}
                    >
                      Contact
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 max-w-sm text-sm leading-tight">
                      Contact us for any questions or inquiries.
                    </p>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9, rotate: 2 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href="/company/news-events"
                    className="hover:bg-secondary-500 flex flex-col items-start gap-1 rounded-md p-2 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <h3
                      className={cn(
                        "text-base font-medium",
                        isNavActive("/company/news-events") &&
                        "text-primary-750 font-semibold",
                      )}
                    >
                      News & Events
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 max-w-sm text-sm leading-tight">
                      Stay updated with the latest news and events from PPE.
                    </p>
                  </Link>
                </motion.div>
              </motion.li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className="!text-lg">
            <Link
              href="/blogs"
              className={cn(
                "font-bebas hover:!text-primary-800 !bg-transparent px-0 tracking-wider transition-colors duration-300",
                isNavActive("/blogs") && "!text-primary-800",
              )}
            >
              Blogs
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className="!text-lg">
            <Link
              href="/videos"
              className={cn(
                "font-bebas hover:!text-primary-800 !bg-transparent px-0 tracking-wider transition-colors duration-300",
                isNavActive("/videos") && "!text-primary-800",
              )}
            >
              Videos
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
