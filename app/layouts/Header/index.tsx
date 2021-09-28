import React, { useContext } from "react";
// import { Context } from './../../context/store'
import { Container } from "../../components";
import { HeaderStyle, Search } from "./styled";

const Header: React.FC = () => {
  // const [state, dispatch] = useContext(Context);
  return (
      <HeaderStyle>
        <Container>
            <Search>
              <input
                placeholder="Cari Buku berdasarkan judul atau penulis"
                // onChange={(e: any) => dispatch({type: 'SET_KEYWORD', payload: e.target.value})}
              />
            </Search>
        </Container>
      </HeaderStyle>
    );
}


export default Header;
