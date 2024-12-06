// Add like functionality
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        const likeCount = button.querySelector('.like-count');
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
});

// Toggle comment section
document.querySelectorAll('.comment-btn').forEach(button => {
    button.addEventListener('click', () => {
        const commentSection = button.closest('.recipe-card').querySelector('.comments-section');
        commentSection.classList.toggle('active');
    });
});

// Post a comment
document.querySelectorAll('.post-comment').forEach(button => {
    button.addEventListener('click', () => {
        const commentInput = button.closest('.comments-section').querySelector('.comment-input');
        const commentList = button.closest('.comments-section').querySelector('.comments-list');

        if (commentInput.value.trim() !== '') {
            const newComment = document.createElement('li');
            newComment.textContent = commentInput.value;
            commentList.appendChild(newComment);
            commentInput.value = '';
        }
    });
});
