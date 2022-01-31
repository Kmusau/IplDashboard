import {React, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import './MatchPage.scss';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { YearSelector } from '../components/YearSelector';

export const MatchPage = () => {

  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();
 
  useEffect (
    () => {
      const fetchMatches = async () => {
        const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
        const data = await response.json();
        setMatches(data);

      };
      fetchMatches();

    }, [teamName, year]
    

  );

  return (
    <div className="MatchPage">
      <div className='year-selector'>
      <Link to={`/teams`}>
        <h1>Home</h1>
      </Link>
        <h3> Select a year </h3>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <h1 className='page-heading'>{teamName} matches in {year}</h1>
        {matches.map(match => <MatchDetailCard teamName={teamName} match = {match} />)}
      </div>
    </div>
  );
}