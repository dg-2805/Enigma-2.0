import React from 'react'
import { createRoot } from 'react-dom/client'
import Enigma20Popup from './popup'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Enigma20Popup />)
