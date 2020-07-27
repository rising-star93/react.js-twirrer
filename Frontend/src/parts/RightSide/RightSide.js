import React, { useState, useContext , useEffect} from "react";
import { Link, useHistory } from "react-router-dom";

// style file
import "./RightSide.scss";

// context (global state)
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import UserContext from "../../context/UserContext";
import WhoToAdd from "../WhoToAdd/WhoToAdd";

const RightSide = () => {
  // ******* start global state ******* //

  // theme context
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  
  // language context
  const { isEnglish, english, german, toggleLanguage } = useContext(
    LanguageContext
  );
  var language = isEnglish ? english : german;

  // user context
  const { userData } = useContext(UserContext);

  // ******* end global state ******* //
  useEffect(() => {
    
  }, [userData.isAuth]);
  return (
    <div className='rightSide'>
      <div
        className='rightSide__box'
        style={{
          backgroundColor: `${theme.background}`,
          borderLeft: `1px solid ${theme.border}`,
        }}
      >
        <div
          className='rightSide__box__whoToAddBox'
          style={{
            backgroundColor: `${theme.foreground}`
          }}
        >
          <WhoToAdd />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
