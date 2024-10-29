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
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s;
    background-color: #333;
    color: #fff;
    position: relative;
}

.video-item:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
}

.video-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
}

.video-details {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* Transparent background */
    padding: 8px;
    box-sizing: border-box;
    text-align: left;
}

.caption {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
