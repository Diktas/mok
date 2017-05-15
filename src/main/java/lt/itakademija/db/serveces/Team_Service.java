package lt.itakademija.db.serveces;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.db.entities.Team_Entity;
import lt.itakademija.db.repositories.Team_Repository;

@Service
@Transactional
public class Team_Service {
	
	@Autowired
    private Team_Repository repository;
	
	public List<Team_Entity> findAll() {
        return repository.findAll();
    }

	public Team_Entity saveOrUpdate(Team_Entity team) {
        repository.save(team);
        return team;
    }

    public void deleteById(Long id) {
        repository.delete(id);
    }

    public Team_Entity findById(Long id) {
        return repository.findOne(id);
    }

}
