import {FapizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function category() {
  return (
    <List>
        <NavLink>
            <FapizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </NavLink>
        <NavLink>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

export default category