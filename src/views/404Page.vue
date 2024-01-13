<template>
  <div class="notFound">
    <h1>404 Page</h1>
    <p>This page has not been found, <router-link to="/">click here</router-link> to return back home.</p>
  </div>
</template>

<style>
.notFound {
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'Rubik', sans-serif;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.notFound h1 {
  font-size: 70px;
  padding: 20px;
}

.notFound p {
  font-size: 30px;
}

.notFound a {
  text-decoration: none;
  color: #ADD8E6;
  transition: 0.3s color;
}

.notFound a:hover {
  color: #74d2f1
}
</style>