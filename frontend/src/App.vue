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
      <AppButton variant="solid" title="Button" />
      <AppButton variant="success" title="Button" />
      <AppButton variant="danger" title="Button" @onClick="click" />

      <p>Disabled Button:</p>
      <AppButton variant="success" title="Button" disabled />

      <p>Button Link:</p>
      <AppButton variant="solid" title="Button" link="/zaloguj" />

      <AppInput name="text" label="Input" placeholder="placeholder" />

      <AppLogo />

      <AppText variant="h1" text="jajco" :size="30" />

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

