const NavButton = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: any;
}) => {
  return <button {...props}>{children}</button>;
};
