import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/product/Product';
import Main from './layout/Main';
import Login from './layout/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: 'home', element: <Home></Home> },
        { path: 'product', element: <Product></Product> },
        {
          path: 'login',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Login></Login>
        },
      ]
    },

    { path: 'about', element: <About></About> },
    { path: '*', element: <div>This route not found:404</div> }

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
