<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
      <a class="navbar-brand" href="/"><img src="https://i.postimg.cc/dVSHRBvg/Screenshot-2023-08-19-125250.png" loading="lazy" alt="logo" class="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/"> Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/reviews">Reviews</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/users">Users</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/help">Help</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.nav-item{
  margin-left: 1rem;
}
.navbar{
  background-color: #545454 !important;
  color: white !important;
}
a:hover{
  color:rgb(221, 201, 201) !important;  
}


.logo{
  width: 7rem !important ;
}

</style>