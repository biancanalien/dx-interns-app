<template>
    <div class="match-list row">
        <div class="column" v-for="(m, i) in matchList" :key="i">
            <MatchCard v-bind:match="m"></MatchCard>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MatchCardList',
    props: ['matchList']
};
</script>
<style scoped>
.row:after {
    content: '';
    display: table;
    clear: both;
}
.column {
    float: left;
    padding: 10px 10px;
}
</style>
