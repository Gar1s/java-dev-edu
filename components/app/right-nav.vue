<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'On this page',
      type: 'label',
      class: 'text-black-500 text-sm font-semibold'
    },
    {
      label: 'OOP',
      href: '#oop'
    },
    {
      label: 'Abstract classes and Interfaces',
      href: '#abstract_interfaces'
    },
    {
      label: 'Immutability',
      href: '#immutability'
    },
    {
      label: 'Java Strings',
      href: '#java_strings'
    },
    {
      label: 'Equals and Hashcode',
      href: '#equals_and_hashcode'
    },
    {
      label: 'Exceptions',
      href: '#exceptions'
    }
  ]
])
</script>

<template>
  <div class="sticky" style="top: 2rem;">
    <UNavigationMenu orientation="vertical" :items="items"/>
  </div>
</template>
