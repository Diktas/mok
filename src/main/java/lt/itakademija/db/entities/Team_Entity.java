package lt.itakademija.db.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Team")
public class Team_Entity {

	// -------------- Table Columns --------------- //

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	@Column(name = "team_title")
	private String team_title;

	@Column(name = "description")
	private String description;

	// -------------- Relationships --------------- //

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "TEAM_ID")
	private List<Project_Entity> project_entity;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "TEAM_ID")
	private List<Team_Members_Entity> team_members_entity;

	// -------------- Getters and Setters --------------- //

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTeam_title() {
		return team_title;
	}

	public void setTeam_title(String team_title) {
		this.team_title = team_title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Project_Entity> getProject() {
		return project_entity;
	}

	public void setProject(List<Project_Entity> project_entity) {
		this.project_entity = project_entity;
	}

	public List<Team_Members_Entity> getTeam_members_entity() {
		return team_members_entity;
	}

	public void setTeam_members(List<Team_Members_Entity> team_members_entity) {
		this.team_members_entity = team_members_entity;
	}

}
