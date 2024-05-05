import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Bottles from '../pages/Bottles';
import BottleShow from '../pages/Bottles/show';
import HomePage from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/bottles',
        element: <Bottles />,
      },
      {
        path: '/bottles/:id',
        element: <BottleShow />,
      },
    ],
  },
]);

export default router;
