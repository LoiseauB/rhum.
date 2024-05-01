import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Bottles from '../pages/Bottles';
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
    ],
  },
]);

export default router;
