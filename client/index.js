import 'grommet/scss/vanilla/index.scss'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const app = (
  <div>
    <App />
  </div>
)

const target = document.getElementById('app')

render(app, target)
