<script>
export default {
    props: {
        video: Object
    },
    methods: {
        playVideo() {
            this.$emit("play", this.video.url);
        }
    }
};
</script>

<template>
<div class="video-item" @click="playVideo">
    <img :src="video.thumbnail" alt="Video thumbnail" />
    <div class="video-details">
        <p class="caption">{{ video.caption }}</p>
    </div>
</div>
</template>
  
<style scoped>
.video-item {
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 10px; /* Rounded corners */
    overflow: hidden;
    transition: box-shadow 0.3s;
    background-color: #333;
    color: #fff;

    /* Larger item size */
    width: 100%;
    height: 300px; /* Fixed height for uniformity */
    max-width: 640px; /* Optional: Limit maximum width */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Add shadow */
    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* Align content at the bottom */
    position: relative;
}

.video-item img {
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    object-fit: cover; /* Ensure video thumbnails are properly cropped */
}

.video-item:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* Add hover effect */
}

.video-details {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7); /* Semi-transparent black */
    padding: 10px;
    text-align: left;
}

.caption {
    font-size: 16px; /* Slightly larger font size for readability */
    font-weight: bold;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limit to 2 lines */
    -webkit-box-orient: vertical;
}
</style>
