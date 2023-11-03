
// App.js
import React from 'react';
import UserGrid from './UserGrid';
import GroupGrid from './GroupGrid';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <UserGrid /> {/* Muestra la tabla de persons */}
                <GroupGrid /> {/* Muestra la tabla de groups */}
            </header>
        </div>
    );
}

export default App;
