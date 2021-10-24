<script setup lang="ts">
interface ITextProps {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
    text: string;
    bold?: boolean;
    size: number;
}

const { bold, size, variant, text } = defineProps<ITextProps>()

const fontBold = bold ? "font-bold" : ""

</script>

<template>
    <variant :class="[fontBold]" :style="{ fontSize: `${size}px` }">{{ text }}</variant>
</template>
