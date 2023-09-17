import './App.css';
import './Assets/css/Font.css';
import './Assets/css/color.css';
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
