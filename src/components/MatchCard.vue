<template>
    <!-- AppCard -->
    <div class="match-card-component">
        <MatchAvatars
            v-bind:internPhoto="match.intern.photoUrl"
            v-bind:teamPhoto="match.team.photoUrl"
        ></MatchAvatars>
        <!-- MatchDescription -->
        <MatchDescription v-bind:match="match"></MatchDescription>
        <!-- MatchActions -->
        <!-- <div class="match-actions"> -->
        <!-- AppLinkButton-->
        <!-- <button class="btn-action">Editar combinação</button> -->
        <!-- AppPrimaryButton-->
        <!-- <button class="btn-primary">Aprovar combinação</button> -->
        <!-- </div> -->
    </div>
</template>
<script>
import MatchAvatars from '@/components/MatchAvatars';
import MatchDescription from '@/components/MatchDescription';

export default {
    name: 'MatchCard',
    props: ['match'],
    components: {
        MatchAvatars,
        MatchDescription
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
.match-actions button {
    width: 268px;
    height: 48px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    border: none;
    margin-bottom: 8px;
}
.match-actions .btn-primary {
    color: #ffffff;
    background: #00699a;
    border-radius: 100px;
}
.match-actions .btn-action {
    color: #00699a;
    background: #ffffff;
}
</style>
