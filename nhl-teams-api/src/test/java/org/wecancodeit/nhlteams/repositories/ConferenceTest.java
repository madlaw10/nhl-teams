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
import org.wecancodeit.nhlteams.repositories.ConferenceRepository;


@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class ConferenceTest {
	
	@Resource
	private TestEntityManager entityManager;
	
	@Resource 
	private ConferenceRepository conferenceRepo;
	
	@Test
	public void shouldLoadConferenceByName() {
		Conference conference = conferenceRepo.save(new Conference("Conference"));
		
		entityManager.persist(conference);
		entityManager.flush();
		entityManager.clear();
		
		Conference conferenceFromDatabase = conferenceRepo.findByName("Conference");
		
		assertThat(conferenceFromDatabase.getName(), is("Conference"));		
	}

}
