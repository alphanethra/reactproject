import { StrictMode } from 'react'
import React from 'react'
import './index.css'
import store from './redux/store.js'
import { Toaster } from './components/ui/sonner.jsx'
import App from './App.jsx'
import { Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
        <Toaster/>
    </Provider>
  </React.StrictMode>,
)
