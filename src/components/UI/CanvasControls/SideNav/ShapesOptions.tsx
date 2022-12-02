import cl from "./SideNav.module.scss";

interface ShapesOptionsProps {}

const ShapesOptions: React.FC<ShapesOptionsProps> = () => {
  return (
    <div className={`${cl.sidenav_content} ${cl.shapes}`}>
      <div className={cl.heading}>
        <h1>Shapes</h1>
      </div>
    </div>
  );
};

export default ShapesOptions;
