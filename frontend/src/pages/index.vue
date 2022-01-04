<script setup lang="ts">
import AppText from '@/components/app-components/AppText.vue';
import AppLogo from '@/components/app-components/AppLogo.vue';
import AppInput from '@/components/app-components/AppInput.vue';
import AppButton from '@/components/app-components/AppButton.vue';
import AppIcon from '@/components/app-components/AppIcon.vue';


function click() {
  alert('Hi!');
}

</script>
<template>
  <div class="w-3/4 flex flex-col">
    <AppText size="2xl" weight="light">Hello</AppText>
    <p>Buttons:</p>
    <AppButton variant="solid">Button</AppButton>
    <AppButton variant="success">Button</AppButton>
    <AppButton variant="danger" @onClick="click">Button</AppButton>

    <p>Disabled Button:</p>
    <AppButton variant="success" disabled>Button</AppButton>

    <p>Button Link:</p>
    <AppButton variant="solid" link="/zaloguj" node="router-link">Button</AppButton>

    <AppInput name="text" label="Input" placeholder="placeholder" />

    <AppLogo />

    <AppText variant="h1" text="jajco" size="2xl" />

    <div class="flex">
      <AppIcon name="home" />
      <AppIcon name="homeFilled" />
      <AppIcon name="swords" />
      <AppIcon name="swordsFilled" />
      <AppIcon name="question" />
      <AppIcon name="questionFilled" />
      <AppIcon name="profile" />
      <AppIcon name="profileFilled" />
    </div>
  </div>
</template>
