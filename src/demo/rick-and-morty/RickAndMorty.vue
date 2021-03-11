<template>
  <div class="p-4">
    <card
      title="Simple demos"
      class="h-auto m-auto"
    >
      <div class="p-4">
        <button
          class="button"
          @click="generateRandomCharId"
        >
          Get random character
        </button>

        <button
          class="button ml-4"
          @click="generateError"
        >
          Get error
        </button>

        <h4 class="heading">
          Example 1 - A very basic example:
        </h4>

        <fetch-box
          v-slot="{ data }"
          :url="`https://rickandmortyapi.com/api/character/${characterId}`"
        >
          <img
            v-if="data"
            class="character__image"
            :alt="data.name"
            :src="data.image"
          >
        </fetch-box>

        <h4 class="heading">
          Example 2 - Showing a loader while fetching data:
        </h4>

        <fetch-box
          v-slot="{ data, isLoading }"
          :url="`https://rickandmortyapi.com/api/character/${characterId}`"
        >
          <div class="box">
            <div
              v-if="data"
              class="character"
            >
              <img
                class="character__image"
                :alt="data.name"
                :src="data.image"
              >
              <div>
                <div class="character__name">
                  {{ data.name }}
                </div>
                <div>{{ data.species }}</div>
                <div>{{ data.origin.name }}</div>
              </div>
            </div>

            <loader v-if="isLoading" />
          </div>
        </fetch-box>

        <h4 class="heading">
          Example 3 - Showing a loader and showing errors:
        </h4>

        <fetch-box
          v-slot="{ data, isLoading, error }"
          :url="`https://rickandmortyapi.com/api/character/${characterId}`"
        >
          <div class="box">
            <div
              v-if="data"
              class="character"
            >
              <img
                class="character__image"
                :alt="data.name"
                :src="data.image"
              >
              <div>
                <div class="character__name">
                  {{ data.name }}
                </div>
                <div>{{ data.species }}</div>
                <div>{{ data.origin.name }}</div>
              </div>
            </div>

            <div
              v-else-if="error"
              class="error"
            >
              {{ error.error }}
            </div>

            <loader v-if="isLoading" />
          </div>
        </fetch-box>

        <h4 class="heading">
          Example 4 - Events: logging the data in the console
        </h4>

        <fetch-box
          v-slot="{ data }"
          :url="`https://rickandmortyapi.com/api/character/${characterId}`"
          @error="logError"
          @success="logSuccess"
        >
          <img
            v-if="data"
            class="character__image"
            :alt="data.name"
            :src="data.image"
          >
        </fetch-box>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '@/demo/shared/Card'
import Loader from '@/demo/shared/Loader'

export default {
  name: 'RickAndMorty',
  components: {
    Card,
    Loader
  },
  data () {
    return {
      characterId: 1
    }
  },
  methods: {
    generateRandomCharId () {
      // Get random character between Id 1-100.
      this.characterId = Math.floor(Math.random() * 100) + 1
    },
    generateError () {
      // Just some random Id that does not exist
      this.characterId = Math.random()
    },
    logError (error) {
      console.log(error)
    },
    logSuccess (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

.heading {
  @apply font-bold mt-8 mb-4;
}

.button {
  @apply bg-blue-600 text-white p-2 rounded hover:bg-blue-400
}

.box {
  @apply bg-gray-800 text-white shadow-md relative overflow-hidden;
  min-height: 80px;
}

.character {
  @apply flex items-center;
}

.character__image {
  @apply h-20 w-20 object-contain mr-4;
}

.character__name {
  @apply font-bold;
}

.error {
  @apply text-red-600 text-center p-8;
}
</style>
