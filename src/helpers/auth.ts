import Router from 'next/router';
import { Cookies } from 'react-cookie';
import nextCookie from 'next-cookies';
import { GetServerSidePropsContext } from 'next';
import { validateAuth } from '../services/auth';

const cookies = new Cookies();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleAuthSSR = async (ctx: GetServerSidePropsContext) => {
  const { authtoken } = nextCookie(ctx);

  const redirectOnError = () => {
    console.log('Redirecting back to main page');
    if (typeof window !== 'undefined') {
      Router.push('/login');
    } else {
      ctx.res.writeHead(302, { Location: '/login' });
      ctx.res.end();
    }
  };

  try {
    if (!authtoken) {
      await logout();
      return redirectOnError();
    }
    const validateResponseData = await validateAuth(authtoken);

    if (!validateResponseData.user) {
      return redirectOnError();
    }
  } catch (error) {
    console.log('Error: ', error);
    // Implementation or Network error
    return redirectOnError();
  }
  return {};
};

export const login = async (token: string) => {
  // Cookie will expire after 24h
  cookies.set('authtoken', token, { maxAge: 60 * 60 * 24 });
};

export const logout = async () => {
  cookies.remove('authtoken');
  Router.push('/login');
};
