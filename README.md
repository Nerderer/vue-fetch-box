# Vue fetch-box

`fetch-box` is a component for Vue where you simply pass a URL as a prop, and it'll fetch the content for you.
See it as an easy way to do AJAX request without all the manual setup. Great for prototyping or widgets that
requires getting data from an API endpoint.

It will only handle normal GET methods, which makes sense considering how it's used.
Behind the scenes it uses Axios.

It's a renderless component that will return `data`, `isLoading` and `error` as the slot scope.
That's pretty much all you need, really.

How do you use it? Well, import the component as any other Vue component:

```js
import FetchBox from './src/FetchBox'

export default {
  components: {
    FetchBox
  },
}
```

You then wrap your content in a `fetch-box` which you give a URL in the `url` property.
Using the `v-slot` directive you will get the result in `data`.

Important - The `v-slot` directive is used in Vue 2.6 and new versions.
For older versions the syntax is [different.](https://vuejs.org/v2/guide/components-slots.html)

The `url` property is of course reactive, so passing in any new URL will get new data.

So here are some examples. Working examples can be found in the [demo.](https://nerderer.github.io/vue-fetch-box/demo/)

```html
<!-- Example 1 - A very basic example -->

<fetch-box
  v-slot="{ data }"
  url="https://rickandmortyapi.com/api/character/1"
>
  <img
    v-if="data"
    :alt="data.name"
    :src="data.image"
  >
</fetch-box>
```

```html
<!-- Example 2 - Showing a loader while fetching data -->

<fetch-box
  v-slot="{ data, isLoading }"
  url="https://rickandmortyapi.com/api/character/1"
>
  <div>
    <div v-if="data">
      <img
        :alt="data.name"
        :src="data.image"
      >
      <div>
        <div>{{ data.name }}</div>
        <div>{{ data.species }}</div>
        <div>{{ data.origin.name }}</div>
      </div>
    </div>

    <div v-if="isLoading" class="overlay">
      <span class="spinner" />
    </div>
  </div>
</fetch-box>
```

```html
<!-- Example 3 - Showing a loader and showing errors -->

<fetch-box
  v-slot="{ data, isLoading, error }"
  url="https://rickandmortyapi.com/api/character/ERROR"
>
  <div>
    <div v-if="data">
      <img
        :alt="data.name"
        :src="data.image"
      >
      <div>
        <div>{{ data.name }}</div>
        <div>{{ data.species }}</div>
        <div>{{ data.origin.name }}</div>
      </div>
    </div>

    <div v-else-if="error" class="error">
      {{ error.message }}
    </div>

    <div v-if="isLoading" class="overlay">
      <span class="spinner" />
    </div>
  </div>
</fetch-box>
```
