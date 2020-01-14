<template>
    <div class="match-avatars">
        <AppAvatar class="intern-avatar" v-bind:url="internPhoto" alt="intern avatar"></AppAvatar>
        <AppAvatar class="team-avatar" v-bind:url="teamPhoto" alt="team avatar"></AppAvatar>
    </div>
</template>
<script>
import AppAvatar from '@/components/AppAvatar';
export default {
    name: 'MatchAvatars',
    props: ['internPhoto', 'teamPhoto'],
    components: {
        AppAvatar
    }
};
</script>
<style scoped>
.match-avatars {
    width: 100%;
    height: 90px;
    display: flex;
    position: relative;
    justify-content: center;
    margin-bottom: 32px;
}
.match-avatars img {
    position: absolute;
    width: 80px;
    height: 80px;
    border: 4px solid #ffffff;
    border-radius: 100%;
}
.match-avatars .intern-avatar {
    left: calc(25%);
    background: #a2c525;
}
.match-avatars .team-avatar {
    left: calc(45%);
    background: #961283;
}
</style>
