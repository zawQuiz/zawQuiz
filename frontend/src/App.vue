<script setup lang="ts">
import AppButton from '@/components/app-components/AppButton.vue';
import AppInput from '@/components/app-components/AppInput.vue';
import AppLogo from '@/components/app-components/AppLogo.vue';
import AppText from '@/components/app-components/AppText.vue';
import AppIcon from '@/components/app-components/AppIcon.vue';

function click() {
  alert('Hi!');
}

</script>

<template>
  <div>
    <router-view />
    <div class="w-3/4">
      <p>Buttons:</p>
      <AppButton variant="solid">Button</AppButton>
      <AppButton variant="success">Button</AppButton>
      <AppButton variant="danger" @onClick="click">Button</AppButton>

      <p>Disabled Button:</p>
      <AppButton variant="success" disabled>Button</AppButton>

      <p>Button Link:</p>
      <AppButton variant="solid" link="/zaloguj">Button</AppButton>

      <AppInput name="text" label="Input" placeholder="placeholder" />

      <AppLogo />

      <AppText variant="h1" text="jajco" size="2xl" />

      <div class="flex">
        <AppIcon icon="home" />
        <AppIcon filled icon="home" />
        <AppIcon icon="swords" />
        <AppIcon filled icon="swords" />
        <AppIcon icon="question" />
        <AppIcon filled icon="question" />
        <AppIcon icon="profile" />
        <AppIcon filled icon="profile" />
      </div>
    </div>
  </div>
</template>

