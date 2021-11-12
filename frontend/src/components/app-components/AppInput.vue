<script setup lang="ts">
import { InputHTMLAttributes } from '@vue/runtime-dom';
import { useField } from "vee-validate";

interface IInputProps extends InputHTMLAttributes {
    name: string;
    label: string;
    disabled?: boolean;
}
const { type, name, label, placeholder, disabled } = defineProps<IInputProps>();

const { errorMessage, value } = useField(name);
</script>

<template>
    <div>
        <label class="px-[15px] mb-px">{{ label }}</label>
        <input
            :class="['bis-base', { disabled: disabled }]"
            :type="type"
            :name="name"
            :placeholder="placeholder"
            :disabled="disabled"
            v-model="value"
        />
        <div class="w-full">{{ errorMessage }}</div>
    </div>
</template>

<style lang="postcss" scoped>
</style>