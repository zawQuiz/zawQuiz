<script setup lang="ts">

interface ILogoProps {
    small?: boolean;
}

const { small } = defineProps<ILogoProps>()

const whiteText = small ? "z" : "zaw"
const greenText = small ? "Q" : "Quiz"

</script>

<template>
    <router-link to="/">
        <p class="font-bold text-[36px]">
            {{ whiteText }}
            <!--
            -->
            <span class="text-green">{{ greenText }}</span>
        </p>
    </router-link>
</template>