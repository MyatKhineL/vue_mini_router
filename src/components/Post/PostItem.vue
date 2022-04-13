<template>


    <div class="col-12 col-md-6 col-lg-4 mb-3">
      <div class="card">
        <img src="@/assets/vue-1.png" height="200px">
        <div class="card-body">
          <div class="card-title">Hello Vue</div>
          <p class="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
<!--          <router-link to="/posts/asasds" class="btn btn-primary">Detail</router-link>-->

          <button class="btn btn-success" @click="$router.push('/posts/asas')">Details</button>

        </div>
      </div>
    </div>


</template>

<script>
export default {

}
</script>

<style scoped>

</style>