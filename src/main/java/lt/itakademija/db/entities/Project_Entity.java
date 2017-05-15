package lt.itakademija.db.entities;

import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Project")
public class Project_Entity {
	
	// -------------- Table Columns --------------- //

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	@Column(name = "team_id")
	private Long team_id;

	@Column(name = "project_title")
	private String project_title;

	@Column(name = "budget")
	private BigDecimal budget;

	@Column(name = "dead_line")
	private Date dead_line;

	@Column(name = "description")
	private String description;
	
	// -------------- Getters and Setters --------------- //

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getTeam_id() {
		return team_id;
	}

	public void setTeam_id(Long team_id) {
		this.team_id = team_id;
	}

	public String getProject_title() {
		return project_title;
	}

	public void setProject_title(String project_title) {
		this.project_title = project_title;
	}

	public BigDecimal getBudget() {
		return budget;
	}

	public void setBudget(BigDecimal budget) {
		this.budget = budget;
	}

	public Date getDead_line() {
		return dead_line;
	}

	public void setDead_line(Date dead_line) {
		this.dead_line = dead_line;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	

}
