import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { Container } from "../../components";
import { WrapTabBottom, TabBottomStyle } from "./styled";

const TabBottom = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <WrapTabBottom>
      <Container>
        <TabBottomStyle>
          <div className={pathname === "/" ? "active" : ""}>
            <Link href="/">Books</Link>
          </div>
          <div className={pathname === "/favorite" ? "active" : ""}>
            <Link href="/favorite">Favorite Book</Link>
          </div>
        </TabBottomStyle>
      </Container>
    </WrapTabBottom>
  );
};

export default TabBottom;
