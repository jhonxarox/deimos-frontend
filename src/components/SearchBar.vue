<script>
export default {
    data() {
        return {
            query: ""
        };
    },
    methods: {
        triggerSearch() {
            if (this.query.trim()) {
                this.$emit("search", this.query);
            }
        },
        clearSearch() {
            this.query = "";
        }
    }
};
</script>

<template>
<div class="search-bar">
    <input type="text" v-model="query" placeholder="Search for videos..." @keyup.enter="triggerSearch" class="search-input" />
    <button v-if="query" @click="clearSearch" class="clear-btn">✖️</button>
    <div class="divider"></div>
    <button @click="triggerSearch" class="search-btn">🔍</button>
</div>
</template>

<style scoped>
.search-bar {
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 30px;
    padding: 5px 15px;
    max-width: 500px;
    margin: 20px auto;
}

.search-input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 16px;
    padding: 10px;
    outline: none;
}

.clear-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #666;
    margin-right: 10px;
}

.clear-btn:hover {
    color: #333;
}

.divider {
    width: 1px;
    height: 24px;
    background-color: #ddd;
    margin-right: 10px;
}

.search-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #333;
}

.search-btn:hover {
    color: #000;
}
</style>
