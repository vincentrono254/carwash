<template>
  <div class="services-container">
    <h1 class="title">Our Services</h1>
    <ul class="services-list">
      <li class="service-item">Basic Wash</li>
      <li class="service-item">Deluxe Wash</li>
      <li class="service-item">Interior Cleaning</li>
      <li class="service-item">Full Detailing</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ServicesComponent",
};
</script>

<style scoped>
/* Container for the services section */
.services-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Title Styling */
.title {
  font-size: 2.5em;
  color: #3498db;
  margin-bottom: 20px;
}

/* Styling for the services list */
.services-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.service-item {
  background-color: #fff;
  margin: 10px 0;
  padding: 15px 20px;
  font-size: 1.3em;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Hover effect for the service items */
.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .title {
    font-size: 2em;
  }

  .service-item {
    font-size: 1.1em;
  }
}
</style>
