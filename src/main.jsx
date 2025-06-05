import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import BrowseBooks from './components/BrowseBooks.jsx';
import AddBook from './components/AddBooks.jsx';
import Error from './components/Error.jsx';
import BooksDetails from './components/BooksDetails.jsx';

import { Provider } from 'react-redux';
import store from './store/store';

let appData = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/browseBooks', element: <BrowseBooks /> },
      { path: '/addBook', element: <AddBook /> },
      { path: '/book/:name', element: <BooksDetails /> },
      { path: '/browseBooks/book/:name', element: <BooksDetails /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appData} />
    </Provider>
  </StrictMode>
);
