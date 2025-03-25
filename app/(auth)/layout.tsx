import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
