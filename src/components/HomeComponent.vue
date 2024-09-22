<template>
  <div class="hero">
    <!-- Carousel Section -->
    <VueCarousel
      :per-page="1"
      :autoplay="true"
      :loop="true"
      :autoplayTimeout="2000"
      class="carousel"
    >
      <VueCarouselSlide v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" class="carousel-image" />
      </VueCarouselSlide>
    </VueCarousel>

    <!-- Hero Text Section -->
    <div class="hero-content">
      <h1 class="hero-title">Vincent Car Wash</h1>
      <p class="hero-subtitle">Where shine meets perfection.</p>
      <router-link to="/contact" class="cta-button">Book Your Wash</router-link>
    </div>
  </div>
</template>

<script>
import { VueCarousel, VueCarouselSlide } from 'vue-carousel';

export default {
  name: "HomeComponent",
  components: { VueCarousel, VueCarouselSlide },
  data() {
    return {
      images: [
        
        { src: 'https://blackshade.ae/wp-content/uploads/2024/09/Group-6.png', alt: 'Car Wash 2' },
        { src: 'https://blackshade.ae/wp-content/uploads/2024/09/Group-6.png', alt: 'Car Wash 3' },
        { src: 'https://blackshade.ae/wp-content/uploads/2024/09/Group-6.png', alt: 'Car Wash 4' }
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
}

.carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.5s ease-in-out;
}

.carousel-image:hover {
  transform: scale(1.05);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 0 20px;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #bdc1e2, #dad9d6);
  -webkit-background-clip: text;
  color: transparent;
  animation: glow 2s ease-in-out infinite alternate;
  margin-bottom: 20px;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px hsl(120, 27%, 96%), 0 0 20px #12f3d1, 0 0 30px #5512f3, 0 0 40px #f39c12;
  }
 
}

.hero-subtitle {
  font-size: 1.8rem;
  margin-bottom: 30px;
  font-weight: 300;
  color: #ecf0f1;
}

.cta-button {
  display: inline-block;
  padding: 5px 15px;
  background-color:hwb(40 41% 56%);
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 30px;
  box-shadow: 0 10px 15px rgba(201, 121, 112, 0.3);
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #c0392b;
  box-shadow: 0 15px 25px rgba(231, 76, 60, 0.5);
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 10px 25px;
  }
}
</style>
