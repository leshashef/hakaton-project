<template>

<div class="bar-menu">
   
  <div class="background-menu" :class="{'openbar': active}"> 
    <div class="hidd">
        
    </div>
      <div class="photo-fio">
            <div class ="photo-menu">
                 <img/>
            </div>
        <div class="fio-menu">
          ФИО
        </div>
          </div>
      <div class="punkti-menu">
      <div class="punkt-menu">
        <router-link to ="/profilepage"  class="link-router">  Профиль
        </router-link>
      </div>
      <div class="punkt-menu" >
          Новости
      </div>
      <div class="punkt-menu">
          <router-link to = "/edit-test"  class="link-router">Редактор тестов
          </router-link>
      </div>
      <div class="punkt-menu">
         <router-link to="/listtest"  class="link-router"> Список тестов
         </router-link>
      </div>
      <div class="punkt-menu">
          О приложении
      </div>
      <div class="exit-profile-button">
        <a class="button-exit">
      <span class="button-exitspan">
        Выход
      </span>
       </a>
    </div>
    
    </div>
  </div>


  <button class="button-menu" v-on:click="openBarMenu()">
    <div class="button-polosi">

        <div class="polosa">
        </div>
        <div class="polosa">
        </div>
        <div class="polosa">
        </div>
    </div>
  </button>
   
  </div>


</template>

<script>
export default {

    data()
    {
        return{
            active:false,
              }
    },

    methods:
    {
           openBarMenu:function()
           {
               this.active = !this.active;
               
           }
    },
    computed:
    {
       
    }

 

}
</script>

<style>

</style>