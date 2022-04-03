<template>
<div class="list-tests-page">

<div class="list-tests-page-main">


    <div class="page-main-left-side">
        <div class="title-left-side">
            IT-Trend
        </div>

        <div class="title-test-left-side">
            Название теста
        </div>

        <div class="div-all-test-title-left-side">
             <div class="all-test-title-left-side">
                Выберите тест из предложенных
             </div>
        </div>

        </div>
    
    <div class="page-main-right-side">
    </div>
  
</div>


          <div class="list-tests-footer">

              <button class="left-arrow-footer">
                  5
              </button>

            <div class="list-tests-test">
                <div class="list-tests">
                    <div class="test">
         <img class="list-tests-img-test">
         <div class="list-tests-title-test">
             Название 
         </div>
         <div class="div-who-made">
             <div class="list-test-sign-who-made-test">
                 by
               
             </div>
              <div class="list-test-title-who-made-test">
             
                   
              </div>
                 </div>
         </div>

          <div class="test">
         <img class="list-tests-img-test">
         <div class="list-tests-title-test">
             Название 
         </div>
         <div class="div-who-made">
             <div class="list-test-sign-who-made-test">
               by
             </div>
              <div class="list-test-title-who-made-test">
             
                     
              </div>
                 </div>
         </div>

         
                </div>
            </div>

             <button class="right-arrow-footer">
                  5
              </button>
      </div>
      <nav-bar/>
</div>

    
</template>

<script>
/*import AboutPage from './AboutPage.vue';*/
import NavBar from '../components/NavBar.vue';
export default {
  components: { NavBar },
    data(){
        return{
            listTest:[]
        }
    },
    created(){
        this.getList();
    },
    methods:{
        async getList(){
            let response = await fetch("https://localhost:7101/api/ListTest",
            {
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
            }
            );

            if (response.ok) { // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
            let json = await response.json();
            console.log(json);
            } else {
            alert("Ошибка HTTP: " + response.status);
            }
        },
    }
}
</script>

<style>

</style>