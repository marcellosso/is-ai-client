import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Level } from '../types/level';
import ReactLoading from 'react-loading';
import { getAllLevels } from '../services/level';
import { setCookie } from 'cookies-next';

interface IPreloadLoading {
  levels: Level[];
}

const PreloadLoading: NextPage<IPreloadLoading> = ({ levels }) => {
  const router = useRouter();

  const handleFinishLoading = () => {
    setCookie('hasPreloaded', true);
    router.push('/game');
  };

  const preloadImages = () => {
    return (
      <>
        {levels.map((level, idx) => (
          <div key={level._id}>
            <Image
              src={`/assets/${level.image_name}`}
              alt="Level Image"
              width={700}
              height={550}
              quality={100}
              objectFit="cover"
              objectPosition="50% 20%"
              className="rounded shadow-2xl"
              layout="responsive"
              onLoadingComplete={() =>
                idx + 1 == levels.length ? handleFinishLoading() : null
              }
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="bg-secondary flex-col w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/ai-or-human-logo-updated.png"
          alt="AI or HUMAN Logo with an icon of a robot and a human"
          quality={100}
          width={400}
          height={200}
          priority
        />

        <ReactLoading type="spinningBubbles" color="rgb(255 211 105)" />
      </div>
      <p className="text-slate-200 text-xs fixed bottom-1">
        When opening the first time, loading might take longer.
      </p>
      <div className="fixed overflow-scroll overflow-x-hidden">
        {preloadImages()}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const levels = await getAllLevels();

  return {
    props: {
      levels,
    },
  };
};

export default PreloadLoading;
