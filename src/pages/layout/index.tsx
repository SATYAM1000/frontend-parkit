import { Outlet } from "react-router";
const AppLayout = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AppLayout;
