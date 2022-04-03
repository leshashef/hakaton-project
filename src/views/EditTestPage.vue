<template>
    <div class="div-back">
        <h1 class="title-edit">Редактор тестов</h1>
        <div class="create-test">
            <div class="create-block-name-test">
                <!-- <label for="NameTest">Название теста</label>
                <input v-model="nameTest" name="NameTest" type="text"> -->

                <div>
                    <div class="form__group field">
                        <input v-model="nameTest" type="input" class="form__field" placeholder="Название теста" name="name" id='name' required />
                        <label  for="name" class="form__label form_label-left0">Название теста</label>
                    </div>
                </div>
            </div>
            <div class="create-block-img-test">
                <label for="ImgTest">Добавьте картинку для тестов</label>
                <input v-on:change="addFile" name="ImgTest" type="file" accept="image/png,image/jpeg">
                <div v-if="img!=null"><img width="250"  :src="'data:image/jpeg;base64,'+img" alt=""></div>
            </div>
            <div class="create-block-name-test">
                 <div>
                    <div class="form__group field">
                        <input v-model="resultCur" type="input" class="form__field" placeholder="Добавьте результаты для тестов" name="ImgTest" id='ImgTest' required />
                        <label  for="ImgTest" class="form__label form_label-left0">Добавьте результаты для тестов</label>
                    </div>
                </div>
                <!-- <a class="bn31" v-on:click="send()" href="#"><span class="bn31span" style="font-size:15px">Зарегистрироваться</span></a>  -->
                <button class="bn31" v-on:click="addResult"><span class="bn31span" style="font-size:15px">Добавить</span></button>
                <!-- <label for="ImgTest">Добавьте результаты для тестов</label>
                <input v-model="resultCur" type="text"> -->
                <div class="grid-container-row margin-20px">
                    <div class="flex-blocks" v-for="(item,index) in result" v-bind:key="index">
                        {{item}}
                    </div>
                </div>
                
            </div>
            <div>
                <div>

                    <div class="form__group field">
                        <input v-model="questCur" type="input" class="form__field" placeholder="Добавьте название вопроса" name="quest" id='quest' required />
                        <label  for="quest" class="form__label form_label-left0">Добавьте название вопроса</label>
                    </div>

                </div>
                <button class="bn31" v-on:click="addQuest"><span class="bn31span" style="font-size:15px">Добавить</span></button>

                <div v-for="(item,index) in quest" v-bind:key="index">
                    <div class="questname">{{item.QuestName}}</div>
                    <div>
                        <div class="form__group field">
                            <input v-model="item.lastAnswer" type="input" class="form__field" placeholder="Добавьте ответ" :name="'answer'+index" :id="'answer'+index" required />
                            <label  :for="'answer'+index" class="form__label form_label-left0">Добавьте ответ</label>
                        </div>
                    </div>
                    <button class="bn31" v-on:click="addAnswer(item)"><span class="bn31span" style="font-size:15px">Добавить</span></button>
                    <div v-for="(it,inde) in item.json" v-bind:key="inde">
                        <div class="font-size-test-20">
                           Ответ: {{it.NameAnswer}}
                        </div>
                        <div  v-for="(el,iter) in it.exodus" v-bind:key="iter">
                            <div>
                                <select class="select-input" v-model="el.changeRes">
                                    <option v-for="(res,ind) in result" v-bind:key="ind">{{res}}</option>
                                </select>
                            </div>
                            <div>
                                <input class="number-input" v-model="el.value" min="-1000" max="1000" type="number">
                            </div>
                        </div>
                         <button class="bn31" v-if="it.exodus.length<result.length" v-on:click="addExodus(it)"><span class="bn31span" style="font-size:15px">Добавить влияние</span></button>
                        
                    </div>
                </div>
            </div>
            <div class="btn-send-centr"><button class="bn31" v-on:click="Send()"><span class="bn31span" style="font-size:15px">Сохранить тест</span></button></div>
        </div>
        <nav-bar/>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
     components: { NavBar },
    data(){
        return{
             nameTest:null,
             img:null,
             result:[],
             resultCur:null,
             quest:[],
             questCur:null,
             nameAnswer:null,
        }
       
    },
    created(){
        this.GetLogin();
        
    },
    methods:{
        addExodus(it){
            let ex = {
                changeRes:null,
                value:null
            }
            it.exodus.push(ex);
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
       async Send(){
            console.log(this.nameTest);
             console.log(this.result);
             console.log(this.quest);
             
            for(let el of this.quest){
                el.json = JSON.stringify(el.json);
                el.lastAnswer = "GGWP";
            }

             let objSend = {
                 UserId:1,
                 TestName:this.nameTest,
                 ImgTest:this.img,
                 Results:this.result,
                 Quests:this.quest,
             }
            objSend = JSON.stringify(objSend);
            console.log(objSend);
            let response = await fetch("https://localhost:7101/api/CreateTest",
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    credentials: 'include',
                    body: objSend
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
      
        addResult(){
            if(this.resultCur != null){
                this.result.push(this.resultCur);
            }
            this.resultCur = null;
        },
        addQuest(){
            if(this.questCur != null){
                let obj = {
                    QuestName:this.questCur,
                    json:[],
                    lastAnswer:null
                }
                this.quest.push(obj);
            }
            this.questCur = null;
        },
        addAnswer(quest){
            if(quest.lastAnswer !=null){
                let ans = {
                    NameAnswer:quest.lastAnswer,
                    exodus:[],
                    // changeRes:null,
                    // value:null
                }
                quest.json.push(ans);
            }
           quest.lastAnswer =null;
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
                    console.log(myFiles);
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
                  this.img = myFiles;
            console.log(this.img);
                })
                .catch((error) => {
                console.log(error)
                console.log('something wrong happened')
                })
            
          
        }
    },
}
</script>

<style>

</style>