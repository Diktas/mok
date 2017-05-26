package lt.itakademija.db.serveces;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.db.entities.Team_Members_Entity;
import lt.itakademija.db.repositories.Team_Members_Repository;

@Service
@Transactional
public class Team_Members_Service {
	
	@Autowired
    private Team_Members_Repository repository;
	
	public List<Team_Members_Entity> findAll() {
        return repository.findAll();
    }

	public Team_Members_Entity saveOrUpdate(Team_Members_Entity team_members) {
        repository.save(team_members);
        return team_members;
    }

    public void deleteById(Long id) {
        repository.delete(id);
    }

    public Team_Members_Entity findById(Long id) {
        return repository.findOne(id);
    }
    
    public List<Team_Members_Entity> findByTeamId(Long teamId) {
        return repository.findByTeam_id(teamId);
    }

}
