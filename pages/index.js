import { PrismaClient } from "@prisma/client"

export default function Home({ categorias}) {
  console.log(categorias);
  return (
    <>

    <h1>Ultima prueba</h1>
    
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
