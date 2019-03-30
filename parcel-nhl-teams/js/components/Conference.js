import Divisions from './Divisions'

export default function Conference(conference) {
    return `
    <h2 class="conference__name">${conference.name}</h2>
    <ul class="conference__divisions">
        <li class="conference__division>
            ${Divisions(conference.divisions)}
        </li>
    </ul>
    `
}