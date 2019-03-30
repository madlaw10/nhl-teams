import Teams from './Teams'
export default function Divisions(divisions) {
    return `
      <ul class="list">
      ${divisions.map(division => {
        return `
          <li class="list__item">
            <div class="item-container">
              <h3 class="division__name" id="${division.id}">${division.name}</h3>
              ${Teams(division.teams)}
          </div>
        </li>
      `;
    }).join('')}
    </ul>
    `
    }