import React from "react";
import "@shared/ui-kit/src/assets/tailwind.css";

const Layout = ({ children }) => {
  return <div className="px-20 py-10">{children}</div>;
};

export default Layout;
