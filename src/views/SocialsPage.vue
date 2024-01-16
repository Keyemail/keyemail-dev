<template>
  <div class="socials">
    <h1>My Socials!</h1>
    <div class="socialsgrid">
      <div class="discord">
        <h2>Discord</h2>
        <p>keyemail</p>
        <i class="fa-brands fa-discord"></i>
      </div>
      <a href="https://github.com/Keyemail" target="_blank">
        <div class="github">
          <h2>GitHub</h2>
          <p>Keyemail</p>
          <i class="fa-brands fa-github"></i>
        </div>
      </a>
      <a href="https://steamcommunity.com/id/keyemail/" target="_blank">
        <div class="steam">
          <h2>Steam</h2>
          <p>Keyemail</p>
          <i class="fa-brands fa-steam"></i>
        </div>
      </a>
      <a href="https://open.spotify.com/user/316yuurxrw3zcprxsnrvgamxktp4" target="_blank">
        <div class="spotify">
          <h2>Spotify</h2>
          <p>Keyemail</p>
          <i class="fa-brands fa-spotify"></i>
        </div>
      </a>
      <a href="https://www.youtube.com/channel/UCCNkKG8XoZCh52vLCbXYy7g" target="_blank">
        <div class="youtube">
          <h2>YouTube</h2>
          <p>Keyemail</p>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </a>
      <a href="https://www.instagram.com/keyemail1?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank">
        <div class="instagram">
          <h2>Instagram</h2>
          <p>keyemail1</p>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-family: 'Rubik', sans-serif;
  height: 100%;
}

.socials h1 {
  margin-bottom: 20px;
  font-size: 50px;
}

.socialsgrid {
  display: grid;
  grid-template-columns: auto auto auto;
  align-content: start;
  grid-gap: 10px;
}

.socialsgrid a {
  color: inherit;
  text-decoration: none;
}

.socialsgrid div{
  margin: 5px;
  width: 275px;
  height: 170px;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-color: white;
  box-sizing: border-box;
  border: 4px solid transparent;
  transition: 0.4s border;
}

.socialsgrid div:hover {
  cursor: pointer;
  border: 4px;
  border-style: solid;
}

.socialsgrid i {
  font-size: 35px;
  margin-top: auto;
  align-self: flex-end;
}

.socialsgrid h2 {
  font-size: 30px;
}
.discord {
  background-color: #5865F2;
}

.github {
  background-color: #171515;
}

.steam {
  background-color: #000000;
}

.spotify {
  background-color: #1DB954;
}

.youtube {
  background-color: #CD201F;
}

.instagram {
  background-color: #C13584;
}

@media only screen and (max-width: 905px){
  .socialsgrid{
    grid-template-columns: auto auto;
  }
}

@media only screen and (max-width: 615px){
  .socialsgrid{
    grid-template-columns: auto;
    width: 80%
  }
  .socials {
    margin-top: 80px;
    justify-content: unset;
  }
  .socialsgrid div {
    width: 100%;
    margin-left: 0px;
  }
}

@media only screen and (max-height: 720px){
  .socials {
    display: flex;
    justify-content: unset;
    margin-top: 80px;
  }
}
</style>