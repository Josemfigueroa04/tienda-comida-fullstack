import Head from 'next/head'


export default function Layout ({ children, pagina }) {
    return (
        <>
            <Head>
                <title>{pagina}</title>
                <meta name="description" content='Tienda de Comida'/>
            </Head>
            
            <div className='md:flex'>

            <aside className='md:w-4/12'>

                <h1>Sider aqui</h1>

            </aside>

            <main className='md:w-8/12'>
                
                {children}

            </main>
            
            </div>

        </> 
       
    )
}