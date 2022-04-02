<template>
<div>
    <input multiple v-on:change="addFile" type="file" accept="image/png,image/jpeg">
    <div v-for="(item,index) in img" v-bind:key="index">
        <img :src="'data:image/jpeg;base64,'+item.Pictures" alt="none">
    </div>
    <button v-on:click="send">Отправить</button>
</div>
 
</template>

<script>
export default {
    data(){
        return{
            img:[]
        }
    },
    methods:{
      async  send(){
            if(this.img.length > 0){
                var js = JSON.stringify(this.img);
                console.log(js);
                let response = await fetch("https://localhost:7101/api/GetImg",
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    credentials: 'include',
                    body: js
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
                    myFiles.push({Pictures:btoa(event.target.result)});
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
    }
}
</script>

<style>

</style>