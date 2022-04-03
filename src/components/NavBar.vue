<template>

<div class="bar-menu">
   
  <div class="background-menu" :class="{'openbar': active}"> 
    <div class="hidd">
        
    </div>
      <div class="photo-fio">
            <div class ="photo-menu">
                 <img class="img-menu-bar">
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
        <a v-on:click="exitAcc()" class="button-exit">
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
     async exitAcc(){
            let response = await fetch("https://localhost:7101/api/LogOut",
            {
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
            }
            );

            if (response.ok) { // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
                this.$router.push("/");
            } else {
            alert("Ошибка HTTP: " + response.status);
            }
      },
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