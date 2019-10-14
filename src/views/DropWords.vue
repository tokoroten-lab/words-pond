<template>
  <div class="drop-words">
    <mdb-container>
      <mdb-row>
        <mdb-col col="12">
          <mdb-input v-model="inputText" type="textarea" label="Input text" outline :rows="3" />
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col col="12">
          <mdb-btn v-for="(sentence, idx) in sentencesList" :key="idx" :color="sentence.isCompleted ? 'primary' : ''">
          {{ sentence.spelling }}
          </mdb-btn>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col col="12">
          <mdb-btn v-for="(word, idx) in wordsList" :key="idx" :color="word.isCompleted ? 'secondary' : ''">
            {{ word.spelling }}
          </mdb-btn>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    </div>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbBtn } from 'mdbvue';

export default {
  name: 'drop-words',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbBtn,
  },
  data: function() {
    return {
      inputText: '',
    }
  },
  methods: {
    normalizeText: function(text) {
      let normalizedText = text
      let replaceRulesList = [
        {
          pattern: /\r|\n|\r\n/g,
          replaced: '<WordsPondNewLine>'
        },
        {
          pattern: /^\s+|\s+$/g,
          replaced: ''
        },
        {
          pattern: /\s+/g,
          replaced: ' '
        },
        {
          pattern: /<WordsPondNewLine>/g,
          replaced: '\n'
        }
      ]

      replaceRulesList.forEach(rule => {
        normalizedText = normalizedText.replace(rule.pattern, rule.replaced)
      })

      return normalizedText
    },
  },
  computed: {
    sentencesList: function() {
      let normalizedText = this.normalizeText(this.inputText)
      let sentence = ''
      let sentencesList = []
      let sentenceEndCharsList = ['.', '!', '?', '\n']

      for (let i = 0; i < normalizedText.length; ++i) {
        let currentChar = normalizedText[i]
        sentence += currentChar
        if (sentenceEndCharsList.includes(currentChar)) {
          if (!sentenceEndCharsList.includes(sentence) && /[a-zA-z]+/.test(sentence)) {
            sentence = sentence.trim()
            if (!sentencesList.includes(sentence)) {
              sentencesList.push({ spelling: sentence, isCompleted: true })
            }
          }
          sentence = ''
        }
      }

      if (sentence.length > 0) {
        sentencesList.push({ spelling: sentence, isCompleted: false })
      }

      return sentencesList
    },
    wordsList: function() {
      let wordsList = []

      this.sentencesList.forEach(sentence => {
        let words = sentence.spelling.replace(/[,\(\)\.!?]/g, ' ').split(' ').filter(word => /^[a-zA-z]+$/.test(word))
        words.forEach((word, idx) => {
          wordsList.push({
            spelling: word,
            isCompleted: sentence.isCompleted || idx !== words.length - 1
          })
        })
      })

      return wordsList 
    }
  },
}
</script>

<style scoped>
.btn {
  text-transform: none;
}
</style>
