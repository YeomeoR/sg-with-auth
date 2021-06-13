// styled components
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  font-size: 1rem;
  color: #ccc;
 
  @media (max-width: 1024px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2 h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    display: block;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 5;
  img {
  
    width: 100%;
    height: 75vh;
    object-fit: contain;
  }
`;
export const StyledIcon = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 5;
  img {
    width: 100%;
    height: 65vh;
    object-fit: contain;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;

export const StyledBackground = styled.div`
  background: no-repeat cover;
`;
