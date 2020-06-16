import { useState, useCallback } from 'react';

function useInput(initForm) {
    const [form, setForm] = useState(initForm);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    }, []);

    const reset = useCallback(() => {
        setForm(initForm);
    }, [initForm]);

    return [form, onChange, reset];
}

export default useInput;
