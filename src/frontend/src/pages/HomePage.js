import {React, useEffect, useState} from 'react'
import './HomePage.scss';
import { TeamTile } from '../components/TeamTile';

export const HomePage = () => {

  const [teams, setTeams] = useState([]);
 
    useEffect (
      () => {
        const fetchAllTeams = async () => {
          const response = await fetch(`http://localhost:8080/team`);
          const data = await response.json();
          setTeams(data);

        };
        fetchAllTeams();

      }, []
      

    );


  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className='app-name'>Kelvin Musau's IPL Dashboard</h1>
      </div>
    <div className='team-grid'>
        { teams.map(team => <TeamTile key={team.id} teamName={team.teamName} />) }
    </div>

    </div>
  );
}

