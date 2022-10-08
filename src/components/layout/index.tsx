import React from 'react';
import { Alert } from '../../types/alert';
import Content from './content';

interface ILayout {
  alert: Alert;
  setAlert: (_v: Alert) => void;
  children: React.ReactElement | React.ReactElement[];
}

const Layout: React.FC<ILayout> = ({ alert, setAlert, children }) => {
  return (
    <>
      {/* Backgroung Image */}
      <div className="h-screen w-screen fixed left-0 right-0 z-10 block bg-[url('/assets/wallpaper2.jpg')] bg-center bg-no-repeat bg-cover" />
      {/* Backgroung Image Filter */}
      <div className="h-screen w-screen fixed left-0 right-0 z-20 block bg-primaryTransparent" />
      {/* Content */}
      <Content alert={alert} setAlert={setAlert}>
        {children}
      </Content>
    </>
  );
};

export default Layout;
