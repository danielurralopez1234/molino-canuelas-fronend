import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

import "./assets/css/bootstrap.min.css"
import "./assets/scss/now-ui-kit.scss"
import "./assets/demo/demo.css"
// import "./assets/demo/nucleo-icons-page-styles.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)