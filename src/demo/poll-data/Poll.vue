<template>
  <div class="p-4">
    <fetch-box
      v-slot="{ data, isLoading }"
      url="https://randomuser.me/api/?results=3"
      poll="5"
    >
      <div>
        <card
          title="Newest members (refreshes every 5 seconds)"
          class="h-auto m-auto"
        >
          <div v-if="data">
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
          </div>

          <loader v-if="isLoading" />
        </card>
      </div>
    </fetch-box>
  </div>
</template>

<script>
import Card from '@/demo/shared/Card'
import Loader from '@/demo/shared/Loader'

export default {
  name: 'Poll',
  components: {
    Card,
    Loader
  }
}
</script>

<style scoped>

</style>
