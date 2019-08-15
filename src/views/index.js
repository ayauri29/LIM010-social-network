/* eslint-disable import/no-cycle */
import register from './register-view.js';
import login from './login-view.js';
import { home } from './home-view.js';
import profile from './profile-view.js';

export const components = {
  login,
  register,
  home,
  profile,
};
