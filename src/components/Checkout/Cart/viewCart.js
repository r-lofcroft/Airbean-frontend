import { StyledCart } from './cartStyled';
import { bool, func } from 'prop-types';



const ViewCart = ({ open, setOpen }) => {
  return (
    <StyledCart open={open} onClick={() => setOpen(!open)}>
        <img className="bag" src="bag.svg" alt="bag"></img>
    </StyledCart>
  )
};
ViewCart.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default ViewCart;