import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { Genre, Main, Trending } from '@/page';

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
