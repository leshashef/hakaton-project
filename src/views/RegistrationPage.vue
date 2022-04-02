<template>
  <div class = "registration-main">
    <div class="registration-background-left-side">
       <div class="registration-button-menu">
            <div class="registration-button-menu-part1">
            </div>
            <div class="registration-button-menu-part2">
            </div>
             <div class="registration-button-menu-part3">
            </div>
    </div>
   <div class="registration-form">
      <div class="title-registration-form">
        Регистрация
      </div>
       <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Имя" name="name" id='name' required />
                <label for="name" class="form__label">Имя</label>
       </div>
        <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Email" name="email" id='email' required />
                <label for="email" class="form__label">Email</label>
       </div>

        <div class="form__group field">
                    <input type="password" class="form__field" placeholder="Пароль" name="password" id='password' required />
                <label for="password" class="form__label">Пароль</label>
       </div>

        <div class="form__group field">
                    <input type="password" class="form__field" placeholder="Подтверждение пароля" name="confirmpassword" id='confirmpassword' required />
                <label for="confirmpassword" class="form__label">Подтверждение пароля</label>
       </div>

       <div class="submit-button-registration-form">
             <a class="bn31" href="/"><span class="bn31span" style="font-size:15px">Зарегистрироваться</span></a>
      </div>

    </div>
   
    

  </div>

  <div class="registration-background-right-side">
    <img src="/img/img/Clogo.png" class="registration-logo-language-right-side">
    <div class="registration-language-description-right-side">
      Описание языка или технологии
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