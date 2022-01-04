<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppLogo from '@/components/app-components/AppLogo.vue';
import { INavElem } from '@/components/app-components/app-navigation/navigationElements.interface';
import AppSidebarButton from '@/components/app-components/app-navigation/AppSidebarButton.vue';

const { small } = defineProps({
    "small": {
        type: Boolean,
        required: false,
        default: false
    }
})

const navElemsTop: INavElem[] = [
    {
        link: "/",
        icon: "home",
        iconActive: "homeFilled",
        title: "Panel"
    },
    {
        link: "/zaloguj",
        icon: "swords",
        iconActive: "swordsFilled",
        title: "Wyzwania"
    },
    {
        link: "/pytania",
        icon: "question",
        iconActive: "questionFilled",
        title: "Baza Pytań"
    }
]

const navElemsBottom: INavElem[] = [
    {
        link: "/profile",
        icon: "profile",
        iconActive: "profileFilled",
        title: "Profil"
    },
    {
        link: "/bitwa",
        icon: "logout",
        title: "Wyloguj",
        iconOffset: true
    }
]

const route = useRoute()
const path = computed(() => route.path)

</script>

<template>
    <div
        :class="['bg-secondary h-screen flex flex-col items-center p-[25px]', small ? 'w-[123px]' : 'w-[300px]']"
    >
        <AppLogo :small="small" />
        <nav class="mt-[50px] flex flex-col justify-between h-full w-full">
            <div class="flex flex-col">
                <AppSidebarButton
                    v-for="elem in navElemsTop"
                    :item="elem"
                    :path="path"
                    :small="small"
                />
            </div>
            <div class="flex flex-col">
                <AppSidebarButton
                    v-for="elem in navElemsBottom"
                    :item="elem"
                    :path="path"
                    :small="small"
                />
            </div>
        </nav>
    </div>
</template>