package org.wecancodeit.nhlteams;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Team {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String location;
	@Lob
	private String logo;

	public Team() {
	}

	public Team(String name, String location, String logo) {
		this.name = name;
		this.location = location;
		this.logo = logo;
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

}
