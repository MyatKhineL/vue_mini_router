<template>

     <navbar></navbar>

<!--    <ShowCase v-if="$route.name === 'Home'"></ShowCase>-->
  <router-view v-slot="slotProps" name="showCase">
    <transition name="page" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
     <div class="container">
       <router-view v-slot="slotProps">
         <transition name="page" mode="out-in">
           <component :is="slotProps.Component"></component>
         </transition>
       </router-view>

     </div>

</template>

<script>
import Navbar from "@/components/Layouts/Navbar";
import ShowCase from "@/views/ShowCase";
export default {
  components: {ShowCase, Navbar}
}
</script>

<style lang="css">

@import "~bootstrap/dist/css/bootstrap.min.css";

.page-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}

.page-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.page-enter-active,
.page-leave-active{
  transition: all 0.3s linear;
}

</style>