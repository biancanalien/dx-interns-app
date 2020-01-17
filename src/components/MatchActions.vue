<template>
    <div class="match-actions">
        <AppButton type="link" name="Editar combinação"></AppButton>
        <AppButton type="primary" name="Aprovar combinação"></AppButton>
    </div>
</template>
<script>
import AppButton from '@/components/AppButton';
export default {
    name: 'MatchActions',
    components: { AppButton }
};
</script>
