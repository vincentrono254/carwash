<template>
  <div class="contact-form">
    <h2>Get in Touch</h2>
    <form v-on:submit.prevent="greetUser" class="form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" placeholder="Enter your email" required />
      </div>
      
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea v-model="message" id="message" rows="4" placeholder="Enter your message" required></textarea>
      </div>
      
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      email: "",
      message: "",
    };
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color:whitesmoke;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 1.1em;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="email"]:focus,
textarea:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.4);
}

textarea {
  resize: vertical;
}

.submit-btn {
  padding: 12px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #2980b9;
}
</style>
