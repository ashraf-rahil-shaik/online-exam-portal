
import React from 'react';
import './Assesment.css'
const Card = ({ name, time,trainingType ,Stream,Pricing,vacancies}) => (
  <div className="card">
    <h3 className="card-title">{name}</h3>
    <p className="card-time">Assessment Time: {time}</p>
    <p className="card-time">Traning-type: {trainingType}</p>
    <p className="card-time">Stream: {Stream}</p>
    <p className="card-time">Pricing:{Pricing}</p>
    <p className="card-time">vacancies: {vacancies}</p>
   
  </div>
);

const AssessmentPage = () => {
  const programmingLanguages = [
    { name: 'C',
     Duration : "80 days" ,
     trainingType : 'vertiual',
    Stream : "Information Technology",
    Pricing : "3000/-",
    vacancies :"600",
    LastDateToApply : "31st March 2023"},
    { name: 'C++', time: '40 mins' },
    { name: 'Java', time: '30 mins' },
   
  ];

  return (
    <div className="container">
      {programmingLanguages.map((programmingLanguages) => (

        <Card key={programmingLanguages.name} {...programmingLanguages}/>
      ))}
    </div>
  );
};





export default AssessmentPage;
