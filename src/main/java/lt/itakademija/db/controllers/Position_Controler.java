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

import lt.itakademija.db.entities.Position_Entity;
import lt.itakademija.db.serveces.Position_Service;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/position")
public class Position_Controler {
	
	@Autowired
	private Position_Service service;

	@GetMapping
	public List<Position_Entity> findAll() {
		return service.findAll();
	}

	@PostMapping
	public Position_Entity createOrUpdatePosition(@RequestBody Position_Entity p) {
		return service.saveOrUpdate(p);
	}

	@DeleteMapping(value = "/{id}")
	public void deleteById(@PathVariable("id") Long id) {
		service.deleteById(id);
	}

	@GetMapping(value = "/{id}")
	public Position_Entity findById(@PathVariable("id") Long id) {
		return service.findById(id);
	}

}
