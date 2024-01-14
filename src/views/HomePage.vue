<template>
  <div class="header">
    <div class="headContents">
      <h1>Hello, I'm Keyemail or Patrick.</h1>
      <p>
        I specialize in IT and web development-related stuff, but I also love doing a variety of different hobbies such as Flight Simulator, or learning Japanese.
        I daily run an Arch Linux machine as my main system and support Linux in every way. I'm glad to meet you!
      </p>
    </div>
    <img alt="Profile Picture" src="../assets/roller_profile_circle.png">
  </div>
</template>

<style scoped>
.header {
  position: relative;
  color: white;
  height: 100%;
  font-family: 'Rubik', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.headContents {
  height: fit-content;
}

.headContents h1{
  font-weight: 500;
  font-size: 50px
}

.headContents p {
  margin-top: 40px;
  font-weight: 400;
  font-size: 30px;
  width: 900px;
}

.header img {
  width: 400px;
  height: 400px;
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

@media only screen and (max-width: 1376px){
  .workinprogress{
    font-size: 20px;
  }
}

@media only screen and (max-width: 1360px) {
  .header {
    justify-content: center;
    flex-direction: column;
    margin-top: 80px;
  }

  .headContents{
    text-align: center;
  }

  .header img{
    margin-top: 60px;
    width: 350px;
    height: 350px;
    padding-bottom: 60px;
  }
}

@media only screen and (max-width: 990px){
  .headContents p {
    width: auto;
  }
  .workinprogress {
    font-size: 15px;
  }
}

@media only screen and (max-width: 720px) {
  .workinprogress {
    font-size: 10px;
  }
}

@media only screen and (max-height: 720px) {
  .header {
    height: auto;
    margin-top: 100px;
  }
}
</style>