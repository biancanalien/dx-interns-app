<template>
    <p v-bind:class="type">{{ text }}</p>
</template>
<script>
export default {
    name: 'AppText',
    props: ['type', 'text'],
    data() {
        return {
            textTypes: ['label', 'value']
        };
    },
    mounted() {
        if (!this.typeIsValid()) {
            console.error(`This type ${this.type} is not valid, default type assigned`);
            this.type = 'value';
        }
    },
    methods: {
        typeIsValid() {
            return this.textTypes.indexOf(this.type) > -1;
        }
    }
};
</script>
<style scoped>
.value {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #5f646d;
}
.label {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
}
</style>
