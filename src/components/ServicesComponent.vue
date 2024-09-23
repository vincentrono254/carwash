<template>
  <div class="services-section">
    <h1 class="services-title">Our Services</h1>
    <p class="services-subtitle">Premium Car Wash Services for Every Need</p>

    <!-- Services Grid -->
    <div class="services-grid">
      <div v-for="(service, index) in services" :key="index" class="service-card">
        <img :src="service.img" :alt="service.name" class="service-image" />
        <h2 class="service-name">{{ service.name }}</h2>
        <p class="service-description">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceComponent",
  data() {
    return {
      services: [
        {
          name: "Exterior Wash",
          description: "A thorough exterior wash to make your car shine.",
          img: "https://i.pinimg.com/474x/87/34/6d/87346d8d999efb5e0a0be9683da5e3e3.jpg",
        },
        {
          name: "Interior Cleaning",
          description: "Complete interior cleaning for a fresh and clean interior.",
          img: "https://i.pinimg.com/474x/08/6b/a1/086ba1138ee5e04312bf49bf27234a63.jpg",
        },
        {
          name: "Full Detailing",
          description: "A comprehensive detailing service for the ultimate car care.",
          img: "https://i.pinimg.com/564x/39/ae/67/39ae67930e7ace8b3139a38083853bd5.jpg",
        },
        {
          name: "Engine Cleaning",
          description: "Safe and effective engine cleaning to maintain performance.",
          img: "https://i.pinimg.com/474x/89/a4/04/89a404e950574842936f85637a05c7a1.jpg",
        },
        {
          name: "Waxing",
          description: "High-quality waxing for long-lasting shine and protection.",
          img: "https://i.pinimg.com/736x/fa/b6/a5/fab6a5bc655e8d3a0dbdcd5536cb4963.jpg",
        },
        {
          name: "Tire & Rim Shine",
          description: "Make your tires and rims sparkle with our specialized service.",
          img: "https://i.pinimg.com/474x/59/7a/c7/597ac71356967d0583c9e710f75c331b.jpg",
        },
        {
          name: "Underbody Wash",
          description: "Clean and protect the underside of your car from dirt and grime.",
          img: "https://i.pinimg.com/474x/83/65/64/8365645b32537604ae40d5f2fb87e7d8.jpg",
        },
        {
          name: "Glass Cleaning",
          description: "Crystal clear windows and mirrors for better visibility.",
          img: "https://i.pinimg.com/564x/b9/c7/74/b9c77427418aa58493f9286ba1bd1606.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services-section {
  padding: 50px;
  text-align: center;
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(245, 245, 245, 0.8));
}

.services-title {
  font-size: 4rem;
  margin-bottom: 10px;
  color: #2c3e50;
  text-transform: uppercase;
  color: transparent;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow:  0 10px hsl(120, 52%, 71%), 0 20px #1d2322;
  }
}

.services-subtitle {
  font-size: 1.8rem;
  margin-bottom: 40px;
  color: black;
  font-weight: 300;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.service-card {
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

.service-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 15px;
}

.service-name {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #929fac;
}

.service-description {
  font-size: 1.1rem;
  color: #34495e;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .services-title {
    font-size: 2.5rem;
  }

  .services-subtitle {
    font-size: 1.2rem;
  }
}
</style>
