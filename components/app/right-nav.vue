<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const activeSection = ref('')

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: 'On this page',
      type: 'label',
      class: 'text-black-500 text-sm font-semibold'
    },
    {
      label: 'OOP',
      href: '#oop',
      active: activeSection.value === 'oop'
    },
    {
      label: 'Abstract classes and Interfaces',
      href: '#abstract_interfaces',
      active: activeSection.value === 'abstract_interfaces'
    },
    {
      label: 'Immutability',
      href: '#immutability',
      active: activeSection.value === 'immutability'
    },
    {
      label: 'Java Strings',
      href: '#java_strings',
      active: activeSection.value === 'java_strings'
    },
    {
      label: 'Equals and Hashcode',
      href: '#equals_and_hashcode',
      active: activeSection.value === 'equals_and_hashcode'
    },
    {
      label: 'Exceptions',
      href: '#exceptions',
      active: activeSection.value === 'exceptions'
    }
  ]
])

// Track active section based on scroll position
onMounted(() => {
  const sections = ['oop', 'abstract_interfaces', 'immutability', 
  'java_strings', 'equals_and_hashcode', 'exceptions']
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-20% 0px -80% 0px'
    }
  )

  sections.forEach((section) => {
    const element = document.getElementById(section)
    if (element) {
      observer.observe(element)
    }
  })

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<template>
  <div class="sticky" style="top: 2rem;">
    <UNavigationMenu orientation="vertical" :items="items"/>
  </div>
</template>
