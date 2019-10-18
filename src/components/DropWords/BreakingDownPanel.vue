<template>
  <mdb-card class="mb-4">
    <mdb-card-body>
      <mdb-row>
        <mdb-btn color="primary">{{ sentence.normal }}</mdb-btn>
      </mdb-row>
      <mdb-row>
        <mdb-btn v-for="(word, index) in words" :key="index">
          {{ word.normal }}
        </mdb-btn>
      </mdb-row>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import { mdbRow, mdbCard, mdbCardBody, mdbBtn } from 'mdbvue'

export default {
  name: 'drop-words-breaking-down-panel',
  components: {
    mdbRow,
    mdbCard,
    mdbCardBody,
    mdbBtn,
  },
  props: ['sentence', 'words'],
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.btn {
  text-transform: none;
}
</style>
