<template>
    <h1 class="ml-4">Clicker Game</h1>
    <div class="flex flex-col justify-center items-center">
        <client-only>
            
            <table id="items">
            <tr>
            <th class="border-4"><span class="text-2xl ">Passant coins: <span class="text-yellow-300">{{ passantcoins }}</span></span><br></th>
            <th class="border-4"><span class="text-2xl ">Coins per second: <span class="text-yellow-300">{{ dailypassant }}</span></span></th>
            </tr>
                <tr v-for="g,i in generators">
                    <th class="table-item w-20 sm:w-40 name text-lg">{{ g.n }}</th>
                    <th class="table-item w-20 sm:w-40 coins"><span class="text-gray-200">{{ g.f }}</span> Passant Coins</th>
                    <th class="table-item buy text-xl  w-20" @click="buy(i)"><span>Buy</span></th>
                    <th class="table-item w-20 sm:w-40 count">You have: {{ g.c }}</th>
                </tr>
                <tr>
                    <th><button  @click="exportSave()">Export Save</button></th>
                    <th><button  @click="importSave()">Import Save</button></th>
                    <th><input class="rounded-lg py-2 bg-red-400 text-center w-full text-white placeholder-gray-200" type="text" id="save" v-model="savetext" @input="save = savetext.value;" placeholder="Put your save code here"></th>

                </tr>
            </table>
        </client-only>
    </div>
</template>

<script setup>

var passantcoins = ref(5000.00)
var save = ref()
var savetext = ref()
var dailypassant = ref(0.00)
function passantcoin(){
    passantcoins.value=parseFloat((dailypassant.value+passantcoins.value).toFixed(2))
}
onMounted(() => {
    setInterval(passantcoin,1000)  
})
var generators=ref([{
        "n":"Beginner Chess Player",
        "f":10,
        "g":0.1,
        "c":0
    },{
        "n":"Average Chess Player",
        "f":50,
        "g":2,
        "c":0
    },{
        "n":"Professional Chess Player",
        "f":600,
        "g":10,
        "c":0
    },{
        "n":"chess.c*m",
        "f":2000,
        "g":100,
        "c":0
    },{
        "n":"Gotham Chess",
        "f":10000,
        "g":500,
        "c":0
    },{
        "n":"Lichess",
        "f":100000,
        "g":1000,
        "c":0
    },{
        "n":"Average r/AnarchyChess Enjoyer",
        "f":2000000,
        "g":20000,
        "c":0
    }
]);
function buy(obj){
    if(passantcoins.value >= generators.value[obj]["f"]){
        passantcoins.value=parseFloat((passantcoins.value-generators.value[obj]["f"]).toFixed(2))
        dailypassant.value=parseFloat(( generators.value[obj]["g"]+dailypassant.value).toFixed(2))
        generators.value[obj]["f"]=Math.round(((generators.value[obj]["f"]/10)+generators.value[obj]["f"])*100)/100
        generators.value[obj]["c"]+=1
    }
}
function exportSave(){
    save.value = btoa(`${JSON.stringify(generators.value)}!!${passantcoins.value}!!${dailypassant.value}`)
    savetext.value = btoa(`${JSON.stringify(generators.value)}!!${passantcoins.value}!!${dailypassant.value}`)
}
function importSave(){
    generators.value=JSON.parse(atob(savetext.value).split("!!")[0])
    passantcoins.value = parseFloat(atob(savetext.value).split("!!")[1])
    dailypassant.value = parseFloat(atob(savetext.value).split("!!")[2])
}
</script>

<style scoped>
.buy:hover{
    color:rgb(255, 255, 255);
    cursor: pointer;
}
#items{
    margin-bottom: 30px;
}
</style>
