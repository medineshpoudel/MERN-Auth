/* eslint-disable max-len */
import Home from '../pages/Home';

const routes = [
  {
    text: 'Dashboard',
    name: 'Dashboard',
    role: ['guest'],
    element: <Home />,
    route: '/home',
    parent: 'default',
  },
];

export default routes;
