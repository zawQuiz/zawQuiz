<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import HomeIcon from '@/assets/icons/home.svg'
import ProfileIcon from '@/assets/icons/profile.svg'
import QuestionIcon from '@/assets/icons/question.svg'
import SwordsIcon from '@/assets/icons/swords.svg'
import HomeIconFilled from '@/assets/icons/home_filled.svg'
import ProfileIconFilled from '@/assets/icons/profile_filled.svg'
import QuestionIconFilled from '@/assets/icons/question_filled.svg'
import SwordsIconFilled from '@/assets/icons/swords_filled.svg'
import LogoutIcon from '@/assets/icons/logout.svg'

export interface IIcons {
    [key: string]: string
}

const icons: IIcons = {
    "home": HomeIcon,
    "profile": ProfileIcon,
    "question": QuestionIcon,
    "swords": SwordsIcon,
    "homeFilled": HomeIconFilled,
    "profileFilled": ProfileIconFilled,
    "questionFilled": QuestionIconFilled,
    "swordsFilled": SwordsIconFilled,
    "logout": LogoutIcon
}

const { name } = defineProps({
    "name": {
        type: String as PropType<keyof IIcons>,
        required: true,
        default: "",
    },
    "offset": {
        type: Boolean,
        required: false,
        default: false
    }
})

</script>

<template>
    <component :is="icons[name]" :class="offset ? '-translate-x-1' : ''" />
</template>