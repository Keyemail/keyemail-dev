<template>
  <div class="projects center">
    <div class="projectTitle">
      <h1>Projects</h1>
      <p>Some cool projects I will post here!</p>
    </div>
    <div class="projectsGrid">
      <ul class="projectsList">
        <li v-for="project in projects" :key="project.id" @click="workinprogress()">
          <div>
            <h1>{{ project.name }}</h1>
            <p>{{ project.description }}</p>  
          </div>
          <img :src="require('@/assets/' + project.photo)"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import projectData from '../data/projects.js'

export default {
  data() {
    return {
      projects: projectData
    }
  },
  methods: {
    workinprogress(){
      alert("Work in progress! Check back soon.");
    }
  }
}
</script>

<style scoped>
.center {
  display: grid;
  grid-template-columns: [breakout-start] 50px 50px [content-start] 1fr [content-end] 50px 50px [breakout-end];
}

.center > * {
  grid-column: content;
}

.projects {
  color: white;
  font-family: 'Rubik', sans-serif;
  margin-top: 60px;
}

.projectTitle { 
  width: 100%
}

.projectTitle h1 {
  font-weight: 500;
  font-size: 3rem;
}

.projectTitle p {
  margin-top: 5px;
  font-size: 1.5rem;
}

.projectsGrid {
  margin-top: 20px;
  width: 100%;
}

.projectsList li {
  display: flex;
  align-items: center;
  margin-top: 9px;
  width: 100%;
  min-height: 210px;
  background-color: #141926;
  border-radius: 15px;
  transition: 0.3s background-color;
  cursor: pointer;
}

.projectsList li:hover {
  background-color:#11151f;
}

.projectsList div {
  width: 90%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
}

.projectsList h1 {
  font-size: 2.5rem;
}

.projectsList p {
  font-size: 1.5rem;
}

.projectsList img {
  width: 170px;
  height: 170px;
  border-radius: 5px;
  justify-self: center;
  margin: 15px;
  object-fit: cover;
  object-position: center;
}

@media only screen and (max-width: 1060px) {
  .center > * {
    grid-column: breakout;
  }
}

@media only screen and (max-width: 660px) {
  .projectsList li {
    min-height: 160px;
  }
  .projectsList h1 {
    font-size: 2rem;
  }
  .projectsList p {
    font-size: 1rem;
  }
  .projectsList img {
    width: 130px;
    height: 130px;
  }
}

@media only screen and (max-width: 430px) {
  .projectsList h1 {
    font-size: 1.5rem;
  }
  .projectsList p {
    font-size: 0.8rem;
  }
}

@media only screen and (max-width: 380px){
  .projectsList img {
    display: none;
  }
}
</style>
