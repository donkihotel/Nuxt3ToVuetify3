<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
        <li><NuxtLink to="/card">Card</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px 20px;
}
nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  margin-right: 20px;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
