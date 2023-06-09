import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const {activity, handleAddToList} = props;
    const {activity_name, activity_detail, for_age, time_require, picture, id} = activity;

    const replace = (id) => {  
        const element = document.getElementById(id);
        element.innerText = "";
        element.innerText = "Added";
        element.style.backgroundColor = 'blue';
    }

    return (
        <div className='activity-card'>
            <img src={picture} alt="img  not found" />
            <h4>{activity_name}</h4>
        <div className='activity-details'>  

            <p>{activity_detail}</p>
            <p>for age: {for_age} </p>
            <p>time required: {time_require} Minutes </p>
        </div>   
            <button id={id}  onClick={
                () => {
                    handleAddToList(activity)
                    replace(id)
                }
            }> Add to list</button>
        </div>
    );
};

export default Activity;