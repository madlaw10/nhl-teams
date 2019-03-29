package org.wecancodeit.nhlteams.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Team {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String location;
	@Lob
	private String logo;
	
	@ManyToOne
	@JsonIgnore
	private Division division;

	public Team() {
	}

	public Team(String name, String location, String logo, Division division) {
		this.name = name;
		this.location = location;
		this.logo = logo;
		this.division= division;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getLocation() {
		return location;
	}

	public String getLogo() {
		return logo;
	}

	public Division getDivision() {
		return division;
	}
	

}
