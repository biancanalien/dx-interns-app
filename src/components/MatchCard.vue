<template>
    <!-- AppCard -->
    <div class="match-card-component">
        <!-- MatchAvatars -->
        <div class="match-image">
            <!-- AppAvatar -->
            <img class="intern-avatar" src="../assets/avatar_intern.png" alt="intern avatar" />
            <img class="team-avatar" src="../assets/avatar_team.png" alt="team avatar" />
        </div>
        <!-- MatchDescription -->
        <div class="match-description">
            <!-- AppLabelValueText -->
            <div class="match-description-item">
                <!-- AppLabelText -->
                <p class="label">DEXTRAESTAG</p>
                <!-- AppValueText -->
                <p class="value">{{ match.intern }}</p>
            </div>
            <div class="match-description-item">
                <p class="label">EQUIPE</p>
                <p class="value">{{ match.team }}</p>
            </div>
        </div>
        <!-- MatchActions -->
        <!-- <div class="match-actions"> -->
        <!-- AppLinkButton-->
        <button class="btn-action">Editar combinação</button>
        <!-- AppPrimaryButton-->
        <button class="btn-primary">Aprovar combinação</button>
        <!-- </div> -->
    </div>
</template>
<script>
export default {
    name: 'MatchCard',
    props: ['match']
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
.match-card-component .match-image {
    width: 100%;
    height: 90px;
    display: flex;
    position: relative;
    justify-content: center;
    margin-bottom: 32px;
}
.match-card-component .match-image img {
    position: absolute;
    width: 80px;
    height: 80px;
    border: 4px solid #ffffff;
    border-radius: 100%;
}
.match-card-component .match-image .intern-avatar {
    left: calc(25%);
    background: #a2c525;
}
.match-card-component .match-image .team-avatar {
    left: calc(45%);
    background: #961283;
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
