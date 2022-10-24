import cl from "./SideNav.module.scss";

interface BackgroundOptionsProps {}

const BackgroundOptions: React.FC<BackgroundOptionsProps> = () => {
  return (
    <div className={cl.sidenav_content}>
      <h1>Background</h1>
    </div>
  );
};

export default BackgroundOptions;
