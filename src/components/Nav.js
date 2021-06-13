//routing
import { Link } from 'react-router-dom';
//contact
// import SendEmail from '../components/SendEmail';
//style
import styled from 'styled-components';
//images
import sgpink from '../images/sgpink-sm.png';
// import LeftBurger from './LeftBurger';
// import Wave from './Wave'

const Nav = () => {
  return (
    <StyledNav>
      {/* <LeftBurger /> */}
      <Link to="/">
        <img src={sgpink} alt="logo4" />
      </Link>
      <ul>
        <Link to="/">
          <li>About Us</li>
        </Link>
        {/* <Link to="/services">
          <li>Services</li>
        </Link> */}
        <Link to="/services2">
          <li>Services</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/clients">
          <li>Our Clients</li>
        </Link>
        <Link to="/docs">
          <li>Resources</li>
        </Link>
      </ul>
      {/* <h1 id="logo" onClick={SendEmail}>
        <em>Square Gain</em>
      </h1> */}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: 9vh;
  width: 100%;
  display: flex;
  margin: 0;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3rem;
  background: #0e1d38;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
  }
  img {
    margin-top: 3rem;
  }
  ul {
    display: flex;
    list-style: none;
    font-size: 1rem;
  }
  #logo {
    font-size: 2rem;
    font-family: 'Rambla', sans-serif;
    font-weight: lighter;
    
  }
  li {
    padding-left: 10rem;
    position: relative;
    color: #fff;

    font-size: 1rem;
  }
  h1 {
    padding-left: 5rem;
    color: #ed55d3;
    font-size: 1.8rem;
  }
  #logo {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    margin-right: 1rem;

    li {
      padding: 1.4rem
     
    }
  }
  
  @media (max-width: 960px) {
      min-height: 15vh;
      margin-top: 0;
      img {
        display: none;
      }
      h1 {
        display: none;
      }
      ul {
      margin-left: 0;
      display: inline block;
    }
    li {
        padding: 1rem;
        color: #ee3ac7;
        font-size: 1.4rem;
      }

      @media (max-width: 768px) {
        padding: 1rem;
        ul {
        height: 5vh;
        width: 100%;
        margin: 0;
        padding: 1rem;
        flex-direction: flex-start;
        }
        li {
          font-size: 1.2rem;
        }
        
  }
  `;


export default Nav;
