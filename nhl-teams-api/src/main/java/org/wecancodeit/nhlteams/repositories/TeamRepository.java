package org.wecancodeit.nhlteams.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.nhlteams.models.Team;

@Repository
public interface TeamRepository extends CrudRepository<Team, Long>{
	
	

}
