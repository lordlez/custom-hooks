import { useState } from 'react';


export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value //propiedades computadas en js, accedo al objeto de forma dinamica
        })
    };

    const onResetForm = () => {
        setFormState( initialForm );
    };


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
};

