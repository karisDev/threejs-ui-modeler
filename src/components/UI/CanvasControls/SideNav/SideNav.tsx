import gsap from "gsap";
import { useEffect } from "react";
import BackgroundOptions from "./BackgroundOptions";
import LightingOptions from "./LightingOptions";
import ShapesOptions from "./ShapesOptions";
import cl from "./SideNav.module.scss";

interface SideNavProps {
  shapesActive: boolean;
  lightingActive: boolean;
  backgroundActive: boolean;
}

export interface SideNavItem {
  name: string;
  active?: boolean;
  element: JSX.Element;
}

interface UpdatedSideNavProps {
  items: SideNavItem[];
}

const SideNav: React.FC<SideNavProps> = (props) => {
  const animationDuration = 0.4;

  const slideInAnimation = (selector: string) => {
    document.querySelector(selector)?.classList.remove(cl.hidden);
    gsap.fromTo(
      selector,
      { height: "0" },
      {
        height: "auto",
        duration: animationDuration,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      selector,
      { x: "350" },
      {
        x: "0",
        duration: animationDuration,
        delay: animationDuration,
        ease: "power2.inIn",
      }
    );
  };
  const slideOutAnimation = async (selector: string) => {
    const height = document.querySelector(selector)?.clientHeight;
    gsap.to(selector, {
      x: "350",
      duration: animationDuration,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      selector,
      { height: height },
      {
        height: "0",
        duration: animationDuration,
        delay: animationDuration,
        ease: "power2.inOut",
      }
    );
    // delay to allow animation to finish
    await new Promise((resolve) =>
      setTimeout(resolve, animationDuration * 2 * 1000)
    );
    document.querySelector(selector)?.classList.add(cl.hidden);
  };

  useEffect(() => {
    // gsap.to(`.${cl.shapes}`, { x: 315, duration: 0 });
    // gsap.to(`.${cl.lighting}`, { x: 315, duration: 0 });
    // gsap.to(`.${cl.background}`, { x: 315, duration: 0 });
  }, []);

  useEffect(() => {
    if (props.shapesActive) {
      slideInAnimation("#sidenav_shapes");
    } else {
      slideOutAnimation("#sidenav_shapes");
    }
  }, [props.shapesActive]);

  useEffect(() => {
    if (props.lightingActive) {
      slideInAnimation("#sidenav_lighting");
    } else {
      slideOutAnimation("#sidenav_lighting");
    }
  }, [props.lightingActive]);

  useEffect(() => {
    if (props.backgroundActive) {
      slideInAnimation("#sidenav_background");
    } else {
      slideOutAnimation("#sidenav_background");
    }
  }, [props.backgroundActive]);

  return (
    <nav className={cl.sidenav_container}>
      <section id="sidenav_shapes" className={cl.sidenav_item}>
        <ShapesOptions />
      </section>
      <section id="sidenav_lighting" className={cl.sidenav_item}>
        <LightingOptions />
      </section>
      <section id="sidenav_background" className={cl.sidenav_item}>
        <BackgroundOptions />
      </section>
    </nav>
  );
};

export default SideNav;
