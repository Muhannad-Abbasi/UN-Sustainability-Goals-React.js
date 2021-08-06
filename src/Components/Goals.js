import React from 'react';
import './Goals.css'

function Goals(props){

    function handleClick(){
        props.getTargetProp(props.allGoal)
    }

    return(
        <section className='container'>

            <section  className='Goals'>
                <p>{props.allGoal.title}</p>
                <button onClick={handleClick}>Read More!</button>
            </section>

        </section>
    )
}

export default Goals;