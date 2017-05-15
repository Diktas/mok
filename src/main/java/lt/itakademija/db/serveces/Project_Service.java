package lt.itakademija.db.serveces;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.db.entities.Project_Entity;
import lt.itakademija.db.repositories.Project_Repository;

@Service
@Transactional
public class Project_Service {
	
	@Autowired
    private Project_Repository repository;
	
	public List<Project_Entity> findAll() {
        return repository.findAll();
    }

	public Project_Entity saveOrUpdate(Project_Entity project) {
        repository.save(project);
        return project;
    }

    public void deleteById(Long id) {
        repository.delete(id);
    }

    public Project_Entity findById(Long id) {
        return repository.findOne(id);
    }

	public List<Project_Entity> findByTitle(String project_title) {
		return repository.findByTitle(project_title);
	}
}
