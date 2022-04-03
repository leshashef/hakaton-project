<template>
  <div class="profile-page">

      <div class="profile-main-part">
          <div class="profile-email-telephone">
              <div class="profile-text-email">
                  Email:
              </div>
              <div class="profile-input-email">
                {{email}}
              </div>
          </div>
          <div class="profile-photo-fio">
              <div class="profile-photo">
                  <img v-if="photo=='defaultPhoto'" class="profile-photo-img" >
                  <img v-else class="profile-photo-img" :src="'data:image/jpeg;base64,'+photo" >
              </div>

              <div class="profile-fio">
                  {{name}}
              </div>
                <div class="exit-profile-button">
                  <a v-on:click="exitAcc()" class="button-exit">
                    <span class="button-exitspan">
                       Выход
                    </span>
                  </a>
                 </div>
              <div>
                 <input v-on:change="addFile" name="ImgTest" type="file" accept="image/png,image/jpeg">
              </div>
          </div>
          <div class="profile-id-counter">
              <div class="profile-id">
                 ID:
              </div>
               <div class="profile-input-id">
                 {{id}}
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
  data(){
    return{
      email:null,
      id:null,
      name:null,
      photo:null,
      img:null
    }
  },
  created(){
    this.GetLogin();
    this.setProfile();
  },
  methods:{
    async save(myFiles){
       this.img = myFiles;
                  let objSend = {
                    Photo:this.img,
                    UserId:this.id
                  }
                  let response = await  fetch("https://localhost:7101/api/SaveProfilePhoto",
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
                  this.photo = this.img;
                  let newUserProfile = {
                    email:this.email,
                    id:this.id,
                    imgProfile:this.photo,
                    userName:this.name,
                  }
                  localStorage.setItem('user',newUserProfile);
                } else {
                alert("Ошибка HTTP: " + response.status);
                }
    },
     async addFile(event){
          // clean up earliest files
            var myFiles = []
            // set state of files to false until each of them is processed
            var isFilesReady = false
            console.log(isFilesReady);

            const files = event.srcElement.files;

            const filePromises = Object.entries(files).map(item => {
                return new Promise((resolve, reject) => {
                const [index, file] = item
                console.log(index);
                const reader = new FileReader();
                reader.readAsBinaryString(file);

                reader.onload = function(event) {
                    // Convert file to Base64 string
                    // btoa is built int javascript function for base64 encoding
                    myFiles= btoa(event.target.result);
                     
                 
                    resolve()
                };
                reader.onerror = function() {
                    console.log("can't read the file");
                    reject()
                };
                })
            })

            Promise.all(filePromises)
                .then(() => {
                console.log('ready to submit')
                isFilesReady = true;
                this.save(myFiles);
                })
                .catch((error) => {
                console.log(error)
                console.log('something wrong happened')
                })
            
          
        },
    setProfile(){
      let prof = localStorage.getItem('user');
      prof = JSON.parse(prof);
      this.email = prof.email;
      this.id = prof.id;
      this.photo = prof.imgProfile;
      this.name = prof.userName;
    },
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