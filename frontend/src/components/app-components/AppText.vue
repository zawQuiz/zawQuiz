<script setup lang="ts">
import { PropType } from 'vue';

export type TTextNode = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
export type TTextWeight = "light" | "normal" | "medium" | "bold";
export type TTextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";

const { weight, uppercase, size, node } = defineProps({
    "weight": {
        type: String,
        required: false,
        default: "normal",
    },
    "uppercase": {
        type: Boolean,
        required: false,
        default: false,
    },
    "size": {
        type: String as PropType<TTextSize>,
        required: false,
        default: 'base',
    },
    "node": {
        type: String as PropType<TTextNode>,
        requried: true,
        default: "p",
    },
})

const fontUppercaseClass = uppercase ? "uppercase" : ""

</script>

<template>
    <component :is="node" :class="[`font-${weight}`, `text-${size}`, fontUppercaseClass]">
        <slot></slot>
    </component>
</template>
