<script setup lang="ts">
interface IIconProps {
    filled?: boolean;
    name: "home" | "swords" | "question" | "profile";
}

const { filled, name } = defineProps<IIconProps>()

const source = filled ? `src/assets/icons/${name}_filled.svg` : `src/assets/icons/${name}.svg`
</script>

<template>
    <img :src="source" />
</template>