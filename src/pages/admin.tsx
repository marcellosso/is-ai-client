import { GetServerSideProps } from 'next';
import React from 'react';
import Layout from '../components/layout';
import { handleAuthSSR, logout } from '../helpers/auth';

const MainAdmin = () => {
  return (
    <Layout>
      <h1>Main Admin</h1>
      <button onClick={() => logout()}>Logout</button>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await handleAuthSSR(ctx);

  return { props: {} };
};
export default MainAdmin;
