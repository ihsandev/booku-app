import React, { useContext } from "react";
import { Context } from "../../../context/store";
import Link from 'next/link'
import { Container } from "../../components";
import { HeaderStyle, Search } from "./styled";

interface IHeader {
  hasSearch?: boolean
}

const Header: React.FC<IHeader> = ({hasSearch = true}) => {
  const [state, dispatch] = useContext(Context);
  return (
      <HeaderStyle>
        <Container>
          {hasSearch ? (
            <Search>
              <input
                placeholder="Cari Buku berdasarkan judul atau penulis"
                onChange={(e: any) => dispatch({type: 'SET_KEYWORD', payload: e.target.value})}
              />
            </Search>
          ) : <Link href="/"><a><h1>Booku App</h1></a></Link>}
        </Container>
      </HeaderStyle>
    );
}


export default Header;
