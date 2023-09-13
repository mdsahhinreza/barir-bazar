import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/GuestRoute/GuestRoute';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
