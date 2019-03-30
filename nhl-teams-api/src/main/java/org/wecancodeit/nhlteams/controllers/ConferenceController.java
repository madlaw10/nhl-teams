package org.wecancodeit.nhlteams.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.nhlteams.models.Conference;
import org.wecancodeit.nhlteams.repositories.ConferenceRepository;

@CrossOrigin
@RestController
@RequestMapping("/conferences")
public class ConferenceController {
	
	@Resource
	ConferenceRepository conferenceRepo;
	
	@GetMapping("")
	public Collection<Conference> getConferences() {
		return (Collection<Conference>)conferenceRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Conference viewSingleConference(@PathVariable Long id) {
		return conferenceRepo.findById(id).get();
	}

}
