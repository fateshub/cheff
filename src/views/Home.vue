<template>
  <div class="home">
    <Card/>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'Home',
  components: {
    Card,
  },
};
</script>

<style scoped>
.home{
  margin-top: 15vh;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
