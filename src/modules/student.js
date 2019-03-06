export default {
    namespaced:true,
    state:{
        studentList:[],
    },
    mutations:{
        changeStudent({studentList},{name}){
             if(name){
                studentList.push(name)
             }
         }
    },
    getters:{
        computeStudent({studentList}){
            // console.log(studentList)
            return studentList.map((item, index)=>{if(item){return item + '*'.repeat(index)}})
          }
    },
    actions:{
        setStudent({commit},{name}){
            //   console.log(commit);
              commit('changeStudent',{name})
         }
    }
}