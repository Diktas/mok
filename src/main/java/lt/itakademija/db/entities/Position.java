package lt.itakademija.db.entities;

import java.math.BigDecimal;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "Position")
public class Position {

	// -------------- Table Columns --------------- //

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	@Column(name = "member_id")
	private Long member_id;

	@Column(name = "position_title")
	private String position_title;

	@Column(name = "earnings")
	private BigDecimal earnings;

	@Column(name = "bonus")
	private BigDecimal bonus;

	// -------------- Relationships --------------- //

	@OneToOne(cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private Team_Members team_members;

	// -------------- Getters and Setters --------------- //

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getMember_id() {
		return member_id;
	}

	public void setMember_id(Long member_id) {
		this.member_id = member_id;
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

	public Team_Members getTeam_members() {
		return team_members;
	}

	public void setTeam_members(Team_Members team_members) {
		this.team_members = team_members;
	}

}
