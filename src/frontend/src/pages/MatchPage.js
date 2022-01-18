import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const MatchPage = () => {

  const [team, setTeam] = useState({matches: []});
  const { MatchPage } = useParams();
 
  return (
    <div className="MatchPage">
        <h1>Match page</h1>
    </div>
  );
}