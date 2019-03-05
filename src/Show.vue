<template>
  <div class="show">
    <h3>{{name}}</h3>
      <div class="box">
        <div class="health">
          <span class="stat">Health:</span><br>
          <span class="value">{{wounds}}</span>
        </div>
        <div class="move">
          <span class="stat">Movement:</span><br>
          <span class="value">{{movement}} in</span>
        </div>
        <div class="brave">
          <span class="stat">Bravery:</span><br>
          <span class="value">{{bravery}}</span>
        </div>
        <div class="ssave">
          <span class="stat">Save:</span><br>
          <span class="value">{{ssave}}</span>
        </div>
      </div>

    <h4>Weapons</h4>
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>combat style</td>
            <td>range(inches)</td>
            <td>attacks</td>
            <td>to hit</td>
            <td>to wound</td>
            <td>damage</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="weapon in unit.weapons" v-bind:key="weapon.url_name">
            <td>{{weapon.name}}</td>
            <td>{{weapon.combat_type}}</td>
            <td>{{weapon.range}}</td>
            <td>{{weapon.attacks}}</td>
            <td>{{weapon.to_hit}}</td>
            <td>{{weapon.to_wound}}</td>
            <td>{{weapon.damage}}</td>
          </tr>
        </tbody>
      </table>
    </div>
<br>
    <div v-if="damage_table">
      Damage Table
      <table>
        <thead>
          <tr>
            <td>Wounds Suffered</td>
            <td>Move in inches</td>
            <td>{{damage_table.rows[0].attack1_name}}</td>
            <td>{{damage_table.rows[0].attack2_name}}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in damage_table.rows" v-bind:key="row.id">
            <td>{{row.wounds_suffered}}</td>
            <td>{{row.move}}</td>
            <td>{{row.attack1_value}}</td>
            <td>{{row.attack2_value}}</td>
          </tr>
        </tbody>
      </table>

    </div>

    <h4>Errors</h4>
    <div>{{errors}}</div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Show",
  props:['url_name'],
  data (){
    return {
      unit: {},
      name: "",
      wounds: "",
      movement: "",
      bravery: "",
      ssave: "",
      damage_table: null,
      params_name: this.$props.url_name,
      errors: []
    }
  },
	mounted() {
    axios.get(`http://localhost:8001/api/lizardmen/${this.params_name}`).then(res => {
      this.unit = res.data
      let unit = res.data
      this.name = unit.name
      this.wounds = unit.wounds
      this.movement = unit.movement
      this.bravery = unit.bravery
      this.ssave = unit.ssave
      // console.log(this.unit)
    })
    .catch(e => {
      this.errors.push(e)
    })
    axios.get(`http://localhost:8001/api/lizardmen/damage_table/${this.params_name}`).then(res => {
      this.damage_table = res.data
      console.log(damage_table)
    }).catch(e => {
      this.errors.push(e)
    })
  },
  methods: {

  }
}
</script>

<style scoped>
div{
  display: inline-block;
}
/* circle stats */
.box{
  display: grid;
  width: 200px;
  height: 200px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}
.box div{
  border: 1px solid #000;
  text-align: center;
}
.health{
  border-radius: 100px 0 0 0;
}

.move{
  border-radius: 0 100px 0 0;
}

.brave{
  border-radius: 0 0 0 100px;
}

.ssave{
  border-radius: 0 0 100px 0;
}
/* interrior circle */
.stat{
  font-weight: bolder;
}
.value{
  font-size: 140%;
}
/* labels */
.health .stat {
  display: block;
  transform: rotate(-50deg);
  position: relative;
  top:30px;
  right:10px;
}
.move .stat {
  display: block;
  transform: rotate(45deg);
  position: relative;
  top:35px;
  left:5px;
}
.brave .stat {
  display: block;
  transform: rotate(-130deg);
  position: relative;
  top:45px;
  right:10px;
}
.ssave .stat {
  display: block;
  transform: rotate(130deg);
  position: relative;
  top:50px;
  left:10px;
}
/* stats values */
.health .value {
  position: relative;
  top:30px;
  left: 20px;
}
.move .value {
  position: relative;
  top: 30px;
  right:20px;
}
.brave .value {
  position: relative;
  bottom:20px;
  left:20px;
}
.ssave .value {
  position: relative;
  bottom: 20px;
  right: 20px;
}
</style>
