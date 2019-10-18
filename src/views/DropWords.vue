<template>
  <div class="drop-words">
    <mdb-container>
      <mdb-row>
        <mdb-col col="12">
          <mdb-input v-model="inputText" type="textarea" label="Input text" outline :rows="3" />
        </mdb-col>
      </mdb-row>
      <BreakingDownPanel v-for="(sentence, index) in brokenDownText.sentences" :key="index" :sentence="sentence" :words="sentence.words" />
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbInput } from 'mdbvue';
import BreakingDownPanel from '@/components/DropWords/BreakingDownPanel.vue';
import nlp from 'compromise'

export default {
  name: 'drop-words',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    BreakingDownPanel,
  },
  data() {
    return {
      inputText: '',
    }
  },
  methods: {
  },
  computed: {
    brokenDownText() {
      let brokenDownText = {
        original: this.inputText,
        sentences: []
      }
  
      let sentences = nlp(this.inputText).sentences().data()
      brokenDownText.sentences = sentences.map(sentence => {
        let words = nlp(sentence.text).terms().data()
        return {
          original: sentence.text,
          normal: sentence.normal,
          words: words.map(word => {
            return {
              original: word.text,
              normal: word.normal
            }
          }),
        }
      })

      return brokenDownText
    },
  },
}
</script>
