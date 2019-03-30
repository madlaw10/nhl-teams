package org.wecancodeit.nhlteams.repositories;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.nhlteams.models.Conference;
import org.wecancodeit.nhlteams.models.Division;
import org.wecancodeit.nhlteams.models.Team;
import org.wecancodeit.nhlteams.repositories.ConferenceRepository;
import org.wecancodeit.nhlteams.repositories.DivisionRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class TeamTest {
	
	@Resource
	private TestEntityManager entityManager;
	
	@Resource 
	private ConferenceRepository conferenceRepo;
	@Resource 
	private DivisionRepository divisionRepo;
	@Resource 
	private TeamRepository teamRepo;
	
	@Test
	public void shouldLoadConferenceByName() {
		Conference conference = conferenceRepo.save(new Conference("Conference"));
		Division division = divisionRepo.save(new Division("Division", conference));
		Team team = teamRepo.save(new Team("Team Name", "Team Location", "Team Logo", division));
		
		entityManager.persist(team);
		entityManager.flush();
		entityManager.clear();
		
		Team teamFromDatabase = teamRepo.findByName("Team Name");
		
		assertThat(teamFromDatabase.getName(), is("Team Name"));		
	}

}
