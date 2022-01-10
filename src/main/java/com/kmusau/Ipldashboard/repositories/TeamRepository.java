package com.kmusau.Ipldashboard.repositories;

import org.springframework.data.repository.CrudRepository;

import com.kmusau.Ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
	
	Team findByTeamName(String teamName);

}
