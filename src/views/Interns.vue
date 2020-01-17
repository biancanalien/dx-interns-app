<template>
    <div>
        <app-navigation></app-navigation>
        <div class="intern-view">
            <section class="create-section">
                <h3>Criar ou atualizar Dextragiários</h3>

                <p>
                    Crie um login para a pessoa estagiária e as equipes hipotéticas que ela
                    escolheria.
                </p>
                <p>
                    Para atualizar as opções de equipes de um Dextragiário que já existe, é só
                    repetir o login dele no campo "Login"
                </p>

                <div class="content_username">
                    <label for="intern_username">Login:</label>
                    <input
                        type="text"
                        id="intern_username"
                        name="username"
                        v-model="internUsername"
                    />
                </div>

                <div class="content_teamOptions">
                    <p>Quais serão as equipes?</p>
                    <team-checkbox-list></team-checkbox-list>
                </div>
                <button v-on:click="saveIntern">Criar Dextragiário</button>
            </section>
            <section class="list-section">
                <div>
                    <h3>Listagem dos Dextragiários</h3>
                    <p>
                        Nessa listagem você pode observar os Dextragiários cadastrados e suas
                        equipes escolhidas. Você também tem a opção de removê-las.
                    </p>
                    <intern-list></intern-list>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import InternList from '@/components/InternList';
import TeamCheckboxList from '@/components/TeamCheckboxList';
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'Interns',
    data() {
        return {
            internUsername: ''
        };
    },
    components: {
        InternList,
        TeamCheckboxList,
        AppNavigation
    },
    created() {
        this.$store.dispatch('intern/getAllInterns');
        this.$store.dispatch('intern/getTeamOptions');
    },
    computed: {
        ...mapState({
            teamOptions: state => state.intern.teamOptions,
            selectedTeams: state => state.intern.selectedTeams
        })
    },
    methods: {
        saveIntern() {
            const newIntern = {
                username: this.internUsername,
                email: `${this.internUsername}@dextra-sw.com`,
                name: 'nome exemplo',
                lastName: 'lastName exemplo',
                schoolName: 'escola exemplo',
                teamOptions: this.selectedTeams
            };
            this.$store.dispatch('intern/saveIntern', newIntern);
        }
    }
};
</script>
<style scoped>
.intern-view {
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
.content_username {
    margin-top: 25px;
    display: inline-grid;
}
.content_teamOptions {
    margin: 10px 0px;
}
</style>
