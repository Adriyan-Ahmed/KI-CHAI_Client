// ------------------------------- //
// Imported Items Start from here //
// ------------------------------//

import React from 'react'
import ReactDOM from 'react-dom/client'
import '../Styles/index.css'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import Routes from '../Routes/Routes';
import '../Styles/Styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>,
)
