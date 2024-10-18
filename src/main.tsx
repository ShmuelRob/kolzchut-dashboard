import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {GoogleOAuthProvider} from "@react-oauth/google"
import {AuthProvider} from "./auth/AuthContext.tsx";
import {router} from "./router.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
