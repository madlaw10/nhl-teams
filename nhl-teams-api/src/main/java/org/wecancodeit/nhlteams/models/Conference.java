package org.wecancodeit.nhlteams.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Conference {
	
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	
	@OneToMany(mappedBy = "conference")
	private Collection<Division> divisions;

	public Conference(){
		}
		
	public Conference(String name) {
		this.name = name;
		this.divisions = new ArrayList<Division>();
	}

	public Collection<Division> getDivisions() {
		return divisions;
	}
	
	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	

}
