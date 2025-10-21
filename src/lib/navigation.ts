'use client';

import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();

  const navigateToSection = (sectionId: string) => {
    const currentPath = window.location.pathname;
    
    if (currentPath === '/') {
      const element = document.querySelector(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push('/');
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return { navigateToSection };
};

export interface FooterLink {
  name: string;
  href: string;
  isHomeSection?: boolean;
}
