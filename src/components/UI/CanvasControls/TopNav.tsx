import gsap from "gsap";
import { useEffect } from "react";
import cl from "./TopNav.module.scss";

export interface TopNavItems {
  type: "button" | "separator"; // tbd: | "dropdown"
  icon?: JSX.Element;
  tooltip?: string;
  active?: boolean;
  onClick?: () => void;
}

interface TopNavProps {
  navItems?: TopNavItems[];
}

const TopNav: React.FC<TopNavProps> = ({ navItems }) => {
  // enter animation
  useEffect(() => {
    gsap.utils.toArray(`.${cl.top_nav__container} li`).forEach((li: any, i) => {
      if (li.classList.contains(cl.separator)) return;
      gsap.fromTo(
        li,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          delay: 0.1 * i,
        }
      );
    });
    const navHolder = document.querySelector(`.${cl.top_nav__holder}`);
    gsap.fromTo(
      navHolder,
      { y: -100 },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <nav className={cl.top_nav__holder}>
      <div className={cl.top_nav__container}>
        <ul>
          {navItems &&
            navItems.map((item, i) => {
              if (item.type === "separator") {
                return <li key={i} className={cl.separator}></li>;
              } else {
                return (
                  item.type === "button" && (
                    <li
                      data-tooltip={item.tooltip}
                      className={item.active ? cl.active : ""}
                      key={i}
                      onClick={item.onClick}
                    >
                      {item.icon}
                    </li>
                  )
                );
              }
            })}
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
