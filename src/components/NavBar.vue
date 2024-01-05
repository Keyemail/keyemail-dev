<template>
  <div class="navbar">
    <h1>Keyemail</h1>
    <ul class="navContents">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/gallery">Gallery</router-link></li>
      <li><router-link to="/socials">Socials</router-link></li>
    </ul>
  </div>
</template>

<style>
.navbar{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  margin-top: 20px;
}

.navbar h1{
  width: fit-content;
}

.navContents {
  list-style: none;
  float: right;
}

.navContents li{
  display: inline;
  cursor: pointer;
  margin-left: 10px;
  font-weight: 400;
  transition: color 0.3s;
}

.navContents a {
  text-decoration: none;
  color: inherit;
}

.navContents li:hover{
  color: #8ee8fc;
}
</style>