import React from 'react';
import './styles/index.css';
import { Header } from './components';
import { Footer } from './components';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <h1>Welcome to the React Docker App</h1>
                <p>This is a simple application running in a Docker container.</p>
            </main>
            <Footer />
        </div>
    );
}

export default App;