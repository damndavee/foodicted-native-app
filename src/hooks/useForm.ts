import { useState } from 'react';
import { useTemplateContext } from '../context/template';
import { Form } from '../types/auth/form';

const useForm = () => {
    const templateContext = useTemplateContext();
    // TODO: pass template state template related: sign in just nickname and password
    const [userData, setUserData] = useState<Form>(templateContext.template?.state);

    const onChangeHandler = (id: string, enteredValue: string | number | boolean): void => {
        setUserData((prevState: Form) => ({
            ...prevState,
            [id]: enteredValue
        }))
    };

    const onSubmitHandler = () => {
        console.log('USER DATA: ', userData);
    }
    
    const onClearFormDataHandler = () => setUserData(templateContext.template?.state);

    return {
        userData,
        handleChange: onChangeHandler,
        handleSubmit: onSubmitHandler,
        handleClearForm: onClearFormDataHandler
    };
};

export default useForm;