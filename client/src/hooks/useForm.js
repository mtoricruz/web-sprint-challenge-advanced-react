// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialValue, message) => {
    // const [someValue, setSomeValue] = useLocalStorage('success-message', message)
    const [values, setValues] = useLocalStorage(key, initialValue)

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     setSuccessMessage(true)
    // }

    return [values, handleChanges]
}