import Divisions from './Divisions'

export default function Conferences(conferences) {
    return `
      <ul class="list">
      ${conferences.map(conference => {
        return `
          <li class="list__item">
            <div class="item-container">
              <h2 class="conference__name" id="${conference.id}">${conference.name}</h2>
              ${Divisions(conference.divisions)}
          </div>
        </li>
      `;
    }).join('')}
    </ul>
    `
    }