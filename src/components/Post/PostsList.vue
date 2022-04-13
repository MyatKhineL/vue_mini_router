<template>
  <div>
        <h2>{{title}}</h2>
        <div class="row">
          <post-item></post-item>
          <post-item></post-item>
          <post-item></post-item>



        </div>
  </div>
</template>

<script>
import PostItem from "@/components/Post/PostItem";
export default {
  components: {PostItem},
  props: {
    title: {
      type:String,
      default:"Uploaded Posts"
    },
  },
}
</script>

<style scoped>

</style>