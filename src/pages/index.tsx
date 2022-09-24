import axios from 'axios';
import type { NextPage } from 'next';
import Layout from '../components/layout';
import { GameProvider } from '../context/gameContext';
// import Image from 'next/image';
import { Level } from '../types/level';

interface IMain {
  levels: Level[];
}

const Main: NextPage<IMain> = ({ levels }) => {
  return (
    <GameProvider levels={levels}>
      <Layout>
        {/* <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${testImage}`}
        alt="img"
        width={500}
        height={500}
      /> */}
        <h1>HELLO WORLD</h1>
      </Layout>
    </GameProvider>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}info/`);
  const levels = await res.data;

  return { props: { levels }, revalidate: 10 };
};

export default Main;
