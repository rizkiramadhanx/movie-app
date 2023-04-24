import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { Genre, Main, Trending } from '@/page';
import Upcoming from './page/Upcoming';
import Toprated from './page/Toprated';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/genre/:id',
    element: <Genre />,
  },
  {
    path: '/discover/trending',
    element: <Trending />,
  },
  {
    path: '/discover/upcoming',
    element: <Upcoming />,
  },
  {
    path: '/discover/top-rated',
    element: <Toprated />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
