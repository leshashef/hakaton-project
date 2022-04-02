<template>
<div class="list-tests-page">

    <div class="list-tests-background-left-side">

      <div class="list-tests-title-background-left-side"> 
       Название теста
      </div>

    </div>

    <div class="list-tests-background-right-side">

    </div>

    </div>
    
</template>

<script>
export default {
    data(){
        return{
            listTest:[]
        }
    },
    created(){
        this.getList();
    },
    methods:{
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