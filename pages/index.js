import { PrismaClient } from "@prisma/client"

export default function Home({ categorias}) {
  console.log(categorias);
  return (
    <>
    <h1>Next Js</h1>
    
    </>
  )
}

export const getServerSideProps = async () => {
  const prima = new PrismaClient();

  const categorias = await prima.categoria.findMany();

  return {
    props: {
      categorias,
      
    }
  }
}
