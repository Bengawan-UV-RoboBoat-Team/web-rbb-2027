<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const renderMath = () => {
  if (window.MathJax && window.MathJax.typeset) {
    window.MathJax.typeset()
  }
}

onMounted(() => {
  setTimeout(renderMath, 0)
})

watch(() => route.fullPath, () => {
  setTimeout(renderMath, 0)
})
</script>
