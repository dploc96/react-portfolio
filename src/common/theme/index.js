import React from 'react';
import './Theme.css';

export default function Theme() {
  let theme = localStorage.getItem('theme');

  if (theme == null) {
    setDefaultTheme();
  } else {
    document.documentElement.style.setProperty('--color-accent', theme);
  }
  const setDefaultTheme = () => {
    document.documentElement.style.setProperty('--color-accent', '#78866B');
    localStorage.setItem('theme', '#78866B');
  };

  const setSecondTheme = () => {
    document.documentElement.style.setProperty('--color-accent', '#7E4C74');
    localStorage.setItem('theme', '#7E4C74');
  };

  const setThirdTheme = () => {
    document.documentElement.style.setProperty('--color-accent', '#7b90a4');
    localStorage.setItem('theme', '#7b90a4');
  };

  const setFourthTheme = () => {
    document.documentElement.style.setProperty('--color-accent', '#A66540');
    localStorage.setItem('theme', '#A66540');
  };

  return (
    <div className="theme">
      <div
        id="default-mode"
        data-mode="default"
        className="theme__dot"
        onClick={setDefaultTheme}
      ></div>
      <div
        id="second-mode"
        data-mode="second"
        className="theme__dot"
        onClick={setSecondTheme}
      ></div>
      <div
        id="third-mode"
        data-mode="third"
        className="theme__dot"
        onClick={setThirdTheme}
      ></div>
      <div
        id="fourth-mode"
        data-mode="fourth"
        className="theme__dot"
        onClick={setFourthTheme}
      ></div>
    </div>
  );
}
