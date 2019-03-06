import Vue from 'vue'
import Vuex from 'vuex'
import course from '@/modules/course'
import student from '@/modules/student'

Vue.use(Vuex)
// const course = {
//     namespaced:true,
//     state: {
//         courseList: [
//           {
//               name: 'Web前端开发之JavaScript(Js)精英课堂【渡一教育】',
//               price: 9.9,
//               poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBsSud06XlZnJACsTWd7OSA5phIFPRTNibFBeuT8jRjy00Jb5ticSEKYUnpUYdBCicH2U/356'
//           },
//           {
//               name: 'Web前端开发之HTML+CSS精英课堂【渡一教育】',
//               price: 68,
//               poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBDFLdArBwf70PjMrL6bq0OI9LesEsskk1iamJKibriaic0QkBZhINoDuN0DicaojkqyQjk/356'
//           },
//           {
//               name: '淘宝商城项目实战开发【渡一教育】',
//               price: 398,
//               poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDBpXKL1sgAOKcbSz0Od2abiaqdJibiaDDQWfmrVNBCFrIpbTQKlNyWbPg5Uo1dnT7Znk/356'
//           },
//           {
//               name: '零基础WEB前端入门',
//               price: 9.9,
//               poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCRlDgtxVbmyclxP9fDUYmnuqAFbN5mYsncrPrVyQbtA3fNfuZ3qicSe1r7Ppt7tICs/356'
//           },
//           {
//               name: 'React顶级企业实战，全流程制作淘票票WebApp【渡一教育】',
//               price: 399,
//               poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLB2CyXIxsb8iaAUibBB9mzlkSgKNU7GiciaYxG1SicoLjkiahZ3ia54eZWbtCGDkFyvMo0uKk/356'
//           },
//           {
//               name: '原生JS贪吃蛇游戏实战开发【渡一教育】',
//               price: 19,
//               poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCfsOGnxjhUXFA6SHMOu0fMUicuucRlIVNo9zBnnLiacovMnePD6586QlRj2qvwudbn8/356'
//           },
//           {
//               name: '原生JS扫雷游戏实战开发【渡一教育】',
//               price: 38,
//               poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDaTljUSVGk2eqS1MCT3DwDqxgs7KhfMf3411SXQkRvmiaicIuz47ydO27zGPWK97wicw/356'
//           },
//           {
//               name: '你不知道的Javascript【渡一教育】',
//               price: 55,
//               poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCelo2lyibtrxDia7aq7tC0LE1Lcz2LVoDqhQy5tnOHicTzWhLuvPekL35rEmwTdgNuwI/356'
//           }
//         ]
//     },
    
//     mutations: {
//         computedCourse({courseList}){
//           let seatCourse = {
//              name: '此课程为占位课程敬请期待',
//              price: 0,
//              poster: 'http://10.url.cn/eth/ajNVdqHZLLDyKsm3vcfLJV6NuWT4Lzkjqd4YLibuEYcicichFJThL0cuBZxrQg7bVWfo2b47bk40YA/'
//          }
//          let len = courseList.length % 3 != 0
//          for(let i = 0 ;i < len ;i++){
//              courseList.push(seatCourse)
//          }
//          console.log(courseList)
//        },
//         alterCourse({courseList},{title,price,index}){
//           courseList[index].name = title;
//           courseList[index].price = price;
          
//         }
//     },
// }

// const student = {
//     namespaced:true,
//     state:{
//         studentList:[],
//     },
//     mutations:{
//         changeStudent({studentList},{name}){
//              if(name){
//                 studentList.push(name)
//              }
//          }
//     },
//     getters:{
//         computeStudent({studentList}){
//             // console.log(studentList)
//             return studentList.map((item, index)=>{if(item){return item + '*'.repeat(index)}})
//           }
//     },
//     actions:{
//         setStudent({commit},{name}){
//             //   console.log(commit);
//               commit('changeStudent',{name})
//          }
//     }
// }
export default new Vuex.Store({
  modules:{
      course,
      student
  },
//   state: {
//       studentList:[],
//       courseList: [
//         {
//             name: 'Web前端开发之JavaScript(Js)精英课堂【渡一教育】',
//             price: 9.9,
//             poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBsSud06XlZnJACsTWd7OSA5phIFPRTNibFBeuT8jRjy00Jb5ticSEKYUnpUYdBCicH2U/356'
//         },
//         {
//             name: 'Web前端开发之HTML+CSS精英课堂【渡一教育】',
//             price: 68,
//             poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBDFLdArBwf70PjMrL6bq0OI9LesEsskk1iamJKibriaic0QkBZhINoDuN0DicaojkqyQjk/356'
//         },
//         {
//             name: '淘宝商城项目实战开发【渡一教育】',
//             price: 398,
//             poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDBpXKL1sgAOKcbSz0Od2abiaqdJibiaDDQWfmrVNBCFrIpbTQKlNyWbPg5Uo1dnT7Znk/356'
//         },
//         {
//             name: '零基础WEB前端入门',
//             price: 9.9,
//             poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCRlDgtxVbmyclxP9fDUYmnuqAFbN5mYsncrPrVyQbtA3fNfuZ3qicSe1r7Ppt7tICs/356'
//         },
//         {
//             name: 'React顶级企业实战，全流程制作淘票票WebApp【渡一教育】',
//             price: 399,
//             poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLB2CyXIxsb8iaAUibBB9mzlkSgKNU7GiciaYxG1SicoLjkiahZ3ia54eZWbtCGDkFyvMo0uKk/356'
//         },
//         {
//             name: '原生JS贪吃蛇游戏实战开发【渡一教育】',
//             price: 19,
//             poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCfsOGnxjhUXFA6SHMOu0fMUicuucRlIVNo9zBnnLiacovMnePD6586QlRj2qvwudbn8/356'
//         },
//         {
//             name: '原生JS扫雷游戏实战开发【渡一教育】',
//             price: 38,
//             poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDaTljUSVGk2eqS1MCT3DwDqxgs7KhfMf3411SXQkRvmiaicIuz47ydO27zGPWK97wicw/356'
//         },
//         {
//             name: '你不知道的Javascript【渡一教育】',
//             price: 55,
//             poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCelo2lyibtrxDia7aq7tC0LE1Lcz2LVoDqhQy5tnOHicTzWhLuvPekL35rEmwTdgNuwI/356'
//         }
//       ]
//   },
//   mutations: {
//       changeStudent(state,{name}){
//           // console.log(11)
//           if(name){
//             state.studentList.push( name )
//           }
//       },
//       computedCourse({courseList}){
//         let seatCourse = {
//            name: '此课程为占位课程敬请期待',
//            price: 0,
//            poster: 'http://10.url.cn/eth/ajNVdqHZLLDyKsm3vcfLJV6NuWT4Lzkjqd4YLibuEYcicichFJThL0cuBZxrQg7bVWfo2b47bk40YA/'
//        }
//        let len = courseList.length % 3 != 0
//        for(let i = 0 ;i < len ;i++){
//            courseList.push(seatCourse)
//        }
//      },
//       alterCourse({courseList},{title,price,index}){
//         courseList[index].name = title;
//         courseList[index].price = price;
        
//       }
//   },
//   getters:{
//     computeStudent(state){
//         return state.studentList.map((item, index)=>item + '*'.repeat(index))    
//     }
//   },
//   actions: {
//      setStudent(store,{name}){
//         store.commit('changeStudent',{name})
//      }
//   }
})
