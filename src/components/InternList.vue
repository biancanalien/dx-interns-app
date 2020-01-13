<template>
    <table>
        <thead>
            <tr>
                <th>Dextragiário</th>
                <th>Equipes escolhidas</th>
            </tr>
        </thead>
        <tbody v-for="(intern, i) in interns" :key="i">
            <tr>
                <td>{{ intern.username }}</td>
                <td>{{ intern.teamOptions }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'InternList',
    computed: mapState({
        interns: state => state.intern.all
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
