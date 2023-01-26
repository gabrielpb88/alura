import { Header, Link, Logo, MenuItem, MenuItemWrapper } from './style';

const Menu = () => {
  return (
    <Header>
      <nav>
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
      </nav>
    </Header>
  );
};

export default Menu;
