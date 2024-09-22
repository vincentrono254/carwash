<template>
  <div class="contact-section">
    <h1 class="contact-title">Get in Touch with Us</h1>
    <p class="contact-subtitle">We'd love to hear from you! Reach out with any questions or feedback.</p>

    <!-- Contact Information -->
    <div class="contact-info">
      <div class="info-card">
        <h3 class="info-title">Phone</h3>
        <p class="info-detail">+254799199198</p>
      </div>
      <div class="info-card">
        <h3 class="info-title">Email</h3>
        <p class="info-detail">contact@vincentcarwash.com</p>
      </div>
      <div class="info-card">
        <h3 class="info-title">Postal Address</h3>
        <p class="info-detail">westlands Car Wash Lane, Nairobi city, parklands</p>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="contact-form-section">
      <h2 class="form-title">Send Us a Message</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Your Email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.name}. Your message has been sent!`);
      // Handle form submission logic here (e.g., API call)
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>

<style scoped>
.contact-section {
  padding: 50px;
  text-align: center;
  background-image: url('https://i.pinimg.com/474x/a2/15/68/a21568ff3e8c72bc8fdea23f9ecaa174.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5); /* dark overlay */
}

.contact-title {
  font-size: 3.5rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: transparent;
  background: linear-gradient(90deg, #1abc9c, #16a085);
  -webkit-background-clip: text;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 10px rgba(255, 255, 255, 0.2), 0 20px rgba(0, 0, 0, 0.6);
  }
}

.contact-subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #ecf0f1;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
}

.info-card {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 250px;
}

.info-title {
  font-size: 1.5rem;
  color: #16a085;
  margin-bottom: 10px;
}

.info-detail {
  font-size: 1.1rem;
  color: #34495e;
}

/* Contact Form Styles */
.contact-form-section {
  margin-top: 50px;
}

.form-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #16a085;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-size: 1.2rem;
  color: #ecf0f1;
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  border: 2px solid #16a085;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #1abc9c;
}

textarea {
  height: 150px;
}

.submit-button {
  background-color: #16a085;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #1abc9c;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-info {
    flex-direction: column;
    align-items: center;
  }

  .info-card {
    width: 100%;
    max-width: 300px;
  }

  .contact-title {
    font-size: 2.8rem;
  }

  .form-title {
    font-size: 2rem;
  }

  .submit-button {
    width: 100%;
  }
}
</style>
