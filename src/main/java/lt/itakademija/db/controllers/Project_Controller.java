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

import lt.itakademija.db.entities.Project_Entity;
import lt.itakademija.db.serveces.Project_Service;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/project")
public class Project_Controller {

	// -------------- Komandos postmane
	// -------------------------------------------------
	// ------ GET ------
	// localhost:8080/api/project === iskviecia visus irasus Preject lenteleje
	// localhost:8080/api/project/1 === visi irasai pagal ID
	// localhost:8080/api/project/title/PROJECT-02  ===  irasai pagal "project_title" 
	// ------ DELETE -----
	// localhost:8080/api/project/1 === irasai pagal ID istrinti. istrinama visa
	// eilute
	// ------ POST -----
	// Sukuria irasa.
	// P.S. ID generuojasi automatiskai. Nurodzius "id" irasai pagal ta id
	// updatinasi
	// P.S. "team_id" turi sutapti su jau sukurto Team ID nes yra sarysiai
	// {
	// "id": 5,
	// "team_id": 1,
	// "project_title": "PROJECT-02",
	// "budget": 0,
	// "dead_line": 1502139600000,
	// "description": "description2"
	// }
	// -----------------------------------------------------------------------------------

	@Autowired
	private Project_Service service;

	@GetMapping
	public List<Project_Entity> findAll() {
		return service.findAll();
	}

	@PostMapping
	public Project_Entity createOrUpdateProject(@RequestBody Project_Entity p) {
		return service.saveOrUpdate(p);
	}

	@DeleteMapping(value = "/{id}")
	public void deleteById(@PathVariable("id") Long id) {
		service.deleteById(id);
	}

	@GetMapping(value = "/{id}")
	public Project_Entity findById(@PathVariable("id") Long id) {
		return service.findById(id);
	}

	@GetMapping(value = "/title/{project_title}")
	public List<Project_Entity> findByTitle(@PathVariable("project_title") String project_title) {
		return service.findByTitle(project_title);
	}


}
