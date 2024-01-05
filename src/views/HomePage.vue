<template>
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
    <h1>-- Alpha site. Change is possible. --</h1>
  </div>
</template>

<style scoped>
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
  }

  .headContents{
    text-align: center;
  }

  .header img{
    margin-top: 60px;
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
</style>