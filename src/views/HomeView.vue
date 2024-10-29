<template>
<div :class="['home-container', { 'results-view': videos.length > 0 }]">
    <div class="search-section">
        <div v-if="videos.length === 0">
            <h1 class="welcome-text green">Welcome!</h1>
            <h3>This project can search and play videos from TikTok.</h3>
        </div>
        <SearchBar @search="handleSearch" />
    </div>

    <div v-if="loading && videos.length === 0" class="loading-view">
        <div class="spinner"></div>
    </div>

    <VideoList v-else :videos="videos" @play="fetchVideoUrl" @loadMore="loadMoreVideos" :isFetchingMore="isFetchingMore" />

    <!-- Full-Screen Loading Overlay for Video Fetching -->
    <div v-if="fetchingVideo" class="overlay-loading">
        <div class="spinner"></div>
    </div>

    <!-- Video Player Overlay -->
    <div v-if="selectedVideoUrl" class="video-player-overlay" @click.self="closePlayer">
        <VideoPlayer :videoUrl="selectedVideoUrl" />
    </div>
</div>
</template>

  
  
<script>
import SearchBar from "../components/SearchBar.vue";
import VideoList from "../components/VideoList.vue";
import VideoPlayer from "../components/VideoPlayer.vue";
import axios from "axios";

export default {
    components: {
        SearchBar,
        VideoList,
        VideoPlayer
    },
    data() {
        return {
            videos: [],
            loading: false,
            selectedVideoUrl: "",
            searchQuery: "",
            currentPage: 1,
            isFetchingMore: false,
            hasMore: true,
            fetchingVideo: false, // New state for showing loading overlay when fetching video
        };
    },
    methods: {
        async fetchVideos(query, page = 1) {
            if (!query) return;
            this.loading = page === 1;
            this.isFetchingMore = page > 1;

            try {
                const response = await axios.get(`http://localhost:8080/search/${query}?page=${page}`);
                const newVideos = response.data.videos;

                if (newVideos.length < 6) {
                    this.hasMore = false;
                }

                if (page === 1) {
                    this.videos = newVideos;
                } else {
                    this.videos = [...this.videos, ...newVideos];
                }
                this.currentPage = page;
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                this.loading = false;
                this.isFetchingMore = false;
            }
        },
        handleSearch(query) {
            this.searchQuery = query;
            this.currentPage = 1;
            this.hasMore = true;
            this.fetchVideos(this.searchQuery, this.currentPage);
        },
        loadMoreVideos() {
            if (this.hasMore && !this.isFetchingMore) {
                this.fetchVideos(this.searchQuery, this.currentPage + 1);
            }
        },
        async fetchVideoUrl(videoPageUrl) {
            this.fetchingVideo = true; // Show loading overlay
            try {
                const encodedUrl = encodeURIComponent(videoPageUrl);
                const response = await axios.get(`http://localhost:8080/get-video-url?url=${encodedUrl}`);
                this.selectedVideoUrl = response.data.videoUrl;
            } catch (error) {
                console.error("Error fetching video URL:", error);
            } finally {
                this.fetchingVideo = false; // Hide loading overlay
            }
        },
        closePlayer() {
            this.selectedVideoUrl = "";
        }
    }
};
</script>
  
  
<style scoped>
/* Centered Container */
.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #1c1c1c;
    color: #e0e0e0;
    overflow: hidden;
}

.search-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: margin 0.3s;
    margin-top: auto;
    margin-bottom: auto;
}

.welcome-text {
    font-size: 2.4rem;
    margin-bottom: 1rem;
}

.results-view .search-section {
    margin-top: 20px;
    margin-bottom: 10px;
}

.video-list {
    display: grid;
    gap: 20px;
    padding: 20px;
    max-height: 80vh;
    overflow-y: auto;

    /* Three columns for large screens */
    grid-template-columns: repeat(3, 1fr);
}

/* Two columns for medium screens */
@media (min-width: 768px) and (max-width: 1199px) {
    .video-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* One column for small screens */
@media (max-width: 767px) {
    .video-list {
        grid-template-columns: 1fr;
    }
}

/* Loading Spinner */
.loading-view {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}

.spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #333;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* Full-screen loading overlay */
.overlay-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    /* Higher than other content */
}

/* Video Player Overlay */
.video-player-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}
</style>
