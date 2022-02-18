<template>
  <div class="hflex fit gap Box">
    <div>
      <router-link to="/"> Vissza </router-link>
    </div>
    <template v-if="running">
      <div class="center">
        <div>Jó: {{ good }}</div>
        <div>Rossz: {{ bad }}</div>
      </div>
      <template v-if="!summary">
        <div class="vflex bnumber center">
          {{ job.replace("?", "☐") }}
        </div>
        <div class="vflex center">
          <div v-for="(input, i) in inputs" :key="'indexA' + i">
            <div @click="onClick(input)" class="btn Blue">{{ input }}</div>
          </div>
        </div>
        <div class="hflex gap scroll">
          <div
            v-for="(log, i) in logs.slice().reverse()"
            class="center"
            :key="'indexB' + i"
          >
            <div :class="[isOk(log) ? 'Green' : 'Red', 'snumber']">
              {{ log }}
            </div>
          </div>
        </div>
      </template>
    </template>
    <div v-else class="hflex gap center">
      <label>Kérem, határozza meg típusonként a feladatok darabszámát!</label
      ><br />
      <div class="vflex gap">
        <label>max szám</label>
        <input type="number" v-model.number="max" />
      </div>
      <div class="vflex gap">
        <label>1 > 2</label>
        <input type="number" v-model.number="rel1" /> db.
      </div>
      <div class="vflex gap">
        <label>1 + 2 = ☐</label>
        <input type="number" v-model.number="osszeg1" /> db.
      </div>
      <div class="vflex gap">
        <label>1 - 2 = ☐</label>
        <input type="number" v-model.number="kivonas1" /> db.
      </div>
      <div class="vflex gap">
        <label>1 + ☐ = 2</label>
        <input type="number" v-model.number="osszeg2" /> db.
      </div>
      <div class="vflex gap">
        <label>☐ + 1 = 2</label>
        <input type="number" v-model.number="osszeg3" /> db.
      </div>
      <div class="vflex gap">
        <label>2 - ☐ = 1</label>
        <input type="number" v-model.number="kivonas2" /> db.
      </div>
      <div class="vflex gap">
        <label>☐ - 1 = 2</label>
        <input type="number" v-model.number="kivonas3" /> db.
      </div>
      <div class="Blue btn" @click="onStartBtn">Kezdés</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      running: false,
      summary: false,
      jobs: [],

      job: "",
      inputs: [],
      logs: [],
      good: 0,
      bad: 0,

      osszeg1: 10,
      osszeg2: 0,
      osszeg3: 0,
      kivonas1: 10,
      kivonas2: 0,
      kivonas3: 0,
      rel1: 10,
      max: 5,
    };
  },
  methods: {
    generate: function () {
      if (this.jobs.length == 0) {
        this.summary = true;
        return;
      }
      switch (this.jobs.shift()) {
        case "osszeg1":
          var sum = rando(this.max);
          (a = rando(sum)), (b = sum - a);
          this.job = a + "+" + b + "=" + "?";
          this.genNumberInput();
          break;
        case "osszeg2":
          var sum = rando(this.max);
          a = rando(sum);
          this.job = a + "+?=" + sum;
          this.genNumberInput();
          break;
        case "osszeg3":
          var sum = rando(this.max);
          a = rando(sum);
          this.job = "?+" + a + "=" + sum;
          this.genNumberInput();
          break;
        case "kivonas1":
          var a = rando(this.max),
            b = rando(a);
          this.job = a + "-" + b + "=" + "?";
          this.genNumberInput();
          break;
        case "kivonas2":
          var sum = rando(this.max);
          a = rando(sum);
          this.job = sum + "-?=" + a;
          this.genNumberInput();
        case "kivonas3":
          var sum = rando(this.max);
          (a = rando(sum)), (b = sum - a);
          this.job = "?-" + a + "=" + b;
          this.genNumberInput();
          break;
        case "rel1":
          this.job = rando(this.max) + "?" + rando(this.max);
          this.genRelInput();
          break;
      }
    },
    genNumberInput: function () {
      this.inputs = [];
      for (let i = 0; i < (this.max + 1); i++) {
        console.log(i,this.max,i < this.max + 1);
        this.inputs.push(i);
      }
    },
    genRelInput: function () {
      this.inputs = ["<", ">", "="];
    },
    isOk: function (input) {
      return eval(input.replace("=", "==")) ? true : false;
    },
    onClick: function (a) {
      if (this.logs.length > 4) this.logs.shift();
      var job = this.job.replace("?", a);
      this.logs.push(job);
      if (this.isOk(job)) {
        this.good++;
        this.generate();
      } else {
        this.bad++;
        //this.generate();
      }
    },
    onStartBtn: function () {
      var i;
      for (i = 0; i != this.rel1; i++) this.jobs.push("rel1");
      for (i = 0; i != this.osszeg1; i++) this.jobs.push("osszeg1");
      for (i = 0; i != this.kivonas1; i++) this.jobs.push("kivonas1");
      for (i = 0; i != this.osszeg2; i++) this.jobs.push("osszeg2");
      for (i = 0; i != this.osszeg3; i++) this.jobs.push("osszeg3");
      for (i = 0; i != this.kivonas2; i++) this.jobs.push("kivonas2");
      for (i = 0; i != this.kivonas3; i++) this.jobs.push("kivonas3");

      this.generate();
      this.running = true;
    },
  },
};
</script>

<style scoped>
.btn {
  cursor: pointer;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  font-size: 60px;
  padding: 0 40px;
  margin: 10px;
}

.gap {
  gap: 10px;
}

.btn:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.scroll {
  overflow: auto;
}

.bnumber {
  font-size: 80px;
  letter-spacing: 20px;
}

.snumber {
  font-size: 40px;
  letter-spacing: 10px;
  display: inline-block;
  padding: 7px 20px;
  border-radius: 10px;
}

.center {
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-flow: wrap;
}

label {
  min-width: 80px;
}

.Green {
  background-color: #4caf50;
}
.Blue {
  background-color: #008cba;
}
.Red {
  background-color: #f44336;
}
.Gray {
  background-color: #e7e7e7;
  color: black;
}
</style>