<template>
  <div class="home">
<div class="bg">
  <h1>The <span>Golden</span> Era</h1>
  <h3>"Relive the Glory: <br>
     Embrace the Golden Era of Soccer."</h3>
    </div>    
    <div class="interest">
      <h2 class="feature">Featured Products:</h2>
      <div class="container">
        <div class="row">
      <div class="col">
        <div class=" card card-grid1">
      <a href="/src/views/ProductsView.vue" class="card1">
        <div class="card__bg1" style="background-image: url(https://i.postimg.cc/9Q6jS3vV/Screenshot-2023-08-19-100802.png)"></div>
        <div class="card__content1">
          <h3 class="card__heading1 text-white"></h3>
        </div>
      </a>
      <a href="/src/views/ProductsView.vue" class="card1">
        <div class="card__bg1" style="background-image: url(https://i.postimg.cc/HsFKWw39/Screenshot-2023-08-19-100835.png)"></div>
        <div class="card__content1">
          <h3 class="card__heading1 text-white"></h3>
        </div>
      </a>
      <a href="/src/views/ProductsView.vue" class="card1">
        <div class="card__bg1" style="background-image: url(https://i.postimg.cc/XNGmR1kY/Screenshot-2023-08-19-101020.png)"></div>
        <div class="card__content1">
          <h3 class="card__heading1 text-white"></h3>
        </div>
      </a>
      <a href="/src/views/ProductsView.vue" class="card1">
        <div class="card__bg1" style="background-image: url(https://i.postimg.cc/FsbWvMdN/Screenshot-2023-08-19-101027.png)"></div>
        <div class="card__content1">
          <h3 class="card__heading1 text-white"></h3>
        </div>
      </a>
    </div>
    <br>
  </div>
</div>
</div>
</div>
</div> 

</template>

<script>
  export default {
    
  }
</script>

<style scoped>

.feature{
  color: white  !important;
  padding: 1rem;
  font-weight: bold;
  text-shadow:1.5px 1.5px rgb(191, 191, 191);
}

.bg{
  background-image: url("https://i.postimg.cc/9Q9yDt8W/1193983.png");
  height: 90vh;
  background-repeat: no-repeat;
  width: 100%;
  background-size:cover;
  object-position: center center;
  object-fit: cover;
}

span{
  color: gold;
 text-shadow: 2px 2px rgb(255, 236, 129);

}

h3{
  color: white;
  text-shadow: 1.5px 1.5px rgb(193, 188, 188);
  float: right;
  padding: 1rem;
  margin-top: 18rem;
}

h1{
  color: white;
  text-shadow: 1.5px 1.5px rgb(193, 188, 188);
  float: left;
  padding: 3rem;
  margin-top: 15rem;
}
.home{
  height: 160vh;
}

.card1 {
  list-style: none;
  position: relative;
  transition: all 0.5s ease-out;
}

.interest{
  background-color: #212121;
}

.card-grid1 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  width: 100%;
}
.card__bg1 {
  position: relative;
  height: 50vh;
  min-width: 250px;
  background-size: cover;
  background-position: center center;
  border-radius: 1rem;
  overflow: hidden;
  transform: scale(1);
  transition: all 0.5s ease-out;
}

.card__content1 {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}
.card__category1 {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: #ACACAC;
}
.card1:hover {
  transform: scale(1.02);
  filter: drop-shadow(0px 0px 100px #ACACAC);
}
.card-grid1:hover > .card1:not(:hover).card1 {
  filter: brightness(0.8) grayscale(0.6) contrast(1.2) blur(10px);
}

.card{
  width: 100%;
  border: none;
  margin-top: 3rem;
}

.card{
  background-color: transparent;
}
.img{
  border-radius: 10px;
  width: 50%;
}


@media (max-width:1200px) {
  .card-grid1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    width: 100%;
  }
}
@media (max-width:600px) {
  .card-grid1 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    width: 100%;
  }
}



</style>

