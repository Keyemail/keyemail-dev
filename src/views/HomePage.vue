<template>
  <div class="navbar">
    <h1>Keyemail</h1>
    <ul class="navContents">
      <li><a>Home</a></li>
      <li><a>Gallery</a></li>
      <li><a>Socials</a></li>
    </ul>
  </div>
  <div class="header">
    <div class="headContents">
      <h1>Hello, I'm Keyemail or Patrick.</h1>
      <p>
        I specalize more onto IT and Web Development related stuff, but I also love doing a variety of diffrent hobbies such as Flight Simulator, or learning Japanese.
        I daily run a Arch Linux machine as my main system and support Linux in every way. Im glad to meet you!
      </p>
    </div>
    <img alt="Profile Picture" src="../assets/roller_profile_circle.png">
  </div>
  <div class="workinprogress">
    <h1>-- More is to come soon! Work in progress. --</h1>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');

.navbar{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
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

.navContents li:hover{
  color: #8ee8fc;
}

.header {
  position: relative;
  color: white;
  margin-top: 150px;
  font-family: 'Rubik', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.headContents {
  height: fit-content;
}

.header h1{
  font-weight: 500;
  font-size: 50px
}

.header p {
  margin-top: 40px;
  font-weight: 400;
  font-size: 30px;
  width: 900px;
}

.header img {
  width: 400px;
  height: 400px;
  align-self: flex-end;
  justify-self: center;
}

.workinprogress {
  display: flex;
  justify-content: center;
  margin-top: 200px;
  color: white;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 30px;
}
</style>