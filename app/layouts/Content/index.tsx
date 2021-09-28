import { Container } from "../../components";
import { ContentStyled } from "./styled";

interface IContent {
  children?: JSX.Element;
}

const Content: React.FC<IContent> = ({children}) => (
  <Container>
    <ContentStyled>
      {children}
    </ContentStyled>
  </Container>
)

export default Content;