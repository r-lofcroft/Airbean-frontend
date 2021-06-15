// global.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  .button {
    background: ${({ theme }) => theme.primaryDark};
    border: none;
    padding: 0,25rem;
    color: ${({ theme }) => theme.primaryLight};
    border-radius: 50%;
  }
  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
  
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  .mainButton{
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    border: none;
    padding: 15px 32px;
    font-size: 16px;
    border-radius: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  img {
    -webkit-filter: invert(1);
    filter: invert(1);
    width: 1.5rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
  input[type=text], [type=email], [type=password] {
    width: 100%;
    padding: 0.8rem 1rem;
    margin: 1rem 0;
    box-sizing: border-box;
    border-radius: 0.3rem;
    border: 0.1rem solid black;
  }

  `