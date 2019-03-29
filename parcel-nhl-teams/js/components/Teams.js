export default function Teams(teams) {
  return `
    <ul class="grid-list">
    ${teams.map(team => {
      return `
        <li class="grid-list__item">
          <div class="grid-item-container">
            <img class="team-logo" src="${team.logo}" alt="Team Logo">
        </div>
      </li>
    `;
  }).join('')}
  </ul>
  `
  }