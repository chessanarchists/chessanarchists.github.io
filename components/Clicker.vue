
<template>
    <div class="flex flex-col justify-center items-center">
        <client-only>
            <table id="items">
                    <span>Passant coins: <span style="color:rgb(175, 175, 0)">{{ passantcoins }}</span></span><br>
                    <span>Coins per second: <span style="color:green">{{ dailypassant }}</span></span>
                
                <tr>
                    <th class="table-item w-20 sm:w-40 name">Beginner Chess Player</th>
                    <th class="table-item w-20 sm:w-40 coins">{{ generators["1"]["f"] }} Passant Coins</th>
                    <th class="table-item buy" @click="buy('1')">Buy</th>
                    <th class="table-item w-20 sm:w-40 count">{{ generators["1"]["c"] }}</th>
                </tr>
                <tr>
                    <th class="table-item name">Average Chess Player</th>
                    <th class="table-item coins">{{ generators["2"]["f"] }} Passant Coins</th>
                    <th class="table-item buy" @click="buy('2')">Buy</th>
                    <th class="table-item count">{{ generators["2"]["c"] }}</th>
                </tr>
                <tr>
                    <th class="table-item name">Professional Chess Player</th>
                    <th class="table-item coins">{{ generators["3"]["f"] }} Passant Coins</th>
                    <th class="table-item buy" @click="buy('3')">Buy</th>
                    <th class="table-item count">{{ generators["3"]["c"] }}</th>
                </tr>
                <tr>
                    <th class="table-item name">chess.c*m</th>
                    <th class="table-item coins">{{ generators["4"]["f"] }} Passant Coins</th>
                    <th class="table-item buy" @click="buy('4')">Buy</th>
                    <th class="table-item count">{{ generators["4"]["c"] }}</th>
                </tr>
                <tr>
                    <th class="table-item name">Gotham Chess</th>
                    <th class="table-item coins">{{ generators["5"]["f"] }} Passant Coins</th>
                    <th class="table-item buy" @click="buy('5')">Buy</th>
                    <th class="table-item count">{{ generators["5"]["c"] }}</th>
                </tr>
                <tr>
                    <th class="table-item name">Lichess</th>
                    <th class="table-item coins">{{ generators["6"]["f"] }} Passant Coins</th>
                    <th class="table-item buy" @click="buy('6')">Buy</th>
                    <th class="table-item count">{{ generators["6"]["c"] }}</th>
                </tr>
                <tr>
                    <th class="table-item name">Average r/AnarchyChess Enjoyer</th>
                    <th class="table-item coins">{{ generators["7"]["f"] }} Passant Coins</th>
                    <th class="table-item buy" @click="buy('7')">Buy</th>
                    <th class="table-item count">{{ generators["7"]["c"] }}</th>
                </tr>
                <tr>
                    <th><button  @click="exportSave()">Export Save</button></th>
                    <th><button  @click="importSave()">Import Save</button></th>
                    <th><input class="w-16 sm:w-40" type="text" id="save" v-model="savetext" @input="save = savetext.value;" placeholder="Put your save code here"></th>

                </tr>
            </table>
        </client-only>
    </div>
</template>

<script setup>

var passantcoins = ref(50000.00)
var cps = 0
var epc = 0
var save = ref()
var savetext = ref()
var dailypassant = ref(0.00)
function passantcoin(){
    passantcoins.value=parseFloat((dailypassant.value+passantcoins.value).toFixed(2))
}
onMounted(() => {
    setInterval(passantcoin,1000)  
})
var generators=ref({
    "1":{
        "f":10,
        "g":0.1,
        "c":0
    },
    "2":{
        "f":50,
        "g":2,
        "c":0
    },
    "3":{
        "f":600,
        "g":10,
        "c":0
    },
    "4":{
        "f":2000,
        "g":100,
        "c":0
    },
    "5":{
        "f":10000,
        "g":500,
        "c":0
    },
    "6":{
        "f":100000,
        "g":1000,
        "c":0
    },
    "7":{
        "f":2000000,
        "g":20000,
        "c":0
    }
});
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

#pc{
  border: 3px solid red;
  color:rgb(0, 0, 0);
  border-radius: 5px;
  width: 32vw;
  position: fixed;
  font-size: 1vw;
}
#pc-c{
  font-weight: bold;
}
.count{
  margin-left:10px;
}
#items{
    float: right;
}
.table-button{
    text-align: center;
}
.buy:hover{
    color:rgb(255, 255, 255);
    cursor: pointer;
}
#items{
    margin-bottom: 30px;
    
}
</style>
