import axios from 'axios';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Level } from '../types/level';

interface IMain {
  levels: Level[];
}

const Main: NextPage<IMain> = ({ levels }) => {
  const testImage = levels[0].imageName;

  return (
    <div className="h-screen bg-primary text-letter">
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${testImage}`}
        alt="img"
        width={500}
        height={500}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}info/`);
  const levels = await res.data;

  return { props: { levels } };
};

export default Main;
