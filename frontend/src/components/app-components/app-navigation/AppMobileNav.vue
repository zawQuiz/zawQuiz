<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppIcon from '@/components/app-components/AppIcon.vue';
import { INavElem } from '@/components/app-components/app-navigation/navigationElements.interface';

const navElems: INavElem[] = [
    {
        link: "/",
        icon: "home",
        iconActive: "homeFilled"
    },
    {
        link: "/bitwa",
        icon: "swords",
        iconActive: "swordsFilled"
    },
    {
        link: "/pytania",
        icon: "question",
        iconActive: "questionFilled"
    },
    {
        link: "/zaloguj",
        icon: "profile",
        iconActive: "profileFilled"
    }
]

const route = useRoute()
const path = computed(() => route.path)

</script>

<template>
    <nav
        class="bg-secondary w-full h-[60px] fixed bottom-0 px-5 py-4 flex justify-between items-center"
    >
        <router-link v-for="elem in navElems" :to="elem.link" class="rounded-sm">
            <AppIcon :name="elem.link === path ? elem.iconActive : elem.icon" />
        </router-link>
    </nav>
</template>