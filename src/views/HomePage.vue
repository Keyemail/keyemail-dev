<template>
  <header>
    <a class="pfp" href="https://www.pixiv.net/en/artworks/118037520">
      <img src="@/assets/profile.jpg"/> 
    </a> 
    <h1>Keyemail</h1>
  </header>
  <div class="section-row">
    <div class="intro">
      <h1>Hi, I'm Keyemail or Patrick.</h1>
      <p>I specialize in IT and web development-related stuff, but I also love doing a variety of different hobbies such as Flight Simulator, or learning Japanese. I daily run an Arch Linux machine as my main system and support Linux in every way. I'm glad to meet you! </p>
    </div>
    <article>
      <h1>Comments! Please leave one!</h1>
      <div>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello! this is a very long text thats suppose to take the entire screen so we can see how it handles mutiple if not triple the amount of lines it suppose to use.</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>
	<span>Me: Hello!</span>	
      </div>
      <input type="text" placeholder="Start Typing.." required minlength="1"/>
    </article>
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-image: url(@/assets/banner_website.avif);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 20%;
  height: 180px;
  width: 100%;
  background-color: #0df;
  border-radius: 10px;
  font-family: 'Rubik', sans-serif;  
}

header h1 {
  color: white;
  margin-left: 20px;
  font-size: 3rem; 
  -webkit-text-stroke: 1px black;
}

.pfp {
  height: 130px !important;
  width: 130px !important;
  border: solid;
  border-width: 4px;
  border-radius: 50%;
  border-color: white;
  overflow: hidden;
  margin-left: 20px;
}

.pfp img {
  width:100%;
  height:100%;
  object-fit: cover;
  background-color: #afb5c8
}

.section-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.intro {
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  width: 750px;
  color: white;
  font-family: 'Rubik', sans-serif;
  background-color: #151d2f;
  border-radius: 10px;
  padding: 20px;
}

.intro h1 {
  font-size: 3.5rem;
  font-weight: 500;
  text-align: left;
}

.intro p {
  margin-top: 15px;
  font-size: 1.8rem;
  font-weight: 400;
  text-align: left;
  max-width: 1200px;
}

article {
 background-color: #151d2f;
 height: 350px;
 width: 630px;
 margin: 90px 0;
 border-radius: 10px;
 padding: 20px;
}

article h1 {
  font-size: 1.5rem;
  color: white;
  font-family: 'Rubik', sans-serif;
  width: 100%;
  text-align: center;
}

article div {
  color: white;
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  margin-top: 10px;
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
  max-height: 240px;
  background-color: #111826;
  padding: 10px;
  border-radius: 10px;
}

article span {
  margin: 8px 0;
}

article input {
  all: unset;
  margin-top: 10px;
  background-color: #111826;
  height: 40px;
  color: white;
  padding: 5px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}

@media screen and (max-width: 450px){
  header {
    flex-direction: column;
    height: 240px;
    justify-content: center;
  }
  header h1 {
    margin-left: 0px;
  }
  .intro h1 {
    font-size: 3rem;
  }
  .intro p {
    font-size: 1.8rem;
  }
  .pfp{
    margin-left: 0px;
  } 
}
</style>
