package org.wecancodeit.nhlteams.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Comment {
	
	@Id
	@GeneratedValue
	private Long id;
	@Lob
	private String content;
	@ManyToOne
	@JsonIgnore
	private Team team;
	
	public Comment() {
	}
	
	public Comment(String content, Team team) {
		this.content = content;
		this.team = team;
	}
	public Long getId() {
		return id;
	}
	public String getContent() {
		return content;
	}
	public Team getTeam() {
		return team;
	}

	public void editContent(String newContent) {
		this.content = newContent;
	}
	
}
