<template>
  <div class="k-carousel">
    <div
      class="carousel-slide"
      :style="{ transform: slideStyle(currentIndex) }"
    >
      <div class="carousel-item" v-for="(image, index) in slides" :key="index">
        <img
          :src="slides[currentIndex].backgroundImage"
          
          alt="slideshow image"
          @click="redirectFromSlide(image.onClick)"
        />
        <slot name="slidebox"></slot>     
      </div>
     
    </div>
  </div>

  <button @click="prevSlide" class="prev-button">Previous</button>
  <button @click="nextSlide" class="next-button">Next</button>
</template>

<script>
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useslideStore, ["slides"]),
    ...mapState(useslideStore, ["currentIndex"]),
  },
  methods: {
    redirectFromSlide(url) {
      window.open(url, "_blank");
    },
    slideStyle(index) {
      return `translateX(-${index * 100}%)`;
    },
    ...mapActions(useslideStore, ["prevSlide"]),
    ...mapActions(useslideStore, ["nextSlide"]),
  },
};
</script>

<style scoped>
.k-carousel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.carousel-slide {
  display: flex;
  transition: transform 1.2s;
}

.carousel-item {
   position: relative;
  flex: 0 0 100%;
  text-align: center;
  transform-origin: center;
}
.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 20px;
  background-color: #444;
  color: #fff;
  border: none;
  cursor: pointer;
}
.prev-button {
  left: 10px;
}
.next-button {
  right: 10px;
}
</style>
