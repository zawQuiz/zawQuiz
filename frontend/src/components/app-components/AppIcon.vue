<script setup lang="ts">
interface IIconProps {
    filled?: boolean;
    icon: "home" | "swords" | "question" | "profile";
}

const { filled, icon } = defineProps<IIconProps>()

const source = filled ? `src/assets/icons/${icon}_filled.svg` : `src/assets/icons/${icon}.svg`
</script>

<template>
    <img :src="source" />
</template>