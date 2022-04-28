import React from 'react';
import '../app/App.css';
import Content from '../content/Content';

const App = () =>{
        return (
            <div className='App d-flex justify-content-center'>
                <div>
                <h1 className='text-center header-tittle'>Arena counter</h1>
                <Content/>
                </div>
            </div>
        )
};
export default App;