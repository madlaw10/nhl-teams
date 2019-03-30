package org.wecancodeit.nhlteams.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.nhlteams.models.Comment;
import org.wecancodeit.nhlteams.models.Team;
import org.wecancodeit.nhlteams.repositories.CommentRepository;
import org.wecancodeit.nhlteams.repositories.TeamRepository;

@CrossOrigin
@RestController
@RequestMapping("/comments")
public class CommentController {
	
	@Resource
	CommentRepository commentRepo;
	@Resource
	TeamRepository teamRepo;
	
	@GetMapping("")
	public Collection<Comment> getComments() {
		return (Collection<Comment>)commentRepo.findAll();
	}

	@GetMapping("/{id}")
	public Comment viewSingleComment(@PathVariable Long id) {
		return commentRepo.findById(id).get();
	}
	
	@PostMapping("/add")
	public Team addComment(@RequestBody String body) throws JSONException {
		JSONObject newComment = new JSONObject(body);
		String content = newComment.getString("commentContent");
		Team team = teamRepo.findById(Long.parseLong(newComment.getString("teamId"))).get();
		commentRepo.save(new Comment(content, team));
		return team;
	}
	
	@PostMapping("/edit/{id}")
	public Comment editComment(@PathVariable Long id, @RequestBody String body) throws JSONException {
		Comment commentToReplace = commentRepo.findById(id).get();
		JSONObject replaceComment = new JSONObject(body);
		String newContent = replaceComment.getString("newContent");
		commentToReplace.editContent(newContent);
		commentRepo.save(commentToReplace);
		return commentToReplace;
	}
	
	@DeleteMapping("/delete/{id}")
	public Team deleteComment(@PathVariable Long id) {
		Comment commentToDelete = commentRepo.findById(id).get();
		Team team = commentToDelete.getTeam();
		commentRepo.delete(commentToDelete);
		return team;
	}

}
