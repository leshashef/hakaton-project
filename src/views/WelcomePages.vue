<template>
    <div class="welcome-page">
        <div class="w70 flex-container">
          <div class="title-welcome"><div class="welcome-title-text">IT-Trend</div> 
            <div class="welcome-title-img"> <img src="/img/img/emblem.png" alt="error"></div>
          </div>
          <div class="welcome-info">
            <div class="img-welcome">
              <img height="520" src="/img/img/image-welcome.png" alt="error">
            </div>
            <div class="welcome-text-info">
                <span>
                    Данное приложение <br> поможет вам определить<br> вашу предрасположенность <br>в IT сфере
                </span>
            </div>
            <div class="text_bn31">
              <div class="div-bn31-welcome">
                 <router-link class="bn31 dop-bn31" to="/registration"><span class="bn31span">Регистрация</span></router-link>
              </div>
               <div class="div-bn31-welcome">
                  <router-link class="bn31 dop-bn31" to="/login"><span class="bn31span">Авторизация</span></router-link>
               </div>
               
            </div>
          </div>
          
        </div> 
        <div class="w30">
          <div class="welcome-footer">
            <div class="w15">Для кого подходит приложение?</div>
            <div class="w85">
              <div><div class="block-for-img">
                   <img class="FirstImage" src="/img/img/student.png" alt="error">
                </div>Для школьников/студентов</div>
              <div><div class="block-for-img">
                <img class="SecondImage" src="/img/img/iT.JPG" alt="error">
                </div>Для людев в IT</div>
              <div><div class="block-for-img">
                <img class="ThirdImage" src="/img/img/Everyone.JPG" alt="error">
                </div>Для любых желающих</div>
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