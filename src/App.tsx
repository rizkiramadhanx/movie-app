import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import {
  Genre,
  Main,
  Trending,
  Error,
  Upcoming,
  Toprated,
  Search,
} from '@/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error code={400} />,
  },
  {
    path: '/genre/:id',
    element: <Genre />,
    errorElement: <Error code={400} />,
  },
  {
    path: '/discover/trending',
    element: <Trending />,
    errorElement: <Error code={400} />,
  },
  {
    path: '/discover/upcoming',
    element: <Upcoming />,
    errorElement: <Error code={400} />,
  },
  {
    path: '/discover/top-rated',
    element: <Toprated />,
    errorElement: <Error code={400} />,
  },
  {
    path: '/search',
    element: <Search />,
    errorElement: <Error code={400} />,
  },
  {
    path: '*',
    element: <Error code={404} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
