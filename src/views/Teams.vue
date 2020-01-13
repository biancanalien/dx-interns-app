<template>
    <div>
        <app-navigation></app-navigation>

        <div class="team-view">
            <section class="create-section">
                <h3>Criar ou atualizar Equipes</h3>

                <p>
                    Crie um login para a equipe e os Dextragiários que ela escolheria.
                </p>
                <p>
                    Para atualizar as opções de Dextragiários de uma equipe que já existe, é só
                    repetir o login da equipe no campo "Login da equipe"
                </p>

                <div class="content_code">
                    <label for="team_code">Login da equipe:</label>
                    <input type="text" id="team_code" name="teamCode" v-model="teamCode" />
                </div>

                <div class="content_internOptions">
                    <p>Quais serão as Dextragiários?</p>
                    <intern-checkbox-list></intern-checkbox-list>
                </div>
                <button v-on:click="saveTeam">Criar Equipe</button>
            </section>
            <section class="list-section">
                <div>
                    <h3>Listagem das equipes</h3>
                    <p>
                        Nessa listagem você pode observar as equipes cadastradas e seus
                        dextragiários escolhidas.
                    </p>
                    <team-list></team-list>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import TeamList from '@/components/TeamList';
import InternCheckboxList from '@/components/InternCheckboxList';
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'Teams',
    data() {
        return {
            teamCode: ''
        };
    },
    components: {
        TeamList,
        InternCheckboxList,
        AppNavigation
    },
    created() {
        this.$store.dispatch('team/getAllTeams');
        this.$store.dispatch('team/getInternOptions');
    },
    computed: {
        ...mapState({
            selectedInterns: state => state.team.selectedInterns
        })
    },
    methods: {
        saveTeam() {
            const newTeam = {
                name: this.teamCode,
                internNumber: 2,
                technologies: ['test'],
                internOptions: this.selectedInterns
            };
            this.$store.dispatch('team/saveTeam', newTeam);
        }
    }
};
</script>
<style scoped>
.team-view {
    display: flex;
    text-align: left;
}
.create-section,
.list-section {
    width: 50%;
    height: 100%;
    padding: 20px;
}
.create-section p {
    text-align: justify;
    margin-bottom: 10px;
}
.content_code {
    margin-top: 25px;
    display: inline-grid;
}
.content_internOptions {
    margin: 10px 0px;
}
</style>
