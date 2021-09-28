import { Title } from "../../components"
import Layout from "../../layouts"
import { useRouter } from "next/router"

const DetailContainer = () => {
  const router = useRouter()
  const  { id } = router.query
  return (
    <Layout title="Detail Booku">
      <>
        <Title title={`${id}`} />
        Detail
      </>
    </Layout>
  )
}

export default DetailContainer