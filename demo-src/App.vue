<template>
  <div
    id="app"
    class="demo"
  >
    <h2>Demo</h2>

    <button
      class="button"
      @click="generateRandomCharId"
    >
      Get random character
    </button>

    <button
      class="button"
      @click="generateError"
    >
      Get error
    </button>

    <h4>Example 1 - A very basic example:</h4>

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

    <h4>Example 2 - Showing a loader while fetching data:</h4>

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

        <div
          v-if="isLoading"
          class="overlay"
        >
          <span class="spinner" />
        </div>
      </div>
    </fetch-box>

    <h4>Example 3 - Showing a loader and showing errors:</h4>

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
          {{ error.message }}
        </div>

        <div
          v-if="isLoading"
          class="overlay"
        >
          <span class="spinner" />
        </div>
      </div>
    </fetch-box>
  </div>
</template>

<script>
import FetchBox from '@/FetchBox'

export default {
  name: 'App',
  components: {
    FetchBox
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
    }
  }
}
</script>

<style scoped>
.demo {
  background: #fff;
  padding: 32px;
  border: 1px solid #ddd;
  margin: 0 auto;
  max-width: 400px;
  border-radius: 12px;
  font-family: sans-serif;
  box-shadow: 2px 5px 16px 0 #999;
}

.demo h2 {
  margin-top: 0;
}

.demo h4:not(:first-of-type) {
  margin-top: 48px;
}

.button {
  border: 0;
  background: blue;
  color: white;
  padding: 4px 8px;
  margin-bottom: 16px;
  margin-right: 8px;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  opacity: 0.7;
}

.box {
  background: #2d3039;
  color: #fff;
  border-radius: 12px;
  box-shadow: 2px 5px 16px 0 #999;
  min-height: 80px;
  position: relative;
  overflow: hidden;
}

.character {
  display: flex;
  align-items: center;
}

.character__image {
  height: 80px;
  width: 80px;
  object-fit: contain;
  margin-right: 16px;
}

.character__name {
  font-weight: bold;
}

.overlay {
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}

.error {
  text-align: center;
  color: red;
  padding: 32px;
}
</style>
