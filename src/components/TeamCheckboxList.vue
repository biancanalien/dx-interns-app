<template>
    <div>
        <div v-for="(team, i) in teamOptions" :key="i">
            <label>
                <input
                    type="checkbox"
                    v-model="inputs"
                    @change="updateSelectedTeams(inputs)"
                    :value="team.code"
                    :disabled="
                        inputs.length > 3 && disableOnlyUnchecked(team.code)
                    "
                />
                {{ team.code }}
            </label>
        </div>
        <p>Escolhas:</p>
        {{ inputs }}
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'TeamCheckboxList',
    data() {
        return {
            inputs: []
        };
    },
    computed: mapState({
        teamOptions: state => state.intern.teamOptions
    }),
    methods: {
        ...mapActions('intern', ['updateSelectedTeams']),
        disableOnlyUnchecked(index) {
            return this.inputs.indexOf(index) === -1;
        }
    }
};
</script>
<style scoped></style>
