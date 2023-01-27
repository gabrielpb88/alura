import { Link, Logo, MenuItem, MenuItemWrapper, Navbar } from './style';

const Menu = () => {
  return (
    <header>
      <Navbar>
        <Logo />
        <MenuItemWrapper>
          <MenuItem>
            <Link to={'#'}>Como Fazer</Link>
          </MenuItem>
          /
          <MenuItem>
            <Link to={'#'}>Ofertas</Link>
          </MenuItem>
          /
          <MenuItem>
            <Link to={'#'}>Depoimentos</Link>
          </MenuItem>
          /
          <MenuItem>
            <Link to={'#'}>Vídeos</Link>
          </MenuItem>
          /
          <MenuItem>
            <Link to={'#'}>Meu carrinho</Link>
          </MenuItem>
        </MenuItemWrapper>
      </Navbar>
    </header>
  );
};

export default Menu;
