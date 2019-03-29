package org.wecancodeit.nhlteams.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.nhlteams.models.Division;

@Repository
public interface DivisionRepository extends CrudRepository<Division, Long>{

}
