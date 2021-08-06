import './App.css';
import React, { useState, useEffect } from 'react';
import Goals from './Components/Goals'
import SubGoals from './Components/SubGoals';

function App() {

  const [ goals, setGoals ] = useState([]);

  const [ target, setTarget ] = useState([]);

  useEffect( async () => {
    const response = await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true');
    const data = await response.json();

    setGoals(data)
  }, [] )

  function getTargets(goalData){
    setTarget(goalData.targets)
  }

  return (
    <section className="App">

      <header className='UN'>
        <h1>UN Sustainability Goals</h1>
      </header>

      <section className='container'>

        <article>

          { goals.map( (data) => {
            return <Goals allGoal={ data } key={ data.code } getTargetProp={ getTargets } />
          } )}

        </article>

        <article className='SubGoals'>

          <div className='SubTitle'>
            <h2 className='SubGoalsTitle'>Goals</h2>
          </div>

          { target.map( (data) => {
              return <SubGoals key={data.code} targets={data.title}/>
          } )}

        </article>

      </section>

    </section>
  );
}

export default App;
