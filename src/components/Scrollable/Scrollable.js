import React from 'react';
import './Scrollable.css';
import { TaskContext } from '../../TaskContext/TaskContext';

const Scrollable = (props) =>{
    const {total,filteredTaskList:list} = React.useContext(TaskContext);
    return(
        <div className='container'>
            <div className={`ScrollContainer ${(total === 0 || list.length ===0) && "scrollHidden"}`}>
                {props.children}
            </div>
        </div>
    );
}

export default Scrollable;