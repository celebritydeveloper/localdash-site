<template>
  <Layout>
    <h1>{{ $context.id }}</h1>
    <div v-html="$context.title"></div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
