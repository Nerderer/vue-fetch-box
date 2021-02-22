import axios from 'axios'

export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isLoading: false,
      data: null,
      error: null
    }
  },
  watch: {
    url: {
      handler () {
        this.doRequest()
      },
      immediate: true
    }
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
          this.error = { ...error }
          this.$emit('error', error)
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
