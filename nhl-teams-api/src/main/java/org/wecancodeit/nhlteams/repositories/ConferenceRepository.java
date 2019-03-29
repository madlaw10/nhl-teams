package org.wecancodeit.nhlteams.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.nhlteams.models.Conference;

@Repository
public interface ConferenceRepository extends CrudRepository<Conference, Long>{

}
