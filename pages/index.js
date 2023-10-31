import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <div>
      <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
        <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
        <p className="text-2xl my-10">Elije tu Pedido</p>
      </Layout>
    </div>
  );
}
