package org.wecancodeit.nhlteams;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.nhlteams.models.Conference;
import org.wecancodeit.nhlteams.models.Division;
import org.wecancodeit.nhlteams.models.Team;
import org.wecancodeit.nhlteams.repositories.ConferenceRepository;
import org.wecancodeit.nhlteams.repositories.DivisionRepository;
import org.wecancodeit.nhlteams.repositories.TeamRepository;

@Service
public class Initializer implements CommandLineRunner {

	@Resource
	ConferenceRepository conferenceRepo;
	@Resource
	DivisionRepository divisionRepo;	
	@Resource
	TeamRepository teamRepo;
	
	@Override
	public void run(String... args) throws Exception {
		Conference easternConference = conferenceRepo.save(new Conference("Eastern"));
		Division metropolitanDivision = divisionRepo.save(new Division("Metropolitan", easternConference));
		teamRepo.save(new Team(
				"Blue Jackets", 
				"Columbus", 
				"https://pbs.twimg.com/profile_images/1101585780311580678/Co9-3uMV_400x400.png",
				metropolitanDivision
				));
		teamRepo.save(new Team(
				"Capitals", 
				"Washington", 
				"https://pbs.twimg.com/profile_images/1079962545073594369/Q2SCeIOl_400x400.jpg",
				metropolitanDivision
				));
		teamRepo.save(new Team(
				"Islanders", 
				"New York",
				"https://pbs.twimg.com/profile_images/1104755864869761024/B4ha3vhm_400x400.jpg",
				metropolitanDivision
				));
		teamRepo.save(new Team(
				"Penguins", 
				"Pittsburgh",
				"https://pbs.twimg.com/profile_images/1107626371709353986/fi6r_yvH_400x400.png",
				metropolitanDivision
				));
		teamRepo.save(new Team(
				"Flyers", 
				"Philadelphia",
				"https://pbs.twimg.com/profile_images/1107665820845514752/Ulis3sMq_400x400.png",
				metropolitanDivision
				));
		teamRepo.save(new Team(
				"Rangers", 
				"New York",
				"https://pbs.twimg.com/profile_images/852448939928416257/1g7ZK8Dd_400x400.jpg",
				metropolitanDivision
				));
		teamRepo.save(new Team(
				"Devils", 
				"New Jersey",
				"https://pbs.twimg.com/profile_images/1093017007522484226/PBEp4L40_400x400.jpg",
				metropolitanDivision
				));
		teamRepo.save(new Team(
				"Hurricanes", 
				"Carolina",
				"https://pbs.twimg.com/profile_images/1110169375364001793/Msnh515L_400x400.jpg",
				metropolitanDivision
				));
	}

}
