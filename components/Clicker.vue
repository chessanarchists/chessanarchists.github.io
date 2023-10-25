<template>
    <div class="flex-col">

<!-- <table id="items">
    <span>Passant coins: <span style="color:rgb(175, 175, 0)">{{ passantcoins }}</span></span><br>
    <span>Coins per second: <span style="color:green">{{ dailypassant }}</span></span>
    <tr>
        <th class="table-item name">Beginner Chess Player</th>
        <th class="table-item coins">{{ generators["1"]["f"] }} Passant Coins</th>
        <th class="table-item buy"><input type="button" value="Buy" @click="buy('1');"></th>
        <th class="table-item count">{{ generators["1"]["c"] }}</th>
    </tr>
    <tr>
        <th class="table-item name">Average Chess Player</th>
        <th class="table-item coins">{{ generators["2"]["f"] }} Passant Coins</th>
        <th class="table-item buy"><input type="button" value="Buy" @click="buy('2')"></th>
        <th class="table-item count">{{ generators["2"]["c"] }}</th>
    </tr>
    <tr>
        <th class="table-item name">Professional Chess Player</th>
        <th class="table-item coins">{{ generators["3"]["f"] }} Passant Coins</th>
        <th class="table-item buy"><input type="button" value="Buy" @click="buy('3')"></th>
        <th class="table-item count">{{ generators["3"]["c"] }}</th>
    </tr>
    <tr>
        <th class="table-item name">chess.c*m</th>
        <th class="table-item coins">{{ generators["4"]["f"] }} Passant Coins</th>
        <th class="table-item buy"><input type="button" value="Buy" @click="buy('4')"></th>
        <th class="table-item count">{{ generators["4"]["c"] }}</th>
    </tr>
    <tr>
        <th class="table-item name">Gotham Chess</th>
        <th class="table-item coins">{{ generators["5"]["f"] }} Passant Coins</th>
        <th class="table-item buy"><input type="button" value="Buy" @click="buy('5')"></th>
        <th class="table-item count">{{ generators["5"]["c"] }}</th>
    </tr>
    <tr>
        <th class="table-item name">Lichess</th>
        <th class="table-item coins">{{ generators["6"]["f"] }} Passant Coins</th>
        <th class="table-item buy"><input type="button" value="Buy" @click="buy('6')"></th>
        <th class="table-item count">{{ generators["6"]["c"] }}</th>
    </tr>
    <tr>
        <th class="table-item name">Average r/AnarchyChess Enjoyer</th>
        <th class="table-item coins">{{ generators["7"]["f"] }} Passant Coins</th>
        <th class="table-item buy"><input type="button" value="Buy" @click="buy('7')"></th>
        <th class="table-item count">{{ generators["7"]["c"] }}</th>
    </tr>
    <tr>
        <th><button  @click="exportSave()">Export Save</button></th>
        <th><button  @click="importSave()">Import Save</button></th>
        <th><input type="text" id="save" v-model="savetext" @input="save = savetext.value;" placeholder="Put your save code here"></th>
        <th><textarea name="" id="" cols="15" rows="3">{{ save }}</textarea></th>
    </tr>
</table> -->

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
setInterval(passantcoin,1000)
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
#forgotten{
  position: fixed;
  width: 30vw;
  bottom:0px;
}
#martin{
  width: 100px;
  height: auto;
  position: absolute;
  top:6vw
}
#music{
  position: absolute;
  right: 0;
  margin-top: 5vw;
}
.table-item{
    width: 120px;
}
#items{
    float: right;
}
</style>
