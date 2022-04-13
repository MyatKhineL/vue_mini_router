<template>
  <div>
      <div class="row">
         <div class="col-12 col-md-4">
           <ul class="list-group">
             <router-link class="list-group-item" :to="{name:'UserProfile',params:{userId}}">User Profile</router-link>
             <router-link class="list-group-item" :to="{name:'UserPosts',params:{userId}}">User Posts</router-link>
             <router-link class="list-group-item" :to="{name:'UserAccount',params:{userId}}">User Account</router-link>

           </ul>
         </div>
        <div class="col-12 col-md-8">
          <router-view v-slot="{Component}">
            <transition name="page" mode="out-in">
              <component :is="Component"></component>
            </transition>
          </router-view>

        </div>
      </div>

  </div>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
  data() {
    return {
        route:useRoute()

    }

  },
  props:['userId'],

}
</script>

<style scoped>

.exact{
  z-index: 2;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

</style>