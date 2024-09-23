<template>
  <div class="about-section">
    <div class="about-header">
      <h1 class="about-title">About Us</h1>
      <p class="about-subtitle">Your car's best friend on the road to perfection</p>
    </div>

    <!-- About Content -->
    <div class="about-content">
      <div class="about-image-container">
        <img src="https://i.pinimg.com/474x/eb/bf/7b/ebbf7bec9fff471b83b80314b11d3f73.jpg" alt="About Us" class="about-image" />
      </div>

      <div class="about-text">
        <h2 class="about-heading">Our Story</h2>
        <p class="about-description">
          At <span class="highlight">VincentWash</span>, we believe every car deserves the utmost care and attention. What started as a small
          neighborhood service has blossomed into a trusted name for car enthusiasts everywhere. We are committed to
          delivering top-tier service, from simple washes to full detailing. Our mission is to make your car look and
          feel brand new, every time you visit.
        </p>

        <h2 class="about-heading">Why Choose Us?</h2>
        <p class="about-description">
          We don't just wash cars; we pamper them! Our experienced team uses state-of-the-art tools and eco-friendly
          products to provide your car with a luxury experience. Choose us because:
        </p>

        <ul class="about-list">
          <li>Experienced and friendly staff</li>
          <li>High-quality, eco-friendly products</li>
          <li>Affordable pricing for premium services</li>
          <li>State-of-the-art facilities</li>
        </ul>

        <h2 class="about-heading">Our Promise</h2>
        <p class="about-description">
          We treat every car as if it were our own. At <span class="highlight">SparkleWash</span>, our goal is to give you peace of mind knowing your
          car is in expert hands.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.about-section {
  padding: 50px;
  text-align: center;
  background: linear-gradient(to bottom right, rgba(245, 245, 245, 0.9), rgba(255, 255, 255, 0.8));
}

.about-header {
  margin-bottom: 40px;
}

.about-title {
  font-size: 4rem;
  color: #2c3e50;
  text-transform: uppercase;
  color: transparent;
  animation: glow 2s ease-in-out infinite alternate;
}

.about-subtitle {
  font-size: 1.8rem;
  color: #1abc9c;
  font-weight: 300;
}

.about-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.about-image-container {
  flex: 1;
}

.about-image {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.about-text {
  flex: 2;
  text-align: left;
}

.about-heading {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #6fd09e;
}

.about-description {
  font-size: 1.2rem;
  color: #34495e;
  margin-bottom: 20px;
}

.about-list {
  list-style-type: none;
  padding: 0;
}

.about-list li {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 10px;
  padding-left: 25px;
  position: relative;
}

.about-list li::before {
  content: '✔';
  position: absolute;
  left: 0;
  color: #16a085;
}

.highlight {
  color: #1abc9c;
  font-weight: bold;
}

@keyframes glow {
  from {
    text-shadow: 0 10px hsl(128, 85%, 65%), 0 0 20px #201e1b, 0 0 30px #d35400;
  }
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .about-title {
    font-size: 3rem;
  }

  .about-subtitle {
    font-size: 1.4rem;
  }

  .about-image {
    margin-bottom: 30px;
  }
}
</style>
