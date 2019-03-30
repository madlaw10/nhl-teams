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
		Division atlanticDivision = divisionRepo.save(new Division("Atlantic", easternConference));
		Conference westernConference = conferenceRepo.save(new Conference("Western"));
		Division centralDivision = divisionRepo.save(new Division("Central", westernConference));
		Division pacificDivision = divisionRepo.save(new Division("Pacific", westernConference));
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
		teamRepo.save(new Team(
				"Blackhawks", 
				"Chicago", 
				"https://pbs.twimg.com/profile_images/1110215057579958273/uDJCParl_400x400.png",
				centralDivision
				));
		teamRepo.save(new Team(
				"Avalanche", 
				"Colorado", 
				"https://pbs.twimg.com/profile_images/833561893528752129/yzeYY0Yz_400x400.jpg",
				centralDivision
				));
		teamRepo.save(new Team(
				"Stars", 
				"Dallas", 
				"https://pbs.twimg.com/profile_images/1110351450323013632/-KJmATmz_400x400.png",
				centralDivision
				));
		teamRepo.save(new Team(
				"Stars", 
				"Dallas", 
				"https://pbs.twimg.com/profile_images/1110351450323013632/-KJmATmz_400x400.png",
				centralDivision
				));
		teamRepo.save(new Team(
				"Wild", 
				"Minnesota", 
				"https://pbs.twimg.com/profile_images/709718722039173120/xKcLQnVU_400x400.jpg",
				centralDivision
				));
		teamRepo.save(new Team(
				"Predators", 
				"Nashville", 
				"https://pbs.twimg.com/profile_images/773586287911661568/KeeZkTah_400x400.jpg",
				centralDivision
				));
		teamRepo.save(new Team(
				"Blues", 
				"St. Louis", 
				"https://pbs.twimg.com/profile_images/1109824668238786560/1TRr3GLN_400x400.jpg",
				centralDivision
				));
		teamRepo.save(new Team(
				"Jets", 
				"Winnipeg", 
				"https://pbs.twimg.com/profile_images/592786657042145280/XTOAsRiu_400x400.jpg",
				centralDivision
				));
		teamRepo.save(new Team(
				"Ducks", 
				"Anaheim", 
				"https://pbs.twimg.com/profile_images/468803017098022912/hxPA5sLr_400x400.jpeg",
				pacificDivision
				));
		teamRepo.save(new Team(
				"Coyotes", 
				"Arizona", 
				"https://pbs.twimg.com/profile_images/468803017098022912/hxPA5sLr_400x400.jpeg",
				pacificDivision
				));
		teamRepo.save(new Team(
				"Flames", 
				"Calgary", 
				"https://images-na.ssl-images-amazon.com/images/I/61bVy63ia8L._AC_SY400_.jpg",
				pacificDivision
				));
		teamRepo.save(new Team(
				"Oilers", 
				"Edmonton", 
				"https://pbs.twimg.com/profile_images/1064912822755221504/_7Ac4imT_400x400.jpg",
				pacificDivision
				));
		teamRepo.save(new Team(
				"Kings", 
				"Los Angeles", 
				"https://simplegourmetkitchen.com/wp-content/uploads/2018/10/Untitled-design20-1.png",
				pacificDivision
				));
		teamRepo.save(new Team(
				"Sharks", 
				"San Jose", 
				"https://pbs.twimg.com/profile_images/1111671338538696704/uPg1DkKT_400x400.png",
				pacificDivision
				));
		teamRepo.save(new Team(
				"Canucks", 
				"Vancouver", 
				"https://pbs.twimg.com/profile_images/476078388755431424/x6jrTmp8_400x400.jpeg",
				pacificDivision
				));
		teamRepo.save(new Team(
				"Knights", 
				"Vegas", 
				"https://pbs.twimg.com/profile_images/1066744808159404032/Vrns0dZF_400x400.jpg",
				pacificDivision
				));
	}

}
