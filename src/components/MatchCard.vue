<template>
    <div class="match-card-component">
        <MatchAvatars
            v-bind:internPhoto="match.intern.photoUrl"
            v-bind:teamPhoto="match.team.photoUrl"
        ></MatchAvatars>
        <MatchDescription v-bind:match="match"></MatchDescription>
        <MatchActions></MatchActions>
    </div>
</template>
<script>
import MatchAvatars from '@/components/MatchAvatars';
import MatchDescription from '@/components/MatchDescription';
import MatchActions from '@/components/MatchActions';

export default {
    name: 'MatchCard',
    props: ['match'],
    components: {
        MatchAvatars,
        MatchDescription,
        MatchActions
    }
};
</script>
<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
}
.match-card-component {
    background: #ffffff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    padding: 20px;
    width: 270px;
}
.match-actions {
    margin-top: 32px;
}
</style>
