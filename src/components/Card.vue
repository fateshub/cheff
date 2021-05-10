<template >
    <div class="Card">
        <h2 class="Card-Name">{{food.name}}</h2>
        <div class="Card-line"></div>
        <div class="Card-info"></div>
        <div class="Card-Overlay"></div>
        <img class="Card-img" :src='food.img'>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Card',
  setup() {
    const store = useStore();
    const food = computed(() => store.state.food);
    return {
      food,
    };
  },
};
</script>
<style>
.Card{
    position: relative;
    width: 20em;
    height: 35em;
    background-color: #41729F;
    border-radius: 0.5em;
    box-shadow: 5px 5px 4px rgb(77, 77, 77);
}

.Card-Overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 20em;
    height: 25em;
    z-index: 10;
background: linear-gradient(0deg, rgba(65,114,159,1) 10%, rgba(0,212,255,0) 100%);
}

.Card-img{
    position: absolute;
    top: 0;
    left: 0;
    border-top-right-radius: 0.5em;
    border-top-left-radius: 0.5em;
    width: 20em;
    height: 25em;
    object-fit:cover;

}

.Card-Name{
    position: absolute;
    top: 15em;
    left: 0.5em;
    z-index: 20;
    color: white;
}
.Card-info{
    z-index: 20;
}

.Card-line{
    position:absolute;
    top:26em;
    left: 0.5em;
    height: 2px;
    width: 12em;
    background: linear-gradient(90deg, rgba(255,255,255,1) 30%, rgba(0,212,255,0) 100%);
    z-index: 30;
}
</style>
