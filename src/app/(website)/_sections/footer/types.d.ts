import React from "react";

export type FooterNavLink = {
  title: string;
  href: string;
  links: {
    label: string;
    href: string;
  }[];
};

export type SocialLink = {
  icon: React.ReactNode;
  href: string;
};
