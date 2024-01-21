import { useEffect, useState } from 'react';


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });


    const getFeth = async () => {

        setState({
            ...state,
            isLoading: true,
        })


        const resp = await fetch(url);
        const data = await resp.json();
        
        setState({
            data: data,
            isLoading: false,
            hasError: null,
        })


    };



    useEffect(() => {
      getFeth();
    
    }, [url]) // cada vez que el url cambie, se va a volver a disparar el useEffect 
    



    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
};