import { useState } from 'react';
import { useTemplateContext } from '../context/template';
import { Form } from '../types/auth/form';
import { useAppDispatch } from '../store';
import { createUserWithDocumentThunk, signInWithEmailThunk } from '../store/authentication/authentication.reducer';
import { Templates } from '../types/template';

const useForm = () => {
    const templateContext = useTemplateContext();
    // TODO: pass template state template related: sign in just nickname and password
    const [userData, setUserData] = useState<Form>(templateContext.template?.state);
    const dispatch = useAppDispatch();

    const onChangeHandler = (id: string, enteredValue: string | number | boolean): void => {
        setUserData((prevState: Form) => ({
            ...prevState,
            [id]: enteredValue
        }))
    };

    const onSubmitHandler = () => {
        // TODO: setup validation before sending request
        if(templateContext.template?.name === Templates.Signin) {
            dispatch(signInWithEmailThunk({email: 'sample_user#1@mail.com', password: 'confirm_password2'}));
        } else {
            dispatch(createUserWithDocumentThunk({email: 'sample_user#3@mail.com', avatarUrl: 'avatarUrl2.png', confirmPassword: 'confirm_passowrd2', nickname: 'SampleUserBrrr', password: 'confirm_password2'}));
        }
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