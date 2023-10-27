import {useState,useEffect,createContext} from 'react';
import axios from 'axios';

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([]);
    const [categoriActual, setCategoriActual] = useState({});

    const obtenerCategorias = async () => {
        const {data} = await axios.get('/api/categorias');
        setCategorias(data);
            }

    useEffect(() => {
        obtenerCategorias();
    }, []);

    const handleClickCategoria = (id) => {
        console.log(id);
        
    }


    return (
        <QuioscoContext.Provider
            value={{
                categorias, 
                categoriActual,
                handleClickCategoria

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