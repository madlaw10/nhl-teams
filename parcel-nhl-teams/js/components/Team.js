import Comments from './Comments'

export default function Team(team) {
    return `
    <h2 class="single-team__name">${team.location} ${team.name}</h2>
    <img class="single-team__logo" src="${team.logo}">

    ${Comments(team.comments)}

    <section class="add__comment">
        <h3>Add A Comment</h3>
        <input type="text" class="add__team--comment" placeholder="Type your comment here">
        <input type="hidden" class="add__team--team" value="${team.id}"> 
        <button class="add__comment--submit">Add Comment</button>
    </section> 
    `
}