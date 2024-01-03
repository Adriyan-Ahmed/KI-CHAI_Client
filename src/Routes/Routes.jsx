// ------------------------------- //
// Imported Items Start from here //
// ------------------------------//

import{  createBrowserRouter  } from"react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";






// -------------------------------// 
// ------- Main Function ------- //
// -----------------------------// 
const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element: <Home></Home>
        }
      ]
    },
  ]);

export default Routes;
