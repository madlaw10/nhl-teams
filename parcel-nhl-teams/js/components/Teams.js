export default function Teams(teams) {
  return `
    <ul class="flex-list">
    ${teams.map(team => {
      return `
        <li class="flex-list__item">
          <div class="flex-item-container">
            <img id="${team.id}" class="team__logo" src="${team.logo}" alt="Team Logo">
        </div>
      </li>
    `;
  }).join('')}
  </ul>
  `
  }