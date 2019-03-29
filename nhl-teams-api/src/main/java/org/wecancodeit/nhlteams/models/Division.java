package org.wecancodeit.nhlteams.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Division {
	@Id
	@GeneratedValue
	private Long id;
	private String name;

	@ManyToOne
	@JsonIgnore
	private Conference conference;
	
	@OneToMany(mappedBy="division")
	private Collection<Team> teams;
	
	public Division() {
	}
	
	
	public Division(String name, Conference conference) {
		super();
		this.name = name;
		this.teams = new ArrayList<Team>();
		this.conference = conference;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public Collection<Team> getTeams() {
		return teams;
	}

	public Conference getConference() {
		return conference;
	}
	
	

}
