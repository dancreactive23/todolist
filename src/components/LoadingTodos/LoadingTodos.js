import React from 'react';
import './LoadingTodos.css';

const LoadingTodos = () =>{
    return(
        <>
           <article className='container'>
                <div className='background'>
                    <div className='counter animate'></div>
                    <div className='search animate'></div>
                    <section className='listContainer'>
                        <div className='item animate'></div>
                        <div className='item animate'></div>
                        <div className='item animate'></div>
                        <div className='item animate'></div>
                        <div className='item animate'></div>
                    </section>
                    <div className='createTask animate'></div>
                </div>
           </article>
        </>
    );
}

export default LoadingTodos;