<template>
    <div class="div-background">
        <div  v-if="!TestUndefined && dataTest!=null">
            <div><h1 class="title-edit">Тест: {{dataTest.testName}}</h1></div>
            <div class="margin-50px"><img width="300" :src="'data:image/jpeg;base64,'+dataTest.imgTest" alt=""></div>
            <div class="play-test" v-if="!finalTest">
                    <div class="quest-test">Вопрос: {{currentQuest.nameQuests}}</div> 
                    <form >
                        <div v-for="(item, index) in currentQuest.jsontext" v-bind:key="index">
                            <label class="radio-new">
                                <input class="radio" v-on:change="selectAnswer(item, currentQuest.id)" type="radio" :name="currentQuest.id"/>
                                <span>{{item.NameAnswer}}</span>
                            </label>
                            <!-- {{item.NameAnswer}} <input v-on:change="selectAnswer(item, currentQuest.id)" class="radio" :name="currentQuest.id" type="radio"> -->
                        </div>
                    </form>
                    <button class="bn32" v-on:click="nextQuest" v-if="answerCount >= currentQuestIndex +1 && currentQuestIndex < allQuest-1"><span class="bn32span" style="font-size:15px">Следующий вопрос</span></button>
                    <button class="bn32" v-on:click="endTest" v-if="answerCount >= currentQuestIndex +1 && currentQuestIndex == allQuest-1"><span class="bn32span" style="font-size:15px">Завершить тест</span></button>
            </div>
            <div class="play-test" v-else>
                <h2>Итоги теста:</h2>
                <div v-for="(item, index) in finalTestArray" v-bind:key="index">
                    <div>{{item.name}}</div>
                </div>
                <div class="rout-go">
                    <router-link class="link" to="/listtest">Ещё тесты</router-link>
                </div>
            </div>
        </div>
        <div  v-else-if="TestUndefined">
            <div>Такого теста не существует</div>
            <div class="rout-go">
                    <router-link class="link" to="/listtest">К списку тестов</router-link>
                </div>
        </div>
        <!-- <nav-bar/> -->
    </div>
</template>

<script>
//import NavBar from '../components/NavBar.vue';
export default {
    //  components: { NavBar },
    data(){
        return{
            TestUndefined: false,
            dataTest:null,
            currentQuestIndex:0,
            currentQuest:null,
            allQuest:0,
            answers:[],
            answerCount:0,
            finalTest:false,
            finalTestArray:[]
        }
    },
    created(){
        this.GetLogin();
        this.getTest();

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
        endTest(){
            let counter = {};
            for(let item of this.dataTest.resultTests){
                counter[item.resultName] = {name:item.resultName,value:0};
            }
            for(let item of this.answers){
                for(let el of item.changeRes){
                    console.log(counter);
                    console.log(el);
                    if(el.value != null){
                        counter[el.changeRes].value -= -el.value;
                    }
                     
                }
                
                 
                 // = {
                //     name:item.changeRes,
                //     value: item.value
                // }
            }
            console.log(counter);
            let dop = [];
            let winner = null;
            for(let item in counter){
                if(winner == null){
                    winner = counter[item];
                }
                else{
                    if(winner.value < counter[item].value){
                        winner = counter[item];
                        dop = [];
                    }
                    else if(winner.value == counter[item].value){
                        dop.push(counter[item]);
                    }
                }
            }
            dop.push(winner);
            this.finalTestArray = dop;
            this.finalTest = true;
        },
        nextQuest(){
            let radio = document.getElementsByClassName('radio');
            for(let el of radio){
                el.checked = false;
            }
            this.currentQuestIndex++;
            this.currentQuest = this.dataTest.quests[this.currentQuestIndex]
        },
        selectAnswer(item,id){
            for(let find of this.answers){
                if(find.id == id){
                    find.nameAnswer = item.NameAnswer;
                    find.changeRes = item.exodus;
                    return;
                }
            }
            this.answers.push({nameAnswer:item.NameAnswer,id:id,changeRes:item.exodus});
            this.answerCount = this.answers.length;
        },
        async getTest(){
            console.log(this.$route.params);
            let response = await fetch("https://localhost:7101/api/PlayTest/"+ this.$route.params.id,
            {
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
            }
            );

            if (response.ok) { // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
            let json = await response.json();
           
            let dataTest = json;
            console.log(dataTest); 
            for(let el of dataTest.quests){
                el.jsontext = JSON.parse(el.jsontext);
            }
            if(dataTest.quests.length > 0){
                this.currentQuestIndex = 0;
                this.currentQuest = dataTest.quests[this.currentQuestIndex];
                this.allQuest = dataTest.quests.length
            }
            this.dataTest = dataTest;
            console.log(this.dataTest);
            } else {
            alert("Ошибка HTTP: " + response.status);
            }

        }
    }
}
</script>

<style>
#app{
      margin: 0 !important;
    width: 100%;
    height: 100%; 
}
html, body{
    widows: 100%;
    height: 100%;
    margin: 0;
}
.div-background{
    background: #23243a;
    height: 100%;
}
.title-edit{
    margin-top: 0;
    color:#11998e;
}
.margin-50px{
    margin-bottom: 50px;
}
 .play-test{
    width: 500px;
    margin: auto;
    background: #8c9095;
    border-radius: 50px;
    font-size: 30px;
    padding: 20px;
  }
  .quest-test{
      font-size: 35px;
      border-bottom: 1px solid #2c3e50;
      margin-bottom: 15px;
      padding-bottom: 5px;
  }
  .rout-go{
      margin-top: 20px;
      font-size: 22px;
     
  }
  .link{
      color: aliceblue;
  }
  .bn32 {
      margin: auto;
    background-image: linear-gradient(to right, #89bd9b 0%, #179b56 100%);
    border-radius: 40px;
    box-sizing: border-box;
    color: #63f2a6;
    display: block;
    height: 50px;
    font-size: 1.4em;
    padding: 4px;
    position: relative;
    text-decoration: none;
    width: 7em;
    z-index: 2;
    left: 0;
  }
  
  .bn32:hover {
    color: #fff;
  }
  
  .bn32 .bn32span {
    align-items: center;
    background: rgb(11 146 90);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    height: 100%;
    transition: background 0.5s ease;
    width: 100%;
  }
  
  .bn32:hover .bn32span {
    background: transparent;
  }


    .radio-new {
  display: flex;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.375em;
}
.radio-new input {
  position: absolute;
  left: -9999px;
}
.radio-new input:checked + span {
  background-color: #d6d6e5;
}
.radio-new input:checked + span:before {
  box-shadow: inset 0 0 0 0.4375em #00005c;
}
.radio-new span {
  display: flex;
  align-items: center;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  transition: 0.25s ease;
}
.radio-new span:hover {
  background-color: #d6d6e5;
}
.radio-new span:before {
  display: flex;
  flex-shrink: 0;
  content: "";
  background-color: #fff;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin-right: 0.375em;
  transition: 0.25s ease;
  box-shadow: inset 0 0 0 0.125em #00005c;
}
</style>