export default function Team(team) {
    return `
    <h2 class="single-team__name">${team.location} ${team.name}</h2>
    <img class="single-team__logo" src="${team.logo}">
    <section class="add__comment">
        <h3>Add Team Comment</h3>
        <input type="select" class="add__team-id" placeholder="team name">
            <input type="text" class="add__team--comment" placeholder="comment">
            <button class="add__comment--submit clickable">Add Comment</button>
        </section> 
    `
}