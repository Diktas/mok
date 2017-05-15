package lt.itakademija.db.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import lt.itakademija.db.entities.Project_Entity;

public interface Project_Repository extends JpaRepository<Project_Entity, Long> {

	@Query("SELECT p FROM Project_Entity p where p.project_title=:project_title")
	public List<Project_Entity> findByTitle(@Param("project_title") String title);

}
