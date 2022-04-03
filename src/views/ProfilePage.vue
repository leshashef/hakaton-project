<template>
  <div class="profile-page">

      <div class="profile-main-part">
          <div class="profile-email-telephone">
              <div class="profile-text-email">
                  Email:
              </div>
              <div class="profile-input-email">

              </div>
          </div>
          <div class="profile-photo-fio">
              <div class="profile-photo">
                  <img class="profile-photo-img">
              </div>

              <div class="profile-fio">
                  Имя
              </div>
                <div class="exit-profile-button">
                  <a v-on:click="exitAcc()" class="button-exit">
                    <span class="button-exitspan">
                       Выход
                    </span>
                  </a>
                 </div>
              
          </div>
          <div class="profile-id-counter">
              <div class="profile-id">
                 ID:
              </div>
               <div class="profile-input-id">
               
              </div>

          </div>

        
          
           </div>
            

     


      <div class="profile-footer-part">
            <div class="profile-title-footer-part">
            
                    Пункты меню:
          
      </div>
          <div class="profile-footer-list-url">
               <div class="profile-footer-url" >
                 <router-link to="/" class="url"> Главная страница </router-link>
               </div>
               <div class="profile-footer-url">
                 <router-link to="/listtest" class="url"> Список тестов </router-link>
               </div>
               <div class="profile-footer-url">
                 <router-link to="/edit-test" class="url"> Создание тестов </router-link>
               </div>
               <div class="profile-footer-url">
                 <router-link to="/about" class="url"> О приложении </router-link>
               </div>
          </div>

      </div>


  </div>
</template>

<script>



export default {
  created(){
    this.GetLogin();
  },
  methods:{
    async  GetLogin(){
            let response = await fetch("https://localhost:7101/api/CheckLogin",
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
                if(json.redirect != undefined){
                    this.$router.push(json.redirect);
                }
                } else {
                alert("Ошибка HTTP: " + response.status);
            }
        },
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
  }

}
</script>

<style>

</style>