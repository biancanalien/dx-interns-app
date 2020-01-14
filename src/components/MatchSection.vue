<template>
    <section class="match-section">
        <h3>{{ title }}</h3>
        <p v-if="description">{{ description }}</p>
        <MatchCardList v-bind:matchList="list"></MatchCardList>
    </section>
</template>
<script>
import MatchCardList from '@/components/MatchCardList';

export default {
    name: 'MatchSection',
    props: ['title', 'description', 'list'],
    components: {
        MatchCardList
    }
};
</script>
<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
}
h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    text-align: left;
    margin-bottom: 8px;
}
p {
    font-size: 16px;
    line-height: 20px;
    color: #5f646d;
    text-align: left;
    margin-bottom: 24px;
}
</style>
