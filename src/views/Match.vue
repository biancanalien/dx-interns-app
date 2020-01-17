<template>
    <div class="match-view">
        <app-navigation></app-navigation>
        <MatchSection
            title="Super Match"
            description="A pessoa Dextragiária escolheu como primeira opção uma equipe que a escolheu"
            v-bind:list="superMatchList"
        ></MatchSection>
        <MatchSection title="Demais sugestões" v-bind:list="otherMatchList"></MatchSection>
        <MatchSection title="Sem sugestões" v-bind:list="unknownMatchList"></MatchSection>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import MatchSection from '@/components/MatchSection';
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'Match',
    created() {
        this.$store.dispatch('match/getAll');
    },
    components: {
        MatchSection,
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
