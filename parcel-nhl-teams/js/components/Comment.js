export default function Comment(comment) {
    return `
    <p class="single-comment__content">${comment.content}</p>

    <section class="edit__comment">
        <h3>Edit This Comment</h3>
        <input type="text" class="edit__comment--content" placeholder="${comment.content}">
        <button class="edit__comment--submit" id="${comment.id}">Replace Comment</button>
    </section> 

    <section class="delete__comment">
        <button class="delete__team--comment" id="${comment.id}">Delete Comment</button>
    </section>

    `
}