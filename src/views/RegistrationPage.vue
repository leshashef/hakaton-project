<template>
  <div class = "registration-main">
    <div class="registration-background-left-side">
      <div class="div-registration-form">
   <div class="registration-form">
      <div class="title-registration-form">
        Регистрация
      </div>
       <div class="form__group field">
                    <input type="input" v-model="name" class="form__field" placeholder="Имя" name="name" id='name' required />
                <label for="name" class="form__label">Имя</label>
       </div>
        <div class="form__group field">
                    <input type="input" v-model="email" class="form__field" placeholder="Email" name="email" id='email' required />
                <label for="email" class="form__label">Email</label>
       </div>

        <div class="form__group field">
                    <input type="password" v-model="password" class="form__field" placeholder="Пароль" name="password" id='password' required />
                <label for="password" class="form__label">Пароль</label>
       </div>

        <div class="form__group field">
                    <input type="password" v-model="checkPass" class="form__field" placeholder="Подтверждение пароля" name="confirmpassword" id='confirmpassword' required />
                <label for="confirmpassword" class="form__label">Подтверждение пароля</label>
       </div>

       <div class="submit-button-registration-form">
             <a class="bn31" v-on:click="send()" href="#"><span class="bn31span" style="font-size:15px">Зарегистрироваться</span></a>
      </div>

      </div>
   </div>
   <div class="registration-login-url-button">
      <router-link class="bn31" to="/login" ><span class="bn31span" style="font-size:15px">Авторизоваться</span></router-link>
   </div>
  </div>

  <div class="registration-background-right-side">
    <img src="/img/img/Clogo.png" class="registration-logo-language-right-side">
    <img src="/img/img/bankinvest.jpg" class="registration-logo-bank-right-side">
    </div>

  
  
   </div>
    

  
 
</template>

<script>

export default {
 data(){
   return{
     email:null,
     name:null,
     password:null,
     checkPass:null 
   }
 },
 methods:{
  async send(){
      if(this.email != null && this.name != null && this.password != null && this.checkPass != null &&this.checkPass == this.password)
      {
        let objSend = {
          NextPassword:this.checkPass,
          Password:this.password,
          Email:this.email,
          Name:this.name
        }
           let response = await fetch("https://localhost:7101/api/Registration",
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    credentials: 'include',
                    body: JSON.stringify(objSend)
                }
                );

                if (response.ok) { // если HTTP-статус в диапазоне 200-299
                // получаем тело ответа (см. про этот метод ниже)
                let json = await response.json();
                console.log(json);
                } else {
                alert("Ошибка HTTP: " + response.status);
                }
      }   
   }
 }
}
</script>

<style>

</style>