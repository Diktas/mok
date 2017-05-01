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
public class Team {

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
	private List<Project> project;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "TEAM_ID")
	private List<Team_Members> team_members;

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

	public List<Project> getProject() {
		return project;
	}

	public void setProject(List<Project> project) {
		this.project = project;
	}

	public List<Team_Members> getTeam_members() {
		return team_members;
	}

	public void setTeam_members(List<Team_Members> team_members) {
		this.team_members = team_members;
	}

}
