import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ScrollBackground from './ScrollBackground';
import App from './App.tsx'


import './main.css'
// import "./assets/demo/nucleo-icons-page-styles.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollBackground />
    <App />
  </BrowserRouter>,
)