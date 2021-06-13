import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 4;
}

html {
    @media (max-width: 1024px){
        font-size: 65%;
        
    }
 }


body {
    background: #3e3d4c;
    font-family: 'Rambla', sans-serif;
    overflow-x: hidden;
    background-color: #032754;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23032754' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23162f5b' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23243761' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23303f68' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%233b476f' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23465076' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}

button {
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    margin-top: 1rem;
    padding: 1rem 2rem;
    border: 3px solid #e87ad0;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Rambla', sans-serif;
   
    &:hover {
        background-color: #e87ad0;
        color: white;
        
    }
}
h1 {
   
    font-weight: bold;
    color: #e87ad0;
    span{
    font-size: 2rem;
    }
}
    h2 {
        font-weight: lighter;
        font-size: 2rem;
        
    }
    h3 {
        color: white;
        font-size: 2rem;

    }
    h4 {
        font-size: 2rem;
        font-weight: bold;
        color: #e87ad0;
    }
    h5 {
        text-align: center;
        font-size: 1.2rem;
        color: #ccc;
        margin: 0px;
    }
    h6 {
        font-size: 1.1rem;
        color: #cccccc;
    }
    span {
        font-weight: bold;
        color: #e87ad0;
        font-size: 2rem;
    }
    a {
        font-size: 1.1.rem;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1rem;
        line-height: 150%;
    }
    #contact {
        cursor: pointer;
    }
    img {
        padding: 0.4rem;
    }
    .contact{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #land1{
          padding-left: 1rem;
          height: 70vh;
          @media(max-width: 1024px){
              margin-top: 18rem;
          }
      }

`;

export default GlobalStyle;