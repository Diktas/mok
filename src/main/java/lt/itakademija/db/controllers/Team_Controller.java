package lt.itakademija.db.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.db.entities.Team_Entity;
import lt.itakademija.db.serveces.Team_Service;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/team")
public class Team_Controller {
	
	@Autowired
	private Team_Service service;

	@GetMapping
	public List<Team_Entity> findAll() {
		return service.findAll();
	}

	@PostMapping
	public Team_Entity createOrUpdateTeam(@RequestBody Team_Entity t) {
		return service.saveOrUpdate(t);
	}

	@DeleteMapping(value = "/{id}")
	public void deleteById(@PathVariable("id") Long id) {
		service.deleteById(id);
	}

	@GetMapping(value = "/{id}")
	public Team_Entity findById(@PathVariable("id") Long id) {
		return service.findById(id);
	}

}
