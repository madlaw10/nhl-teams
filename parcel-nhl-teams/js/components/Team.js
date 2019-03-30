export default function Team(team) {
    return `
    <h2 class="division__name">${team.location} ${team.name}</h2>
    <img class="team__logo" src="${team.logo}">
    `
}