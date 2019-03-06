import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Information from './components/Information'
import About from './views/About'
import Course from './views/Course'
import Community from './views/Community'
import Students from './views/Students'
import Talk from './components/Talk'
import Source from './components/Source'
// import Personal from './components/Personal'
// import Question from './components/Question'
// import Err from './components/Err'
const Question = () => import('./components/Question')
const Personal = () => import('./components/Personal')
const Err = ()=> import('./components/Err')
const Alter = () => import('./components/course/changeCourse')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  linkExactActiveClass:'exact',
  routes: [
    {
      path: '/home.html',
      name: 'home',
      components: {
        default:Home,
        'information':Information
      }
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path:'/students',
      name:'students',
      component:Students
    },
    {
      path:'/course',
      name:'course',
      component:Course
    },
    {
      path:'/course/alter',
      name:'alter',
      component:Alter
    },
    {
      path:'/community',
      name:'community',
      component:Community,
      meta:{islogin : false},
      redirect:'/community/talk',
      // beforeEnter(to, from, next){
      //    let key = confirm('请先登入');
      //    if(key){
      //      next()
      //    }else{
      //      return
      //    }
      // },
      children:[
        {
           path:'talk',
           name:'talk',
           component:Talk,
        },
        {
           path:'source',
           name:'source',
           component:Source
        },
        {
           path:'personal',
           name:'personal',
           component:Personal
        }
      ]
    },
    {
      path:'/err.html',
      name:'err',
      component:Err
    },
    {
      path:'*',
      component:Home,

      redirect(to){
        //  console.log(to)
         if(to.path == '/'){
          //  console.log('11')
           return '/home.html'
         }else{
           return '/err.html'
         }
      }
    },
    {
      path:'/questions/:id',
      name:'questions',
      component:Question
    }
  ]
})

// router.beforeEach((to,from,next)=>{
//   console.log(to,from)
//   if(to.path === '/community/talk'){
//     // console.log(window)
//     let key = confirm('请先登入，才能进社区');
//     if(key){
//       next('community/personal')
//     }else{
//       next(false)
//     }
//   }else{
//     next()
//   }
//   // next()
// })

export default router
