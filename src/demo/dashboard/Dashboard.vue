<template>
  <div class="p-4 min-h-full">
    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
      <fetch-box
        v-slot="{ data }"
        url="https://randomuser.me/api/?results=3"
      >
        <card
          v-if="data"
          title="Latest profiles"
        >
          <div
            v-for="user in data.results"
            :key="user.login.uuid"
            class="py-5 px-4 flex border-b"
          >
            <img
              class="mr-4 rounded"
              :src="user.picture.thumbnail"
              alt=""
            >
            <div>
              <p class="text-gray-700">
                {{ user.name.first }} {{ user.name.last }}
              </p>
              <p class="text-gray-500 text-sm">
                {{ user.location.country }}
              </p>
            </div>
          </div>
        </card>
      </fetch-box>

      <fetch-box
        v-slot="{ data }"
        url="http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today"
      >
        <card
          v-if="data"
          :title="data.weekday.toUpperCase()"
        >
          <div class="text-center pt-24 text-4xl">
            {{ data.date }}
          </div>
        </card>
      </fetch-box>

      <fetch-box
        v-slot="{ data }"
        url="https://aws.random.cat/meow"
      >
        <card>
          <img
            v-if="data"
            :src="data.file"
          >
        </card>
      </fetch-box>
    </div>
  </div>
</template>

<script>
import Card from '@/demo/shared/Card'

export default {
  name: 'Dashboard',
  components: {
    Card
  }
}
</script>

<style scoped>

</style>
