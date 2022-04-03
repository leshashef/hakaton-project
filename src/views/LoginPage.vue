<template>
<div class="login-main">
     <div class="login-main-div">
 
         <div class="login-button-menu">
            <div class="login-button-menu-part1">
            </div>
            <div class="login-button-menu-part2">
            </div>
             <div class="login-button-menu-part3">
            </div>
         </div>
            
            

    </div>
      <div class="login-modal">
            <div >
              <div class="width100">
                  <span class="text-login">Авторизация</span>
              </div>
          </div>
          <div >
            <div>
                <div class="form__group field">
                        <input type="input" v-model="email" class="form__field" placeholder="Email" name="email" id='email' required />
                    <label for="email" class="form__label">Email</label>
                </div>
            </div>
             
          </div>
            <div>
              <div>
                  <div class="form__group field-name">
                  <input class="form__field" v-model="password" type="password" placeholder="Пароль" name="password" id='password' required />
                    <label for="password" class="form__label">Пароль</label>
                </div>
              </div>
          </div>
            <div>
                <div class="div_button">
                    <a class="bn31" v-on:click="logIn" href="/"><span class="bn31span">Войти</span></a>
                </div>
              
          </div>
      </div>

 
      
  </div>

</template>

<script>

export default {
  data(){
    return{
      email:null,
      password:null
    }
  },
  methods:{
   async logIn(){
      if(this.email!= null && this.password!=null){
        let objSend = {
          email:this.email,
          password:this.password
        }
         let response = await fetch("https://localhost:7101/api/Authorization",
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
                localStorage.setItem('user',JSON.stringify(json));
                this.$router.push('/profilePage');
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