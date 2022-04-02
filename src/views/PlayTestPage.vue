<template>
    <div class="div-background">
        <div  v-if="!TestUndefined && dataTest!=null">
            <div><h1 class="title-edit">Тест: {{dataTest.testName}}</h1></div>
            <div class="margin-50px"><img width="300" :src="'data:image/jpeg;base64,'+dataTest.imgTest" alt=""></div>
            <div v-if="!finalTest">
                    Вопрос: {{currentQuest.nameQuests}}
                    <div v-for="(item, index) in currentQuest.jsontext" v-bind:key="index">
                        {{item.NameAnswer}} <input v-on:change="selectAnswer(item, currentQuest.id)" :name="currentQuest.id" type="radio">
                    </div>
                    <button v-on:click="nextQuest" v-if="answerCount >= currentQuestIndex +1 && currentQuestIndex < allQuest-1">Следующий вопрос</button>
                    <button v-on:click="endTest" v-if="answerCount >= currentQuestIndex +1 && currentQuestIndex == allQuest-1">Закончить</button>
            </div>
            <div v-else>
                <h2>Итоги теста:</h2>
                <div v-for="(item, index) in finalTestArray" v-bind:key="index">
                    <div>{{item.name}}</div>
                </div>
            </div>
        </div>
        <div  v-else-if="TestUndefined">
            <div>Такого теста не существует</div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
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
        this.getTest();

    },
    methods:{
        endTest(){
            let counter = {};
            for(let item of this.answers){
                if(counter[item.changeRes]!= undefined){
                    counter[item.changeRes].value += item.value;
                }
                else{
                    counter[item.changeRes] = {
                        name:item.changeRes,
                        value: item.value
                    }
                }
            }
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
            this.currentQuestIndex++;
            this.currentQuest = this.dataTest.quests[this.currentQuestIndex]
        },
        selectAnswer(item,id){
            for(let find of this.answers){
                if(find.id == id){
                    find.nameAnswer = item.NameAnswer;
                    find.changeRes = item.changeRes;
                    return;
                }
            }
            this.answers.push({nameAnswer:item.NameAnswer,id:id,changeRes:item.changeRes,value:item.value});
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
</style>