package com.kmusau.Ipldashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

import com.kmusau.Ipldashboard.model.Match;
import com.kmusau.Ipldashboard.model.Team;
import com.kmusau.Ipldashboard.repositories.MatchRepository;
import com.kmusau.Ipldashboard.repositories.TeamRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TeamController {
	
	private TeamRepository teamRepository; 
	
	@Autowired
	private MatchRepository matchRepository;
	
	public TeamController(TeamRepository teamRepository) {
		this.teamRepository = teamRepository;
	}


	@GetMapping("/team")
	public Iterable<Team>getAllTeams(){
		return this.teamRepository.findAll();
	}

	@GetMapping("/team/{teamName}")
	public Team getTeam(@PathVariable String teamName) {
		Team team = this.teamRepository.findByTeamName(teamName);
		team.setMatches(matchRepository.findLatestMatchesbyTeam(teamName, 4));
		
		return team;
	}

	@GetMapping("/team/{teamName}/matches")
	public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year){
		LocalDate startDate = LocalDate.of(year, 1, 1);
		LocalDate endDate = LocalDate.of(year + 1, 1, 1);
		return this.matchRepository.getMatchesByTeamBetweenDates(
				teamName, startDate, endDate
			);
	}

}
