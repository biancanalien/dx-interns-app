<template>
    <button v-bind:class="type">{{ name }}</button>
</template>
<script>
export default {
    name: 'AppButton',
    props: ['type', 'name'],
    data() {
        return {
            buttonTypes: ['primary', 'link']
        };
    },
    mount() {
        if (!this.validateType()) {
            console.error(`This type ${this.type} is not valid, default type assigned`);
            this.type = 'primary';
        }
    },
    methods: {
        validateType() {
            return this.buttonTypes.indexOf(this.type) > -1;
        }
    }
};
</script>
<style scoped>
button {
    width: 268px;
    height: 48px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    border: none;
    margin-bottom: 8px;
}
.primary {
    color: #ffffff;
    background: #00699a;
    border-radius: 100px;
}
.link {
    color: #00699a;
    background: #ffffff;
}
</style>
