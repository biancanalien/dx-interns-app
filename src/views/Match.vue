<template>
    <div class="match-view">
        <app-navigation></app-navigation>
        <section class="super-match-section">
            <h3>Super-match</h3>
            <p>
                A pessoa Dextragiária escolheu como primeira opção uma equipe que a escolheu
            </p>
            <MatchCardList v-bind:matchList="superMatchList"></MatchCardList>
        </section>
        <section class="other-match-section">
            <h3>Demais sugestões</h3>
            <MatchCardList v-bind:matchList="otherMatchList"></MatchCardList>
        </section>
        <section class="unknown-match-section">
            <h3>Sem sugestões</h3>
            <MatchCardList v-bind:matchList="unknownMatchList"></MatchCardList>
        </section>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import MatchCardList from '@/components/MatchCardList';
// import MatchCard from '@/components/MatchCard';
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'Match',
    created() {
        this.$store.dispatch('match/getAll');
    },
    components: {
        MatchCardList,
        AppNavigation
    },
    computed: {
        ...mapState({
            superMatchList: state => state.match.superMatchList,
            otherMatchList: state => state.match.otherMatchList,
            unknownMatchList: state => state.match.unknownMatchList
        })
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
