<template>
  <div class="app-container">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/home">Vincent Car</router-link>
        <button class="navbar-toggler" type="button" @click="toggleNavbar">
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
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
  background-color:#919497;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.navbar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.navbar-toggler-icon {
  width: 25px;
  height: 3px;
  background-color: var(--text-color);
  margin: 4px 0;
}

.navbar-menu {
  position: absolute;
  top: 60px;
  right: 0;
  background-color: var(--primary-color);
  padding: 10px;
  border-radius: 8px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  transition: max-height 0.3s ease;
  max-height: 0;
  overflow: hidden;
}

.navbar-menu.open {
  display: flex;
  max-height: 300px;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
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

/* Responsive Styles for Large Screens */
@media (min-width: 992px) {
  .navbar {
    padding: 20px 50px;
   
  }
  .navbar-header {
    flex-basis: 20%;
  }
  .navbar-brand {
    font-size: 2.2em;
  }
  .navbar-toggler {
    display: none;
  }
  .navbar-menu {
    position: relative;
    top: 0;
    right: 0;
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: none;
    transition: none;
  }
  .navbar-nav {
    flex-direction: row;
    gap: 20px;
  }
}

/* Footer Styles */
.footer {
  background-color: var(--footer-bg);
  color: var(--text-color);
  padding: 20px 30px;
  text-align: center;
}

.footer-links {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.footer-links a {
  color: var(--text-color);
  text-decoration: none;
}

.footer-links a:hover {
  color: var(--accent-color);
}

/* Responsive Footer for Small Screens */
@media (max-width: 600px) {
  .footer-links {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
