<template>
    <!-- AppCard -->
    <div class="match-card-component">
        <MatchAvatars
            v-bind:internPhoto="match.intern.photoUrl"
            v-bind:teamPhoto="match.team.photoUrl"
        ></MatchAvatars>
        <!-- MatchDescription -->
        <div class="match-description">
            <!-- AppLabelValueText -->
            <div class="match-description-item">
                <!-- AppLabelText -->
                <p class="label">DEXTRAESTAG</p>
                <!-- AppValueText -->
                <p class="value">{{ match.intern.username }}</p>
            </div>
            <div class="match-description-item">
                <p class="label">EQUIPE</p>
                <p class="value">{{ match.team.name }}</p>
            </div>
        </div>
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

export default {
    name: 'MatchCard',
    props: ['match'],
    components: {
        MatchAvatars
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
.match-card-component .match-description {
    position: relative;
}
.match-card-component .match-description .match-description-item {
    margin-bottom: 12px;
}
.match-card-component .match-description p {
    text-align: center;
    margin: 0;
    margin-bottom: 4px;
}
.match-card-component .match-description .label {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
}
.match-card-component .match-description .value {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #5f646d;
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
