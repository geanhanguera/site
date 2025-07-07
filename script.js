// This file can be used for future interactivity.
// For now, smooth scrolling is handled by CSS's `scroll-behavior: smooth;`.
console.log("Bem-vindo ao site do Grupo Escoteiro Anhanguera 96!");

document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const commentText = commentInput.value.trim();

        if (commentText) {
            addComment(commentText);
            commentInput.value = '';
        }
    });

    function addComment(text) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        
        const commentParagraph = document.createElement('p');
        commentParagraph.textContent = text;
        
        commentDiv.appendChild(commentParagraph);
        
        // Add new comments to the top
        commentsList.prepend(commentDiv);
    }
});