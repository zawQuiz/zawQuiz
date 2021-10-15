<script lang="ts" setup>
import { ButtonHTMLAttributes } from 'vue';

export interface IButtonProps extends ButtonHTMLAttributes {
    variant: "success" | "danger" | "solid";
    disabled?: boolean;
    title: string;
    link?: string;
}

const { variant, disabled, title, link, type } = defineProps<IButtonProps>();

const emits = defineEmits(['onClick']);

const handleClick = () => {
    emits("onClick");
}

const btnClassVaraint = variant !== 'solid' ? `button-${variant}` : '';

</script>

<template>
    <router-link
        v-if="link"
        :to="link"
        :class="['bis_base', btnClassVaraint, { disabled: disabled }]"
        :disabled="disabled"
    >{{ title }}</router-link>

    <button
        v-else
        :class="['bis_base', btnClassVaraint, { disabled: disabled }]"
        :type="type"
        :disabled="disabled"
        @click="handleClick"
    >{{ title }}</button>
</template>

<style lang="postcss" scoped>
.button-success {
    @apply bg-green hover:bg-green-dark focus:bg-green-dark active:bg-green-dark !important;
}

.button-danger {
    @apply bg-red hover:bg-red-dark focus:bg-red-dark active:bg-red-dark !important;
}
</style>