import React from 'react';

interface ILayout {
  children: React.ReactElement;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-primary text-letter">
      {children}

      <div className="bg-secondary">
        <h2>oiooooooo</h2>
      </div>
    </div>
  );
};

export default Layout;
