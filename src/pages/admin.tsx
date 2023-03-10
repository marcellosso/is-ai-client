import Image from 'next/image';
import { GetServerSideProps, NextPage } from 'next';
import React, { useState } from 'react';
import Layout from '../components/layout';
import { handleAuthSSR, logout } from '../helpers/auth';
import { createBulkLevels, getAllLevels } from '../services/level';
import { Level, LEVEL_TYPE_ENUM } from '../types/level';
import { getLevelAnswerPercentage } from '../helpers/game';
import AnswersBarChart from '../components/bar-chart';

import { BsPersonFill } from 'react-icons/bs';
import { AiFillRobot } from 'react-icons/ai';

interface IMainAdmin {
  levels: Level[];
}

const MainAdmin: NextPage<IMainAdmin> = ({ levels }) => {
  const [type, setType] = useState(LEVEL_TYPE_ENUM.HUMAN);
  const [files, setFiles] = useState<FileList>();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLevelCreate = async (e: React.MouseEvent) => {
    setLoading(true);
    setError('');
    e.preventDefault();
    const body = new FormData();
    if (!files || !type) {
      setLoading(false);
      setError('Missing fields');
      return;
    }

    Array.from(files).forEach((file) => {
      body.append('images', file);
    });

    body.append('type', type);

    await createBulkLevels(body);
    setLoading(false);
  };

  return (
    <Layout>
      <div className="h-full w-full flex flex-col items-center">
        <header className="flex flex-col items-center">
          <h1 className="text-3xl text-detail font-Kanit">Admin Menu</h1>
          <button
            className="font-Kanit w-1/4 p-1 text-detail rounded-full bg-slate-700 hover:bg-slate-800 focus:outline-none"
            onClick={() => logout()}
          >
            Logout
          </button>
        </header>

        <section className="flex flex-col w-96">
          <h1 className="text-2xl text-detail font-Kanit">Create Levels</h1>
          {error && <h3 className="text-sm text-red-400 font-bold">{error}</h3>}

          {loading ? (
            <div
              role="status"
              className="flex justify-center h-full items-center"
            >
              <svg
                aria-hidden="true"
                className="mr-2 w-8 h-8 mt-2 self-center text-gray-200 animate-spin dark:text-slate-900 fill-detail"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              <select
                className="
              form-select 
              appearance-none 
              block 
              w-full 
              my-2
              px-3 
              py-1.5 
              text-base 
              font-normal 
            text-detail 
            bg-slate-900 
              bg-clip-padding 
              bg-no-repeat
              rounded
              transition
              ease-in-out
              m-0
              border
              border-solid
              border-slate-600
              focus:outline-none
            "
                aria-label="Image Type Select"
                onChange={(e) => setType(e.target.value as LEVEL_TYPE_ENUM)}
              >
                <option value={LEVEL_TYPE_ENUM.HUMAN}>Human</option>
                <option value={LEVEL_TYPE_ENUM.AI}>AI</option>
              </select>
              <input
                className="block w-full text-sm text-detail font-Kanit file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-900 file:text-detail hover:file:bg-slate-700 hover:file:cursor-pointer"
                type="file"
                name="myImage"
                multiple
                accept=".jpg,.jpeg,.png"
                onChange={(e) => setFiles(e.target.files as FileList)}
              />

              <button
                className="font-Kanit w-full p-1 mt-2 text-md text-detail rounded-lg bg-slate-900 hover:bg-slate-800 focus:outline-none"
                onClick={handleLevelCreate}
              >
                Create
              </button>
            </>
          )}
        </section>
        <section className="mt-3 w-1/2 h-full mb-5 overflow-y-scroll scrollbar-hide">
          <h1 className="text-3xl text-detail font-Kanit text-center">
            Levels
          </h1>
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center">
              AI
              <div className="w-5 h-5 bg-detail ml-2"></div>
            </div>
            <div className="flex items-center ml-3 text-slate-200">
              HUMAN
              <div className="w-5 h-5 bg-slate-200 ml-2"></div>
            </div>
          </div>
          {levels.map((level) => {
            const { percentageAnsweredAi, percentageAnsweredHuman } =
              getLevelAnswerPercentage(level);

            return (
              <div key={level._id} className="flex mt-2 w-full">
                {level.type == LEVEL_TYPE_ENUM.AI ? (
                  <AiFillRobot
                    className="text-detail text-center self-center"
                    size={60}
                  />
                ) : (
                  <BsPersonFill
                    className="text-slate-200 text-center self-center"
                    size={60}
                  />
                )}
                <Image
                  src={`/assets/${level.image_name}`}
                  alt="Level Image"
                  width={100}
                  height={100}
                  quality={100}
                  objectFit="cover"
                  objectPosition="50% 20%"
                  className="rounded shadow-2xl"
                />

                <AnswersBarChart
                  aiPercentage={percentageAnsweredAi}
                  humanPercentage={percentageAnsweredHuman}
                />
              </div>
            );
          })}
        </section>
      </div>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await handleAuthSSR(ctx);
  const levels = await getAllLevels();

  return { props: { levels } };
};
export default MainAdmin;
