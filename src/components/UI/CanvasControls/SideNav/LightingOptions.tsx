import cl from "./SideNav.module.scss";

interface LightingOptionsProps {}

const LightingOptions: React.FC<LightingOptionsProps> = () => {
  return (
    <div className={cl.sidenav_content}>
      <h1>Lighting</h1>
    </div>
  );
};

export default LightingOptions;
