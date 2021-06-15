import styled from 'styled-components';

export const StyledProducts = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #ffffff;
  border-radius: 1rem;
  height: 80vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform:  ${({ open }) => open ? 'translateY(15%)' : 'translateY(-101%)'};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;