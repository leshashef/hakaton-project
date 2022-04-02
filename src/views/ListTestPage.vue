<template>
<div class="list-tests-page">

    <div class="list-tests-background-left-side">

        <div class="registration-button-menu">
            <div class="registration-button-menu-part1">
            </div>
            <div class="registration-button-menu-part2">
            </div>
             <div class="registration-button-menu-part3">
            </div>
        </div>

        <div class="list-tests-title-left-side">
            IT-Trend
        </div>

      <div class="list-tests-title-background-left-side"> 
       Название теста
      </div>

      <div class="list-tests-choise-test-title-left-side">
        Выберите один из предложенных тестов
      </div>
      



    </div>

    <div class="list-tests-background-right-side">

    </div>

  
        
        </div>

          <div class="list-tests-footer">

            <div class="list-tests-test">
         <img class="list-tests-img-test" ref="/img/img/Clogo.png">
         <div class="list-tests-title-test">
             Название теста
         </div>
             <div class="list-test-sign-who-made-test">
               
             </div>
              <div class="list-test-title-who-made-test">
             
                     Создал:
                 </div>
            </div>
      </div>

    
</template>

<script>
import AboutPage from './AboutPage.vue';
export default {
  components: { AboutPage },
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