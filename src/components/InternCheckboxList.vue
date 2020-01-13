<template>
    <div>
        <div v-for="(intern, i) in internOptions" :key="i">
            <label>
                <input
                    type="checkbox"
                    v-model="inputs"
                    @change="updateSelectedInterns(inputs)"
                    :value="intern.username"
                    :disabled="inputs.length > 3 && disableOnlyUnchecked(intern.username)"
                />
                {{ intern.username }}
            </label>
        </div>
        <p>Escolhas:</p>
        {{ inputs }}
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'InternCheckboxList',
    data() {
        return {
            inputs: []
        };
    },
    computed: mapState({
        internOptions: state => state.team.internOptions
    }),
    methods: {
        ...mapActions('team', ['updateSelectedInterns']),
        disableOnlyUnchecked(index) {
            return this.inputs.indexOf(index) === -1;
        }
    }
};
</script>
<style scoped></style>
