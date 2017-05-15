package lt.itakademija.db.serveces;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.db.entities.Position_Entity;
import lt.itakademija.db.repositories.Position_Repository;

@Service
@Transactional
public class Position_Service {
	
	@Autowired
    private Position_Repository repository;
	
	public List<Position_Entity> findAll() {
        return repository.findAll();
    }

	public Position_Entity saveOrUpdate(Position_Entity position) {
        repository.save(position);
        return position;
    }

    public void deleteById(Long id) {
        repository.delete(id);
    }

    public Position_Entity findById(Long id) {
        return repository.findOne(id);
    }

}
