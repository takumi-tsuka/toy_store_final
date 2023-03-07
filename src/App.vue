<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Product List</router-link>
        </li>
      </ul>
    </nav>
  </div>

  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
main {
  font-family: 'Walter Turncoat', cursive;
}
</style>
