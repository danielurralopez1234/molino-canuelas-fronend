import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import NucleoIcons from './views/NucleoIcons.tsx'
import LandingPage from './views/example/LandingPage.tsx'
import ProfilePage from './views/example/ProfilePage.tsx'
import LoginPage from './views/example/LoginPage.tsx'

// styles for this kit
import "./assets/css/bootstrap.min.css"
import "./assets/scss/now-ui-kit.scss?v=1.5.0"
import "./assets/demo/demo.css?v=1.5.0"
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
// const root = ReactDOM.createRoot(document.getElementById("root")!);
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/index" element={<App />} />
//       <Route path="/nucleo-icons" element={<NucleoIcons />} />
//       <Route path="/landing-page" element={<LandingPage />} />
//       <Route path="/profile-page" element={<ProfilePage />} />
//       <Route path="/login-page" element={<LoginPage />} />

//       <Route path="*" element={<Navigate to="/index" replace />} />
//     </Routes>
//   </BrowserRouter>
// );


