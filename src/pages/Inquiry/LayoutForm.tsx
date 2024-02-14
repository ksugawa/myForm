import React from 'react';
import { useForm, FormProvider } from "react-hook-form"

interface RegisterData {
    user_name: string,
    email: string,
    password: string,
    password_confirm: string,
}

const LayoutForm = ({ children }: { children: React.ReactNode }) => {

    const methods = useForm<RegisterData>({
        mode: 'onBlur',
        criteriaMode: "all"
    });

    return (
        <>
            <FormProvider {...methods}>{children}</FormProvider>
        </>
    );

};

export default LayoutForm;
