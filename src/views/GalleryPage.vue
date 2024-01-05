<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <div class="galleryGrid">
      <a v-for="gallery in gallerys" :key="gallery.id" :href="require('@/assets/' + gallery.path)" target="_blank">
        <img :src="require('@/assets/' + gallery.path)" :title="gallery.name"/>
      </a>
    </div>
  </div>
</template>

<script>
import galleryData from '../data/gallery.js'

export default {
  data(){
    return {
      gallerys: galleryData
    }
  }
}
</script>

<style scoped>
.gallery {
  color: white;
  font-family: 'Rubik', sans-serif;
  margin-top: 60px;
}

.gallery h1 {
  font-weight: 500;
  font-size: 3rem;
}

.galleryGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  row-gap: 32px;
  margin-top: 10px;
}

.galleryGrid a {
  width: max-content;
}

.galleryGrid img {
  width: 320px;
  height: 480px;
  border-radius: 16px;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
  border: 4px solid transparent;
  transition: 0.4s border;
}

.galleryGrid img:hover{
  border: 4px;
  border-style: solid;
  border-color: white;
}

@media only screen and (max-width: 739px) {
  .gallery {
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .galleryGrid {
    width: 330px;
  }
}
</style>