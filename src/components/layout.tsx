import React from 'react';

interface ILayout {
  children: React.ReactElement | React.ReactElement[];
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-primary text-letter">
      <div>
        <header className="flex items-center justify-center">
          <h1 className="text-detail font-Kanit sm:text-5xl xs:text-4xl text-3xl">
            AI OR HUMAN?
          </h1>
        </header>
        {children}
      </div>
    </div>
  );
};

export default Layout;
