import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import {ClientConfig} from "./types";

interface ConfigProviderProps {
    children: ReactNode;
}

const DEFAULT_CLIENT = "WaltDisney";

const ConfigContext = createContext<ClientConfig | null>(null);

export const ConfigProvider: React.FC<ConfigProviderProps> = ({children}) => {
    const [config, setConfig] = useState<ClientConfig | null>(null);

    useEffect(() => {
        const client = import.meta.env.VITE_CLIENT || DEFAULT_CLIENT;
        // Dynamically import the configuration JSON file based on the clientId
        import(`./clients/${client}.json`)
            .then((module) => {
                setConfig(module.default);
            })
            .catch((error) => {
                console.error("Failed to load client configuration:", error);
            });
    }, []);

    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => {
    const context = useContext(ConfigContext);
    if (context === undefined) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
};
