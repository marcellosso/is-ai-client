import Image from 'next/image';
import React from 'react';

interface ILayout {
  children: React.ReactElement | React.ReactElement[];
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      {/* Backgroung Image */}
      <div className="h-screen w-screen fixed left-0 right-0 z-10 block bg-[url('/assets/wallpaper2.jpg')] bg-center bg-no-repeat bg-cover" />
      {/* Backgroung Image Filter */}
      <div className="h-screen w-screen fixed left-0 right-0 z-20 block bg-primaryTransparent" />
      ;{/* Content */}
      <div className="fixed left-0 right-0 z-30 flex flex-col items-center w-screen h-screen text-letter">
        <header className="flex items-center justify-center w-full">
          <Image
            src="/assets/ai-or-human-logo.png"
            alt="AI or HUMAN Logo with an icon of a robot and a human"
            quality={100}
            width={400}
            height={200}
          />
        </header>

        <div className="h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
