import FetchBox from './FetchBox'

export default {
  extends: FetchBox,
  emits: ['success', 'error'],
  render () {
    return this.$slots.default({
      isLoading: this.isLoading,
      data: this.data,
      error: this.error
    })
  }
}
