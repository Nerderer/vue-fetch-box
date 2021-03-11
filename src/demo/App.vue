<template>
  <div class="bg-blue-100 min-h-screen">
    <div class="text-center sticky inset-0 bg-white shadow-sm">
      <ul class="inline-flex">
        <li
          class="header-tab font-bold"
        >
          Demos:
        </li>
        <li
          class="header-tab header-tab--clickable"
          :class="{ 'text-blue-500': selectedTab === 0 }"
          @click="setTab(0)"
        >
          Rick & Morty
        </li>
        <li
          class="header-tab header-tab--clickable"
          :class="{ 'text-blue-500': selectedTab === 1 }"
          @click="setTab(1)"
        >
          Dashboard
        </li>
        <li
          class="header-tab header-tab--clickable"
          :class="{ 'text-blue-500': selectedTab === 2 }"
          @click="setTab(2)"
        >
          Poll data
        </li>
      </ul>
    </div>

    <rick-and-morty v-if="selectedTab === 0" />
    <dashboard v-else-if="selectedTab === 1" />
    <poll v-else-if="selectedTab === 2" />
  </div>
</template>

<script>
import RickAndMorty from './rick-and-morty/RickAndMorty'
import Dashboard from './dashboard/Dashboard'
import Poll from '@/demo/poll-data/Poll'

export default {
  name: 'App',
  components: {
    RickAndMorty,
    Dashboard,
    Poll
  },
  data () {
    return {
      selectedTab: 0
    }
  },
  methods: {
    setTab (index) {
      this.selectedTab = index
    }
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.header-tab {
  @apply px-4 py-2;
}

.header-tab--clickable {
  @apply cursor-pointer hover:bg-blue-50
}
</style>
