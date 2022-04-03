<template>
<div class="list-tests-page">

<div class="list-tests-page-main">


    <div class="page-main-left-side">
        <div class="title-left-side">
            IT-Trend
        </div>

        <div class="title-test-left-side">
            Название теста
            <div class="text-list-test" v-if="selectTestf!=null">
                <div>{{selectTestf.testName}}</div> 
                <div>Автор: {{selectTestf.user.userName}}</div>
            </div>
           
        </div>

        <div class="div-all-test-title-left-side">
             <div class="all-test-title-left-side">
                Выберите тест из предложенных
             </div>
        </div>

        </div>
    
    <div class="page-main-right-side">
        <div class="link_to-play" v-if="selectTestf!=null">
             <router-link class="bn31 bn-big" :to="'/play-test/'+selectTestf.id"><span class="bn31span" style="font-size: 30px;">Пройти</span></router-link>
        </div>
    </div>
  
</div>


          <div class="list-tests-footer">
              <div v-if="rightShift > 0">
                <button v-on:click="leftArrow" class="left-arrow-footer arrow-button">
                    &lt;
                </button>
              </div>
          

            <div class="list-tests-test">
                <div  id="ListTests" style="transition: all 1s; left:0" class="list-tests">
                    <div class="test" v-for="(item,index) in ListTest" v-on:click="selectTest(item)" v-bind:key="index">
                        <img :src="'data:image/jpeg;base64,'+item.imgTest" class="list-tests-img-test">
                        <div class="list-tests-title-test font_size_16">
                            {{item.testName}} 
                        </div>
                        <div class="div-who-made">
                            <div class="list-test-sign-who-made-test">
                            by
                            </div>
                            <div  class="list-test-title-who-made-test font_size_16"> 
                                {{item.user.userName}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button v-if="listCount > 5 && rightShift < listCount -5" v-on:click="rightArrow" class="right-arrow-footer arrow-button">
                    &gt;
                </button>
            </div>
             
      </div>
      <nav-bar/>
</div>

    
</template>

<script>
/*import AboutPage from './AboutPage.vue';*/
import NavBar from '../components/NavBar.vue';
export default {
  components: { NavBar },
    data(){
        return{
            ListTest:[],
            listHtml:null,
            listCount:7,
            rightShift:0,
            selectTestf:null
        }
    },
    created(){ 
        
        this.getList();
    },
    mounted(){
        this.listHtml = document.getElementById('ListTests');
    },
    methods:{
        selectTest(item){
            console.log(item);
            this.selectTestf = item;
        },
        leftArrow(){
            if(this.rightShift != 0){
                this.rightShift--;
                let pxShift = -220;
                let culc = this.rightShift * pxShift;
                this.listHtml.style.left =culc + 'px';
            }
            
        },
        rightArrow(){
            if(this.rightShift < this.listCount - 5){
                this.rightShift++;
                let pxShift = -220;
                let culc = this.rightShift * pxShift;
                this.listHtml.style.left =  culc + 'px';
            }
          
        },
        async getList(){
            let response = await fetch("https://localhost:7101/api/ListTest",
            {
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
            }
            );

            if (response.ok) { // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
            let json = await response.json();
            this.ListTest = json;
            this.listCount = this.ListTest.length;
            console.log(json);
            } else {
            alert("Ошибка HTTP: " + response.status);
            }
        },
    }
}
</script>

<style>

</style>