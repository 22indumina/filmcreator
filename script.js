/* General Body and Layout Styles */
body {
    background-color: #121212;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    display: flex;
    justify-content: center;
}

.website-wrapper {
    display: flex;
    max-width: 1400px;
    width: 100%;
    padding: 2rem;
}

.main-content {
    flex: 3;
    padding-right: 2rem;
}

/* Movie Player Styles */
.movie-player-section {
    margin-bottom: 2rem;
}

.video-player-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    background-color: #000;
    border-radius: 8px;
}

.video-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

/* Movie Details Styles */
.movie-details-section {
    background-color: #1e1e1e;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
}

.movie-title {
    font-size: 2.5rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
}

.movie-meta {
    margin-bottom: 1rem;
    color: #a0a0a0;
}

.release-year::after {
    content: '•';
    margin: 0 0.5rem;
}

.movie-description {
    line-height: 1.6;
}

/* Comments Section Styles */
.comments-section {
    background-color: #1e1e1e;
    padding: 1.5rem;
    border-radius: 8px;
}

.section-title {
    margin-top: 0;
    border-bottom: 1px solid #333;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
}

.comment {
    margin-bottom: 1.5rem;
}

.comment:last-child {
    margin-bottom: 0;
}

.comment-author {
    font-weight: bold;
    margin-bottom: 0.25rem;
}

.comment-text {
    margin: 0;
    color: #dcdcdc;
}

/* Sidebar Styles */
.sidebar {
    flex: 1;
    background-color: #1e1e1e;
    padding: 1.5rem;
    border-radius: 8px;
    height: fit-content;
}

.related-movies-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.related-movie-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.related-movie-item:last-child {
    margin-bottom: 0;
}

.related-movie-thumbnail {
    width: 80px;
    height: 120px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 1rem;
}

.related-movie-title {
    font-weight: bold;
}
