import { ReactComponent as CubeIcon } from "../../../../assets/icons/landscape.svg";
import cl from "./SideNav.module.scss";

interface BackgroundOptionsProps {}

const BackgroundOptions: React.FC<BackgroundOptionsProps> = () => {
  return (
    <div className={`${cl.sidenav_content} ${cl.background_option}`}>
      <div className={cl.heading}>
        <CubeIcon />
        <h1>Background</h1>
      </div>
    </div>
  );
};

export default BackgroundOptions;
