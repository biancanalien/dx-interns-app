<template>
    <div>
        <button id="customBtn" class="customGPlusSignIn" v-on:click="onSignIn">
            <span class="icon"></span>
            Sign in with Google
        </button>
    </div>
</template>
<script>
export default {
    name: 'Login',
    methods: {
        onSignIn() {
            this.$store.dispatch('auth/authenticateUser', '/');
        }
    }
};
</script>
<style scoped>
#customBtn {
    background: white;
    color: #444;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding-right: 15px;
}
#customBtn:hover {
    cursor: pointer;
}
span.icon {
    background: url('../assets/btn_google_normal.svg') transparent no-repeat;
    display: inline-block;
    vertical-align: middle;
    width: 42px;
    height: 42px;
    margin-bottom: 5px;
}
</style>
