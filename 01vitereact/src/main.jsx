import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// react Element doosre tareeke se jab build karunga project ko tab use hoga.
const reactElement = React.createElement(
  // first parameter expected-> tag
  //second is the attributes, withouty name.
  'a',
  {href: 'https://google.com', target :'_blank'},
  'Click me to visit google.',
  anotherUser
)
createRoot(document.querySelector('#root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)

