import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/layout';
import { login } from '../helpers/auth';
import { adminLoginAuth } from '../services/auth';
import { User } from '../types/user';

const IndexAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await adminLoginAuth(email, password);

    const { token } = user as User;
    await login(token);
    Router.push('/admin');
  };

  return (
    <Layout>
      <form onSubmit={onLogin} className="flex flex-col w-96">
        <div className="pb-2 pt-4">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="block w-full p-4 text-md rounded-lg bg-slate-900 text-detail placeholder-detail focus:outline-none focus:outline-detail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pb-2 pt-4">
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            className="block w-full p-4 text-md rounded-lg bg-slate-900 text-detail placeholder-detail focus:outline-none focus:outline-detail"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="px-4 pb-2 pt-4">
          <button
            className="block w-full p-4 text-lg text-detail rounded-full bg-slate-700 hover:bg-slate-800 focus:outline-none"
            type="submit"
          >
            LOGIN
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default IndexAdmin;
