<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

// Define props to receive array from parent
interface Props {
  sections?: Array<{ label: string; href: string }>
}

const props = withDefaults(defineProps<Props>(), {
  sections: () => [
    { label: 'Custom Section 1', href: 'section1' },
    { label: 'Custom Section 2', href: 'section2' },
    { label: 'Custom Section 3', href: 'section3' }
  ]
})

const activeSection = ref('')

const activeClass = 'text-blue-600 font-semibold bg-blue-50 border-l-2 border-blue-600 pl-2'

// Add click handler function
const handleSectionClick = (href: string) => {
  const sectionId = href.replace('#', '')
  activeSection.value = sectionId
  
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: 'On this page',
      type: 'label',
      class: 'text-black-500 text-sm font-semibold'
    },
    ...props.sections.map(section => {
      return {
        label: section.label,
        href: `#${section.href}`,
        active: activeSection.value === section.href,
        class: activeSection.value === section.href ? activeClass : ''
      }
    })
  ]
])

// Track active section based on scroll position
onMounted(() => {
  const sections = props.sections.map(section => section.href)

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
    <nav class="space-y-1">
      <div class="text-black-500 text-sm font-semibold mb-3">On this page</div>
      <a
        v-for="section in props.sections"
        :key="section.href"
        :href="`#${section.href}`"
        :class="[
          'block px-2 py-2 text-sm rounded-md transition-colors cursor-pointer',
          activeSection === section.href ? activeClass : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
        ]"
        @click.prevent="handleSectionClick(`#${section.href}`)"
      >
        {{ section.label }}
      </a>
    </nav>
  </div>
</template>
