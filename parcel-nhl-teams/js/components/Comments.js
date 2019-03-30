export default function Comments(comments) {
    return `
      <ul class="list">
      ${comments.map(comment => {
        return `
          <li class="list__item">
            <div class="item-container">
              <p class="comment__content" id="${comment.id}">${comment.content}</p>
          </div>
        </li>
      `;
    }).join('')}
    </ul>
    `
    }