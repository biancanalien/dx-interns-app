<template>
    <img class="app-avatar" :src="image" :alt="alt" />
</template>
<script>
export default {
    name: 'AppAvatar',
    props: ['url', 'alt'],
    data() {
        return {
            image: this.getImage('avatar_intern')
        };
    },
    methods: {
        getImage(name) {
            let images = require.context('../assets/', false, /\.png$/);
            return images(`./${name}.png`);
        }
    },
    mounted() {
        if (this.url) {
            this.image = this.url;
        }
    }
};
</script>
<style scoped>
img {
    border: 4px solid #ffffff;
    border-radius: 100%;
}
</style>
