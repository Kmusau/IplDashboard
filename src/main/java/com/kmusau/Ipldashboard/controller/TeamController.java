package com.kmusau.Ipldashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.kmusau.Ipldashboard.model.Team;
import com.kmusau.Ipldashboard.repositories.MatchRepository;
import com.kmusau.Ipldashboard.repositories.TeamRepository;

@RestController
public class TeamController {
	
	private TeamRepository teamRepository; 
	
	@Autowired
	private MatchRepository matchRepository;
	
	public TeamController(TeamRepository teamRepository) {
		this.teamRepository = teamRepository;
	}



	@GetMapping("/team/{teamName}")
	public Team getTeam(@PathVariable String teamName) {
		Team team = this.teamRepository.findByTeamName(teamName);
		team.setMatches(matchRepository.findLatestMatchesbyTeam(teamName, 4));
		
		return team;
	}

}
