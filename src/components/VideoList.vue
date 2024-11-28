<script>
import VideoItem from "./VideoItem.vue";

export default {
    components: {
        VideoItem
    },
    props: {
        videos: Array,
        isFetchingMore: Boolean
    },
    methods: {
        playVideo(videoUrl) {
            this.$emit("play", videoUrl);
        },
        onScroll(event) {
            const target = event.target;

            const bottomReached =
                Math.ceil(target.scrollTop + target.clientHeight) >= target.scrollHeight;

            if (bottomReached && !this.isFetchingMore) {
                this.$emit("loadMore");
            }
        },
    }
};
</script>

<template>
<div class="video-list" @scroll="onScroll">
    <VideoItem v-for="(video, index) in videos" :key="index" :video="video" @play="playVideo" />
    <div v-if="isFetchingMore" class="loading-view">
        <div class="spinner"></div>
    </div>
</div>
</template>

<style scoped>
.video-list {
    display: grid;
    gap: 20px; /* Space between items */
    overflow-y: auto; /* Enable vertical scrolling */
    width: 100%;
    max-width: 1200px; /* Limit maximum width for large screens */
    height: 80vh; /* Fixed height for consistent scrolling */
    padding: 20px;

    /* Default: Single column */
    grid-template-columns: 1fr;
}

/* Medium screens (1 column) */
@media (min-width: 768px) {
    .video-list {
        grid-template-columns: 1fr;
    }
}

/* Large screens (2 columns) */
@media (min-width: 1200px) {
    .video-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

.loading-view {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
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
</style>
