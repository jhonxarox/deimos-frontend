<script>
export default {
    props: {
        videoUrl: String,
    },
    computed: {
        proxiedVideoUrl() {
            // Use the proxy endpoint in your backend to serve the video
            return `${backendUrl}/proxy-video?url=${encodeURIComponent(this.videoUrl)}`;
        },
    },
};
</script>

<template>
<div class="video-player">
    <video :src="proxiedVideoUrl" controls autoplay preload="auto" width="640" height="360"></video>
</div>
</template>
  
<style scoped>
.video-player {
    margin: 20px auto;
    width: 80%;
    max-width: 800px;
    aspect-ratio: 16 / 9;
}
</style>
