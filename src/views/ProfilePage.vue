<template>
  <div class="profile-page">

      <div class="profile-main-part">
          <div class="profile-email-telephone">
              <div class="profile-text-email">
                  Email:
              </div>
              <div class="profile-text-telephone">
                  Телефон:
              </div>
          </div>
          <div class="profile-photo-fio">
              <div class="profile-photo">
                  <img class="profile-photo-img">
              </div>

              <div class="profile-fio">
                  ФИО
              </div>
                <div class="exit-profile-button">
                  <a class="button-exit">
                    <span class="button-exitspan">
                       Выход
                    </span>
                  </a>
                 </div>
              
          </div>
          <div class="profile-id-counter">
              <div class="profile-counter">
                  Количество пройденных тестов:
              </div>
               <div class="profile-id">
                 ID:
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

  

}
</script>

<style>

</style>