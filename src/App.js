import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './tailwind/tailwind.css';
import { router } from './router/router';




function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>

  );
}

export default App;
