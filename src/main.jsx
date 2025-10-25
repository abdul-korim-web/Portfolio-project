import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import * as React from "react";
// 1. import `HeroUIProvider` component
import {HeroUIProvider} from "@heroui/react";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
    <App />
  </HeroUIProvider>,
)
