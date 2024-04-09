import React from 'react';
import {useConfig} from './config/ConfigProvider';
import './App.css';

const App: React.FC = () => {
    const config = useConfig();

    if (!config) {
        // Render a loading state if config hasn't loaded yet
        return <div>Loading configuration...</div>;
    }

    // Proceed with rendering once config is loaded
    return (
        <div className="App" style={{backgroundColor: config.bgColor}}>
            <div style={{color: config.color}}>
                <img src={`${config.logo}`} alt="Client Logo" height={200}/>
                <h1>
                    <span style={{color: "#333"}}>Welcome to </span>{config.title}!
                </h1>
            </div>
        </div>
    );
};

export default App;
