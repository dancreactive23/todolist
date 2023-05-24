import React from 'react';
import AppUI from './AppUI';
import './App.css';
import {TaskProvider} from '../TaskContext/TaskContext';


function App() {

  return (
    <TaskProvider>
       <AppUI/>
    </TaskProvider>
  );
}

export default App;
