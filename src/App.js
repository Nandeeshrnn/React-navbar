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


/* const current_theme = localStorage.getItem('current_theme');

This line retrieves the currently saved theme from localStorage, which is a feature of the browser that allows data to be stored across sessions.
localStorage.getItem('current_theme') will return the value associated with the key 'current_theme'. If no value is found (i.e., the user has not selected a theme before), it returns null.
const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

Here, a state variable theme is being initialized using the useState hook.
If current_theme exists (i.e., it's not null), it will set theme to that value. If current_theme is null (no theme was saved), it defaults to 'light'.
setTheme is a function that allows you to update the value of theme.
useEffect(()=>{ localStorage.setItem('current_theme',theme); },[theme])

useEffect is a hook in React that allows you to perform side effects in function components. This particular effect runs every time the theme state changes.
The function inside useEffect is responsible for saving the current value of theme to localStorage using localStorage.setItem('current_theme', theme);.
The dependency array [theme] at the end of the useEffect hook ensures that this effect only runs when the theme value changes.

*/
