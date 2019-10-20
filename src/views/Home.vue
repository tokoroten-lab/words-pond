<template>
  <div class="home">
    <img alt="Words Pond logo" src="../assets/words-pond-logo.svg" width="256">
    <h1>Welcome to Words Pond</h1>
    <p>Words Pond is a web application that helps you learn english words(<router-link to="/about">Click here for details</router-link>)</p>
    <AWSAuthField />
  </div>
</template>

<script>
import AWSAuthField from '@/components/AWSAuthField.vue'

export default {
  name: 'home',
  components: {
    AWSAuthField,
  }
}
</script>
