import './App.css';
import { RouterProvider } from 'react-router-dom';
import NavBar from './Components/AppBar/NavBar';
import { router } from './Config/routeConfig';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
