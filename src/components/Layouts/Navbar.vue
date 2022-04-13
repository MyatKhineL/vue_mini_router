<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Vue Router</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link"  :to="{name:'Home'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'About'}">About</router-link>
          </li>
<!--          <li class="nav-item">-->
<!--            <router-link class="nav-link" :to="'/user/'+uid">Profile</router-link>-->
<!--          </li>-->

          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'UserProfile',params:{userId:uid}}">Profile</router-link>
          </li>


        </ul>
        <h5 class="text-white me-3">{{name}}</h5>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      i    <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

  data() {
    return {
      name:'Mg Mg',
      uid:1232433532,

    }
  },

}
</script>

<style scoped>



</style>