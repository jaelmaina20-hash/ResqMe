import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import store from "./store.js"
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
