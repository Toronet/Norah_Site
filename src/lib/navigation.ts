import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToSection = (sectionId: string) => {
    const currentPath = window.location.pathname;
    
    if (currentPath === '/') {
      const element = document.querySelector(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate('/');
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
