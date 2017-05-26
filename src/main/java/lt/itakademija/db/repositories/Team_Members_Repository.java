package lt.itakademija.db.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import lt.itakademija.db.entities.Team_Members_Entity;

public interface Team_Members_Repository extends JpaRepository<Team_Members_Entity, Long>{
        
    @Query("SELECT m FROM Team_Members_Entity m where m.team_id=:team_id")
    public List<Team_Members_Entity> findByTeam_id(@Param("team_id") Long teamId);

}
