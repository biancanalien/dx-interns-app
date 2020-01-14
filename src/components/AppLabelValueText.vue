<template>
    <div class="app-label-value-text">
        <AppText type="label" v-bind:text="label"></AppText>
        <AppText type="value" v-bind:text="value"></AppText>
    </div>
</template>
<script>
import AppText from '@/components/AppText';

export default {
    name: 'AppLabelValueText',
    props: ['label', 'value'],
    components: { AppText }
};
</script>
