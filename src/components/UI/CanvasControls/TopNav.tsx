import gsap from "gsap";
import { useEffect } from "react";
import cl from "./TopNav.module.scss";
import { ReactComponent as LightIcon } from "../../../assets/icons/lighting.svg";
import { ReactComponent as CubeIcon } from "../../../assets/icons/cube.svg";
import { ReactComponent as LandscapeIcon } from "../../../assets/icons/landscape.svg";
import { ReactComponent as ExportIcon } from "../../../assets/icons/export.svg";

const TopNav = () => {
  useEffect(() => {
    gsap.utils.toArray(`.${cl.top_nav__container} li`).forEach((li: any, i) => {
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
          <li>
            <CubeIcon />
          </li>
          <li>
            <LightIcon />
          </li>
          <li>
            <LandscapeIcon />
          </li>
          <span className={cl.separator} />
          <li>
            <ExportIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
