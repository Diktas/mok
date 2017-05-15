package lt.itakademija.db.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.itakademija.db.entities.Team_Entity;

public interface Team_Repository extends JpaRepository<Team_Entity, Long> {

}
