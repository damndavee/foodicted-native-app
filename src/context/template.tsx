import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Template, Templates } from "../types/template";
import { router } from "expo-router";

type TemplateContextType  = {
    template: Template | null;
    setTemplate: (template: keyof typeof Templates) => void;
    navigateWithTemplate: (template: Templates, pathname: string, params?: any) => void;
}

export const TemplateContext = createContext<TemplateContextType | null>(null);

export function TemplateContextProvider(props: PropsWithChildren) {

    const TemplateMap: Record<Templates, any> = {
        [Templates.Signin]: require('../templates/signin.json'),
        [Templates.Signup]: require('../templates/signup.json'),
    }

    const [formTemplate, setFormTemplate] = useState<Template | null>(null);

    const navigateWithTemplate = (template: keyof typeof Templates, pathname: string, params: any = {}) => {
        router.navigate({pathname, params});
        setFormTemplate(TemplateMap[template]);
    }

    const setTemplateHandler = (template: keyof typeof Templates) => {
        setFormTemplate(TemplateMap[template]);
    }

    return (
        <TemplateContext.Provider value={{
            template: formTemplate, 
            setTemplate: setTemplateHandler,
            navigateWithTemplate
        }}>
            {props.children}
        </TemplateContext.Provider>
    )
};

export function useTemplateContext() {
    const context = useContext(TemplateContext);

    if(!context) {
        throw new Error("useTemplateContext must be used within a TemplateContextProvider");
    };

    return context;
}