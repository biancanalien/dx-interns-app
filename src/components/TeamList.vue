<template>
    <table>
        <thead>
            <tr>
                <th>Equipe</th>
                <th>Dextragiários escolhidos</th>
            </tr>
        </thead>
        <tbody v-for="(team, i) in teams" :key="i">
            <tr>
                <td>{{ team.code }}</td>
                <td>{{ team.internOptions }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'InternList',
    computed: mapState({
        teams: state => state.team.all
    })
};
</script>
<style scoped>
table,
th,
td {
    border: 1px solid black;
}
</style>
