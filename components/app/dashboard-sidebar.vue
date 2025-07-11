<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { useRoute } from 'vue-router'

const route = useRoute()
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Dashboard',
      icon: 'i-lucide-grid',
      to: '/',
    },
    {
      label: 'Java',
      icon: 'i-lucide-code',
      children: [
        {
          label: 'Core',
          to: '/java/core',
          icon: 'i-lucide-triangle-alert',
        },
        {
          label: 'Collections',
          icon: 'i-lucide-library',
        },
        {
          label: 'Concurrency',
          icon: 'fluent-mdl2:build-queue'
        },
        {
          label: 'IO/NIO Libraries',
          icon: 'i-lucide-file',
        },
        {
          label: 'Java 8 Features',
          icon: 'i-lucide-parentheses',
        },
        {
          label: 'JDE',
          icon: 'i-lucide-cpu',
        },
        {
          label: 'Interview Questions',
          icon: 'i-lucide-circle-help',
          class: 'text-blue-400',
        }
      ]
    },
    {
      label: 'DBMS',
      icon: 'i-lucide-database',
      children: [
        {
          label: 'JDBC',
          icon: 'i-lucide-file-text',
          description: 'Define shortcuts for your application.',
        },
        {
          label: 'useOverlay',
          icon: 'i-lucide-file-text',
          description: 'Display a modal/slideover within your application.',
        },
        {
          label: 'useToast',
          icon: 'i-lucide-file-text',
          description: 'Display a toast within your application.',
        }
      ]
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      children: [
        {
          label: 'Link',
          icon: 'i-lucide-file-text',
          description: 'Use NuxtLink with superpowers.',
        },
        {
          label: 'Modal',
          icon: 'i-lucide-file-text',
          description: 'Display a modal within your application.',
        },
        {
          label: 'NavigationMenu',
          icon: 'i-lucide-file-text',
          description: 'Display a list of links.',
        },
        {
          label: 'Pagination',
          icon: 'i-lucide-file-text',
          description: 'Display a list of pages.',
        },
        {
          label: 'Popover',
          icon: 'i-lucide-file-text',
          description: 'Display a non-modal dialog that floats around a trigger element.',
        },
        {
          label: 'Progress',
          icon: 'i-lucide-file-text',
          description: 'Show a horizontal bar to indicate task progression.',
        }
      ]
    }
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      badge: '3.8k',
      to: 'https://github.com/nuxt/ui',
      target: '_blank'
    },
    {
      label: 'Help',
      icon: 'i-lucide-circle-help',
      disabled: true
    }
  ]
])

function updateActive() {
  items.value.forEach(group => {
    group.forEach(item => {
      // Reset states
      item.active = false
      item.defaultOpen = false

      // Set active if route matches
      if (item.to === route.path) {
        item.active = true
      }

      // Check children
      if (item.children) {
        let childActive = false
        item.children.forEach(child => {
          child.active = child.to === route.path
          if (child.active) childActive = true
        })
        // Open parent if any child is active
        if (childActive) {
          item.defaultOpen = true
        }
      }
    })
  })
}
watch(() => route.path, updateActive, { immediate: true })
</script>

<template>
  <div class="sticky" style="top: 2rem;">
    <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-60" />
  </div>
</template>
