<template>
  <div class="navbar">
    <h1>Keyemail</h1>
    <ul class="navContents" v-if="!(isMobile() || smallScreen)">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/gallery">Gallery</router-link></li>
      <li><router-link to="/socials">Socials</router-link></li>
    </ul>
    <div class="mobileNavButton" v-else>
      <i class="fa-solid fa-x" @click="mobileUI(); handleResize();" v-if="turnOnMobileUI"></i>
      <i class="fas fa-bars" @click="mobileUI();" v-else></i>
    </div>
  </div>
  <div class="mobileNav" v-if="turnOnMobileUI">
    <div class="mobileNavContents">
      <ul>
        <li><router-link to="/" @click="mobileUI()">Home</router-link></li>
        <li><router-link to="/gallery" @click="mobileUI()">Gallery</router-link></li>
        <li><router-link to="/socials" @click="mobileUI()">Socials</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      turnOnMobileUI: false,
      smallScreen: false
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    mobileUI() {
      if(this.turnOnMobileUI == false) {
        this.turnOnMobileUI = true;
        document.body.style.overflow = 'hidden';
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        this.turnOnMobileUI = false;
        document.body.style.overflow = 'auto';
      }
    },
    isMobile(){
       return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
    handleResize() {
      if(window.innerWidth < 450) {
        this.smallScreen = true;
      } else if(this.turnOnMobileUI === true) {
        return;
      } else {
        this.smallScreen = false;
      }
    }
  }
}
</script>

<style scoped>
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
  z-index: 10;
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

.mobileNavButton {
  z-index: 10;
}

.mobileNavButton i {
  float: right;
  font-size: 35px;
  cursor: pointer;
  transition: 0.3s color;
}

.mobileNavButton i:hover {
  color: #74d2f1;
}

.mobileNav {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  left: 0;
  top: 0;
  z-index: 9;
}

.mobileNav i {
  float: right;
  font-size: 35px;
  cursor: pointer;
  transition: 0.3s color;
}

.mobileNavContents {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.mobileNavContents li {
  cursor: pointer;
  margin-left: 10px;
  font-weight: 400;
  transition: color 0.3s;
  font-size: 40px;
  text-align: center;
  font-family: 'Rubik', sans-serif;
  margin: 10px;
}

.mobileNavContents a {
  color: white;
  text-decoration: none;
  transition: 0.3s color;
}

.mobileNavContents a:hover {
  color: #74d2f1;
}
</style>