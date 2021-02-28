# Vue fetch-box

`fetch-box` is a component for Vue where you simply pass a URL as a prop, and it'll fetch the content for you.
See it as an easy way to do AJAX requests without all the manual setup. Great for prototyping or widgets that
requires getting data from an API endpoint.

It will only handle normal GET methods, which makes sense considering how it's used.
Behind the scenes it uses Axios.

It's a renderless component that will return `data`, `isLoading` and `error` as the slot scope props.
That's pretty much all you need, really.

## Demo

[Here is a basic demo.](https://nerderer.github.io/vue-fetch-box)


## Installation

Import the component as any other Vue component:

```js
// For Vue 2
import FetchBox from './src/lib/FetchBox'

// OR for Vue 3
import FetchBox from './src/lib/FetchBox-Vue3'

// Then register it
export default {
  components: {
    FetchBox
  }
}
```

If you want to register it globally:

```js
Vue.component('FetchBox', FetchBox)
```

## Usage

After installation wrap your content in a `fetch-box` which you give a URL in the `url` property.
Using the `v-slot` directive you will get the result in `data`.

_Important - The `v-slot` directive is used in Vue 2.6 and new versions.
For older versions the syntax is [different.](https://vuejs.org/v2/guide/components-slots.html)_

The `url` property is of course reactive, so passing in any new URL will get new data.


## Examples

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

## Events

You can listen to `success` and `error` events on the component.
This is useful if you want to do something with the data outside of the component, like logging errors.

```html
<!-- Example 4 - Events -->

<fetch-box
  v-slot="{ data }"
  url="https://rickandmortyapi.com/api/character/1"
  @error="logError"
  @success="logSuccess"
>
  <img
    v-if="data"
    :alt="data.name"
    :src="data.image"
  >
</fetch-box>
```

## API

| Component props  | Description       |
| ---------------- | ----------------- |
| `url`            | The requested url |

| Slot scope props | Description                                  |
| ---------------- |----------------------------------------------|
| `data`           | The response data after a successful request |
| `error`          | Any returned error while fetching data       |
| `isLoading`      | The loading state while doing the request    |

| Events           | Description                         | Data              |
| ---------------- | ----------------------------------- | ----------------- |
| `success`        | Event after a successful request    | The response data |
| `error`          | Event after an unsuccessful request | The error         |


## Vue compatibility

Vue fetch-box works with Vue 2 and Vue 3. Just make sure to import the matching version of Vue fetch-box, 
as there is one file for Vue 2 and another for Vue 3.

## Dependencies

Vue fetch-box requires Vue 2 or 3 and Axios to work.
