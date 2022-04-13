import {createRouter,createWebHistory} from 'vue-router';
import About from '../views/About';
import Home from '../views/Home';
import UserHome from '../User/UserHome';
import UserPosts from '../User/UserPosts';
import UserAccount from "../User/UserAccount";
import UserProfile from "../User/UserProfile";
import ShowCase from "@/views/ShowCase";
import PostDetails from "../components/Post/PostDetails"


let routes = [
    {
        path:"/",
        name:"Home",
        component:Home,
        components:{
            default:Home,
            showCase:ShowCase
        }
    },
    {
        path:"/about",
        name:"About",
        component:About,
        alias:'/about-us'
    },
    {
        path:"/posts/:postId",
        name:"PostDetails",
        component:PostDetails,

    },
    // {
    //     path:"/about-us",
    //     name:"About",
    //     component:About,
    // },
    {
        path:"/user/:userId",
        component:UserHome,
        props:true,
        children:[
            {
                path:"",
                name:"UserProfile",
                component:UserProfile,
            },
            {
                path:"posts",
                name:"UserPosts",
                component:UserPosts
            },
            {
                path:"account",
                name:"UserAccount",
                component:UserAccount
            },
            
            ]
    },


]

let router = createRouter({
    history:createWebHistory(),
    routes:routes,
    linkExactActiveClass:"act",
    linkActiveClass:"exact",
    scrollBehavior(_,_1from,savedPosition){
        if(savedPosition){
            return savedPosition
        }
        return  {top:0}
    }

})

export default router;