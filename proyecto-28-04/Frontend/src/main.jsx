import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(

  <GoogleOAuthProvider clientId="<your_client_id>">
  <React.StrictMode>
    <App />
  </React.StrictMode></GoogleOAuthProvider>
)
