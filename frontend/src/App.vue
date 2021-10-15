<script setup lang="ts">
import AppButton from '@/components/app-components/AppButton.vue';

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
    </div>
  </div>
</template>

