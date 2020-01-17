<template>
    <div class="match-description">
        <AppLabelValueText
            label="DEXTRAESTAG"
            v-bind:value="match.intern.username"
        ></AppLabelValueText>
        <AppLabelValueText label="EQUIPE" v-bind:value="match.team.name"></AppLabelValueText>
    </div>
</template>
<script>
import AppLabelValueText from '@/components/AppLabelValueText';

export default {
    name: 'MatchDescription',
    props: ['match'],
    components: {
        AppLabelValueText
    }
};
</script>
<style scoped>
.match-description {
    position: relative;
}
.match-description .match-description-item {
    margin-bottom: 12px;
}
.match-description p {
    text-align: center;
    margin: 0;
    margin-bottom: 4px;
}
</style>
