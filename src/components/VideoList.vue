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
            const bottomReached = event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight - 10;
            if (bottomReached && !this.isFetchingMore) {
                this.$emit("loadMore");
            }
        }
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
    gap: 20px;
    padding: 20px;
    max-height: 70vh;
    overflow-y: auto;

    /* Responsive grid */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

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
</style>
