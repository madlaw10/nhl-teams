package org.wecancodeit.nhlteams.repositories;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.nhlteams.models.Comment;
import org.wecancodeit.nhlteams.models.Conference;
import org.wecancodeit.nhlteams.models.Division;
import org.wecancodeit.nhlteams.models.Team;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class CommentTest {
	
	@Resource
	private TestEntityManager entityManager;
	
	@Resource 
	private ConferenceRepository conferenceRepo;
	@Resource 
	private DivisionRepository divisionRepo;
	@Resource 
	private TeamRepository teamRepo;
	@Resource
	private CommentRepository commentRepo;
	
	@Test
	public void shouldLoadCommentByName() {
		Conference conference = conferenceRepo.save(new Conference("Conference"));
		Division division = divisionRepo.save(new Division("Division", conference));
		Team team = teamRepo.save(new Team("Team Name", "Team Location", "Team Logo", division));
		Comment comment = commentRepo.save(new Comment("Content", team));
		
		entityManager.persist(comment);
		entityManager.flush();
		entityManager.clear();
		
		Comment commentFromDatabase = commentRepo.findByContent("Content");
		
		assertThat(commentFromDatabase.getContent(), is("Content"));		
	}

}
