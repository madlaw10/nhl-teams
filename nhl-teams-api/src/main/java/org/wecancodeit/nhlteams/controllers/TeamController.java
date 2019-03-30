package org.wecancodeit.nhlteams.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.nhlteams.models.Team;
import org.wecancodeit.nhlteams.repositories.TeamRepository;

@CrossOrigin
@RestController
@RequestMapping("/teams")
public class TeamController {
	
	@Resource
	TeamRepository teamRepo;
	
	@GetMapping("")
	public Collection<Team> getTeams() {
		return (Collection<Team>)teamRepo.findAll();
	}

	@GetMapping("/{id}")
	public Team viewSingleTeam(@PathVariable Long id) {
		return teamRepo.findById(id).get();
	}
	
}
