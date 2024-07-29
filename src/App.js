import React, {useEffect, useState} from 'react';
import Navbar from './Components/Navbar'
const App=()=>{

// const [theme, setTheme] = useState('light');

//if i referesh it gose back to the light mode to prvent these problem below is the solution 
const current_theme = localStorage.getItem('current_theme');
const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

useEffect(()=>{
  localStorage.setItem('current_theme',theme);
},[theme])

return(
  <div>
    <div className={`container ${theme}`}>
   <Navbar theme={theme} setTheme={setTheme} />
   </div>
  </div>
)
}

export default App;