import Teams from './Teams'

export default function Division(division) {
    return `
    <h2 class="division__name">${division.name}</h2>
    ${Teams(division.teams)}
    `
}