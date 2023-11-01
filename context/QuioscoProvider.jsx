import {useState,useEffect,createContext} from 'react';
import axios from 'axios';

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [productos, setProductos] = useState({});
    const [modal, setModal] = useState(false);

    const obtenerCategorias = async () => {
        const {data} = await axios.get('/api/categorias');
        setCategorias(data);
            }

    useEffect(() => {
        obtenerCategorias();
    }, []);

    useEffect(() => {
        setCategoriaActual(categorias[0]);
    },[categorias]);

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(cat => cat.id === id); 
        setCategoriaActual(categoria[0]);
        console.log(categoriaActual)

    }

    const handleSetProductos = (productos) => {
        setProductos(productos);
    }

    const handleChangeModal = () => {
        setModal(!modal);
    }


    return (
        <QuioscoContext.Provider
            value={{
                categorias, 
                categoriaActual,
                handleClickCategoria,
                productos,
                handleSetProductos,
                modal,
                handleChangeModal,

            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
}

export {
    QuioscoProvider
}

export default QuioscoContext;