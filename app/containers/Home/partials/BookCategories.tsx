import styled from "@emotion/styled"
import { Badge, Title } from "../../../components"

interface IBookCategories {
  categories: Array<{
    id: number;
    name: string;
  }>,
  categoryIdx: number;
  setCategoryIdx: (idx: number) => void;
  setCategoryId: (id: number) => void;
}

const BookCategories : React.FC<IBookCategories> = (
  {categories, categoryIdx, setCategoryIdx, setCategoryId}
) => {
  
  return (
    <BookCategoriesStyled>
      <Title title="Kategori Buku" />
      <Wrapper>
        {categories && categories.map(({id, name}, idx) => {
          return (
            <Badge 
              key={id} 
              title={name} 
              active={idx === categoryIdx}
              onClick={() => {
                setCategoryIdx(idx)
                setCategoryId(id)
              }}
            />
          )
        })}
      </Wrapper>
    </BookCategoriesStyled>
  )
}

const BookCategoriesStyled = styled.section`
  padding: 20px;
  box-sizing: border-box;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`

export default BookCategories