import {React, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';
import './TeamPage.scss';

export const TeamPage = () => {

  const [team, setTeam] = useState({matches: []});
  const { teamName } = useParams();
 
    useEffect (
      () => {
        const fetchTeamMatches = async () => {
          const response = await fetch(`http://localhost:8080/team/${teamName}`);
          const data = await response.json();
          setTeam(data);

        };
        fetchTeamMatches();

      }, [teamName]
      

    );

  if (!team || !team.teamName) {
    return <h1>Team not found</h1>
  }    
  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <Link to={`/teams`}>
        <h1>Home</h1>
        </Link>
        
        <h1 className='team-name'>{team.teamName}</h1>
      </div>

      <div className="win-loss-section">
        Win / losses
          <PieChart
            data={[
              { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#e15454' },
              { title: 'Wins', value: team.totalWins, color: '#54e1a3' },
            ]}
          />
      </div>
      <div className='match-details-section'>
        <h3>Latest match</h3>
        <MatchDetailCard teamName ={team.teamName} match = {team.matches[0]}/>
      </div>

      {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match = {match} />)}

      <div className='more-link'>
      <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}> More > </Link>
      </div>
    </div>
  );
}

