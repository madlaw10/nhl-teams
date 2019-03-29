package org.wecancodeit.nhlteams;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
