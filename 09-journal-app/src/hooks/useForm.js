import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const [formValidation, setFormValidation] = useState({})


    useEffect(() => {
        createValidators();
    }, [formState])

    useEffect(() => {
        setFormState(initialForm)
    }, [initialForm])

    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }

        return true;

    }, [formValidation])



    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {
        const formCheckValues = {}; //Creamos un objeto para almacenar los resultados de validaicon
        for (const formField of Object.keys(formValidations)) { //Iteración sobre las claves de formValidations
            //* Object.keys(formValidations) devuelve un array con los nombres de los campos del formulario que tiene validaciones.
            const [fn, errorMessage] = formValidations[formField]; //formValidations tiene dos campos la función y el mensaje. //* Se extraen 
            formCheckValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
            //! Aplicamos la validación: se evalua la fn pasandole el valor del campo correspondiente en formState.
            //! Si la validacion es true se guardará como true, si es false, devolvera el errorMessage.
        }
        setFormValidation(formCheckValues); //Actualizamos el estado de validacion.
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}