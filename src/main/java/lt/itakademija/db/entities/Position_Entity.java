package lt.itakademija.db.entities;

import java.math.BigDecimal;
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
@Table(name = "Position")
public class Position_Entity {

	// -------------- Table Columns --------------- //

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	@Column(name = "position_title")
	private String position_title;

	@Column(name = "earnings")
	private BigDecimal earnings;

	@Column(name = "bonus")
	private BigDecimal bonus;

	// -------------- Relationships --------------- //

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "POSITION_ID")
	private List<Team_Members_Entity> team_members_entity;

	// -------------- Relationships --------------- //

	// @OneToOne(cascade = CascadeType.ALL)
	// @PrimaryKeyJoinColumn
	// private Team_Members_Entity team_members_entity;

	// ------------ Getters and Setters ----------- //

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPosition_title() {
		return position_title;
	}

	public void setPosition_title(String position_title) {
		this.position_title = position_title;
	}

	public BigDecimal getEarnings() {
		return earnings;
	}

	public void setEarnings(BigDecimal earnings) {
		this.earnings = earnings;
	}

	public BigDecimal getBonus() {
		return bonus;
	}

	public void setBonus(BigDecimal bonus) {
		this.bonus = bonus;
	}

	public List<Team_Members_Entity> getTeam_members_entity() {
		return team_members_entity;
	}

	public void setTeam_members_entity(List<Team_Members_Entity> team_members_entity) {
		this.team_members_entity = team_members_entity;
	}
}
