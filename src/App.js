import { useEffect, useState } from 'react';
import './App.css';
import ActivityCont from './components/Activity-cont/ActivityCont';
import Header from './components/Header/Header';
import ActivityContHeader from './components/ActivityContHeader/ActivityContHeader';

function App() {
  const [activities, setActivities] = useState([])

  // load data
  useEffect(() => {
    fetch("fakeData.json")
    .then(res => res.json())
    .then(data => setActivities(data))

  }, [])

  console.log(activities);

  return (
    <div className="App">
     <div className="exercise-data-cont">
        <Header></Header> 
        <ActivityContHeader></ActivityContHeader>
        <ActivityCont activities ={activities}></ActivityCont>
     </div>

     <div className="cal-cart">
          <div className="member">
              <div><img src="" alt="" srcset="" /></div>
              <div>
                <h3>name</h3>
                <p>Title</p>
              </div>
          </div>
          <div className='member-data'>
                <div>
                  <p> kg</p>
                  <p>Weight</p>
                </div>
                <div>
                  <p></p>
                  <p>height</p>
                </div>
                <div>
                  <p> yrs</p>
                  <p>age</p>
                </div>
          </div>
              <h3>Add a break</h3>
          <div className='break-data'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
          </div>
              <h3>Exercise details:</h3>
          <div className="exercise-details">
                <div className='exercise-time-data'>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>13xxxxx</p>
                </div>
                <br />
                <div className='break-time-data'>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>123xxxxx</p>
                </div>
          </div>

          <button className='activity-done-btn'>Activity completed</button>

          
     </div>
    </div>
  );
}

export default App;
