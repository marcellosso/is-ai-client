import React from 'react';

interface ILayout {
  children: React.ReactElement | React.ReactElement[];
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-primary text-letter">
      <header className="flex items-center justify-center w-full p-3">
        <h1 className="text-detail font-Kanit sm:text-5xl xs:text-4xl text-3xl">
          AI OR HUMAN?
        </h1>
      </header>
      <div className="h-full flex items-center justify-center">{children}</div>
    </div>
  );
};

export default Layout;
