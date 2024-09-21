<template>
  <div class="app-container">
    <!-- Navbar -->
    <nav class="navbar">
      <router-link class="navbar-brand" to="/home">Vincent Car Wash</router-link>
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['navbar-menu', isNavbarOpen ? 'open' : '']">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main content -->
    <router-view/>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 Vincent Car Wash | All Rights Reserved</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a> | 
          <a href="#">Terms of Service</a> | 
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isNavbarOpen: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  }
};
</script>

<style scoped>
/* Global Color Variables */
:root {
  --primary-color: #1abc9c; /* Soft teal green */
  --secondary-color: #2c3e50; /* Dark slate blue */
  --accent-color: #f39c12;    /* Bright orange accent */
  --text-color: #ffffff;
  --footer-bg: #34495e;
}

/* Navbar Styles */
.navbar {
  background-color: var(--primary-color);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-size: 1.8em;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--text-color);
}

.navbar-toggler {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.navbar-toggler-icon {
  width: 25px;
  height: 3px;
  background-color: var(--text-color);
  display: block;
  margin: 5px 0;
}

.navbar-menu {
  display: none;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 60px;
  right: 30px;
  background-color: var(--primary-color);
  padding: 10px;
  border-radius: 8px;
}

.navbar-menu.open {
  display: flex;
}

.navbar-nav {
  display: flex;
  gap: 25px;
}

.nav-link {
  color: var(--text-color);
  font-size: 1.1em;
  padding: 10px 15px;
  border-radius: 5px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: var(--accent-color);
  color: var(--text-color);
}

/* Footer Styles */
.footer {
  background-color: var(--footer-bg);
  padding: 30px 0;
  text-align: center;
  color: var(--text-color);
  margin-top: 50px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.footer p {
  margin: 0;
  font-size: 14px;
}

.footer-links {
  margin-top: 10px;
}

.footer a {
  color: var(--accent-color);
  text-decoration: none;
  margin: 0 10px;
}

.footer a:hover {
  color: var(--text-color);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .navbar-nav {
    display: none;
  }

  .navbar-menu {
    display: flex;
  }

  .footer {
    padding: 20px 10px;
  }
}
</style>
