<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import { INavElem } from '@/components/app-components/app-navigation/navigationElements.interface';
import AppText from '@/components/app-components/AppText.vue';
import AppIcon from '@/components/app-components/AppIcon.vue';

const { item, path, small } = defineProps({
    "item": {
        type: Object as PropType<INavElem>,
        required: true,
        default: []
    },
    "path": {
        type: String,
        required: true,
        default: ''
    },
    "small": {
        type: Boolean,
        required: false,
        default: false
    }
})


</script>

<template>
    <router-link
        :to="item.link"
        :class="['rounded-[10px] px-5 py-[15px] mb-[15px] flex items-center', { 'bg-primary': item.link === path }, { 'w-[250px]': !small }]"
    >
        <AppIcon
            :name="item.link === path ? item.iconActive : item.icon"
            :offset="item.iconOffset"
        />
        <AppText
            v-if="!small"
            :weight="item.link === path ? 'bold' : 'normal'"
            size="lg"
            :class="['ml-4']"
        >{{ item.title }}</AppText>
    </router-link>
</template>