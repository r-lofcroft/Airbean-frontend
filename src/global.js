// global.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%
  }
  .App{
    display: block;
    margin: 1rem;
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
    margin-top: 1rem;
    overflow:scroll;
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
  .banner{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
}
  .footBanner{
    position: fixed;
    width: 100%;
    bottom: 0px;
    left: 0;
    -webkit-transform:rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    z-index: -1;

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
  .subButton{
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    border: none;
    padding: 15px 32px;
    font-size: 16px;
    border-radius: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .bag {
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
  #orderContainer{
    display: flex
    justify-content: space-between;
  }
  #orderHistory{
    font-size: small;
    flex-grow: 4;
    flex-basis: auto;
    border-bottom: 1px dotted black;
  }
  #avatar{
    display: block;
    width: 8rem;
    margin-left: auto;
    margin-right: auto;
    background-color: #E5674E;
    border-radius: 50%
    
  }
  .signup{
    background: ${({ theme }) => theme.primaryLight};  
    border-radius: 0.3rem;
    padding: 1rem;
  }
  .about{
    margin-top: 5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top: 18rem;
    padding-bottom: 5rem;
  }
  .orderStatus{
    background: #E5674E;
    max-width: 100vw;
    max-height: 100vh;
  }
  .founderImg{
    display: block;
    width: 5rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    margin-top: 3rem;
    background-blend-mode: multiply;
  }
  .founder{
    text-align: center;
    
  }
  `