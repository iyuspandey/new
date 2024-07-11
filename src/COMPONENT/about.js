import React from 'react';
import './Team.css';
import jhon from './jhon.png';
import nat from './gaurav.webp'
import david from './david.png'
import ayush from './ayush.jpg'
const teamMembers = [
  { name: 'Manpreet', role: 'Backend', image: jhon },
  { name: 'Gaurav', role: 'Backend', image: nat },
  { name: 'Dhruv', role: 'Frontend', image: david },
  {name:'Ayush',role:'Frontend',image:ayush},
];

const Team = () => {
  return (
    <div className=" min-h-full w-100 justify-center px-6 py-12 lg:px-8 bg-white bg-opacity-10 backdrop-blur-md self-center my-36">
      <div className="intro">
        <h2>We are ashleel coders</h2>
        <h1>We have a <span className="highlight">Talented</span>  Team</h1>
        <p>
       "Asleel Coders" is an innovative tech community focused on leveraging cutting-edge programming and software development techniques
        </p>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
