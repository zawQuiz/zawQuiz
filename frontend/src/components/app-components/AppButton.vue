<script lang="ts" setup>
import { PropType } from 'vue';

export type TButtonNode = "a" | "router-link" | "button";
export type TButtonVariant = "success" | "danger" | "solid";
export type TButtonType = "button" | "submit" | "reset";

const { node, variant, disabled, link, type } = defineProps({
    "node": {
        type: String as PropType<TButtonNode>,
        requried: false,
        default: "button",
    },
    "variant": {
        type: String as PropType<TButtonVariant>,
        requried: false,
        default: "primary",
    },
    "type": {
        type: String as PropType<TButtonType>,
        required: false,
        default: "",
    },
    "disabled": {
        type: Boolean,
        required: false,
        default: false,
    },
    "link": {
        type: String,
        required: false,
        default: "",
    },
})

const emits = defineEmits(['onClick']);

const handleClick = () => {
    emits("onClick");
}

const btnClassVaraint = variant !== 'solid' ? `button-${variant}` : '';

</script>

<template>
    <component
        :is="node"
        :class="['bis-base', btnClassVaraint, { disabled: disabled }]"
        :type="type"
        :disabled="disabled"
        :href="node == 'a' ? link : null"
        :to="node == 'router-link' ? link : null"
        @click="handleClick"
    >
        <slot></slot>
    </component>
</template>

<style lang="postcss" scoped>
.button-success {
    @apply bg-green hover:bg-green-dark focus:bg-green-dark active:bg-green-dark !important;
}

.button-danger {
    @apply bg-red hover:bg-red-dark focus:bg-red-dark active:bg-red-dark !important;
}
</style>