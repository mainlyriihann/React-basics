


/*
npm create vite@latest -> to create vite(react )app.

dev dependencies never go to production, only help in development.

Jab bhi node modules vala folder na ho , npm install karlena.
*/
// App and main .jsx are important , baaki sab lodu hai , sabkuch
// mainly app mein hoga fir app ko export krdenge main mein.

function App() {
  const username = "Nishant"
  return (
    <>

      <h1>Hello World, {username}</h1>
     
    </>
    //curly braces mein if ya for vagera nhi chalana,
    // isko fucntion mein return ke pehle karlo. 
  );
}

export default App
// can we render in app.jsx itself? instead of main.jsx?
//Yes, bas import and export ka dhyan rkhna, 
// function ka naam hi HTML tag bann jayega.
// LEKIN fucntion ka naam jo hoga uska start 
// uppercase se hoga!!!!!!!!!!
