import Image from 'next/image';
import React, { FC } from 'react';
import { Alert } from '../../types/alert';
import AlertComponent from './alert';

interface IContent {
  alert?: Alert;
  setAlert: (_v: Alert) => void;
  children: React.ReactElement | React.ReactElement[];
}

const Content: FC<IContent> = ({ alert, setAlert, children }) => {
  return (
    <div className="fixed left-0 right-0 z-30 flex flex-col items-center w-screen h-screen text-letter overflow-scroll overflow-x-hidden">
      {alert?.message && <AlertComponent alert={alert} setAlert={setAlert} />}

      <header className="flex items-center justify-center w-full">
        <Image
          src="/assets/ai-or-human-logo.png"
          alt="AI or HUMAN Logo with an icon of a robot and a human"
          quality={100}
          width={400}
          height={200}
        />
      </header>

      <div className="h-4/6 flex items-center justify-center w-full sm:h-full">
        {children}

        <footer className="w-full flex items-center justify-center fixed left-0 bottom-0">
          <h4>
            {new Date().getFullYear()} -
            <a
              className="underline text-letter hover:text-blue-600 pl-1"
              href="https://www.linkedin.com/in/marcellosso/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Marcel Losso
            </a>
          </h4>
        </footer>
      </div>
    </div>
  );
};

export default Content;
