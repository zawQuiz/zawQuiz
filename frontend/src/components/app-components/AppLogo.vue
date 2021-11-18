<script setup lang="ts">

const { small } = defineProps({
    "small": {
        type: Boolean,
        required: false,
        default: false
    }
})

</script>

<template>
    <router-link to="/">
        <p class="font-bold text-[36px]">
            {{ small ? "z" : "zaw" }}
            <!--
            -->
            <span class="text-green">{{ small ? "Q" : "Quiz" }}</span>
        </p>
    </router-link>
</template>