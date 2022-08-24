import React from "react";

import './Themeswitch.css';
import { useThemeContext } from './../../hooks/useThemeContext';

export default function ThemeSwitch() {


  const {theme,dispatch} = useThemeContext()


  const switchTheme = () => {
    if (theme === 'light') {
        dispatch({type:'DARK'})
        document.body.style.backgroundColor = '#f2e9e6'
    } else {
        dispatch({type:'LIGHT'})
        document.body.style.backgroundColor = '#e1e5ed'
    }
    console.log(theme)
  }

  return (
    <div className="container ">
      <div className="form-check form-switch toggle">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault" onClick={switchTheme}
        />
      </div>
    </div>
  );
}
