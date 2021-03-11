import axios from 'axios'

export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    poll: {
      type: [Number, String],
      default: null
    }
  },
  data () {
    return {
      isLoading: false,
      data: null,
      error: null,
      pollInterval: null
    }
  },
  watch: {
    url: {
      handler () {
        this.doRequest()
      },
      immediate: true
    },
    poll: {
      handler (value) {
        const seconds = parseFloat(value)

        if (seconds) {
          this.pollInterval = setInterval(() => {
            this.doRequest()
          }, seconds * 1000)
        } else {
          clearInterval(this.pollInterval)
        }
      },
      immediate: true
    }
  },
  destroyed () {
    clearInterval(this.pollInterval)
  },
  methods: {
    doRequest () {
      this.isLoading = true

      axios
        .get(this.url)
        .then((response) => {
          this.data = { ...response.data }
          this.error = null
          this.$emit('success', response.data)
        })
        .catch((error) => {
          this.data = null

          if (error.response) {
            this.error = { ...error.response.data }
            this.$emit('error', error.response.data)
          } else {
            this.error = error
            this.$emit('error', error)
          }
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  render () {
    return this.$scopedSlots.default({
      isLoading: this.isLoading,
      data: this.data,
      error: this.error
    })
  }
}
