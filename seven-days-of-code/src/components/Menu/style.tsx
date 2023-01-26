import styled from 'styled-components';
import { ReactComponent as logo } from '../../assets/logo.svg';
import { Link as RouterLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
`;

export const Logo = logo;

export const MenuItemWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const MenuItem = styled.li`
  font-size: 1rem;
  padding: 0 1rem;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;
