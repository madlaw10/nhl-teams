package org.wecancodeit.nhlteams.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.nhlteams.models.Division;
import org.wecancodeit.nhlteams.repositories.DivisionRepository;

@CrossOrigin
@RestController
@RequestMapping("/divisions")
public class DivisionController {
	
	@Resource
	DivisionRepository divisionRepo;
	
	@GetMapping("")
	public Collection<Division> getDivisions() {
		return (Collection<Division>)divisionRepo.findAll();
	}

}
