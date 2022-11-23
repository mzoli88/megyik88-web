<template>
  <div>
    <div class="hflex fit gap Box">
      <div>
        <router-link to="/"> Vissza </router-link>
      </div>
      <div>Megoldott feladatok száma:{{ good_count }}</div>
      <div>Sikertelen feladatok száma:{{ bad_count }}</div>
      <template v-if="phase == 1 && !celebration">
        <div v-if="sortType == 0" class="taskText">
          Rendezd növekvő sorrendbe!
        </div>
        <div v-else class="taskText">Rendezd csökkenő sorrendbe!</div>
      </template>
      <div class="hflex gap">
        <div class="vflex">
          <button
            class="numberBox"
            v-for="(number, i) in toSelect"
            :key="'a' + i"
            :class="selected.includes(i) ? 'selected' : null"
            @click="selected.includes(i) ? null : onSelect(number, i)"
          >
            {{ number }}
          </button>
        </div>
        <template v-if="phase == 2 && !celebration">
          <div v-if="oddType == 0" class="taskText">
            Most válaszd ki a páros számokat!
          </div>
          <div v-else class="taskText">
            Most válaszd ki a páratlan számokat!
          </div>
        </template>
        <div class="vflex gap">
          <div
            class="numberBoxSelected"
            v-for="(number, i) in selected"
            :key="number + 'b' + i"
            @click="onSelect2(toSelect[number], i)"
            :class="selected2.includes(i) ? 'selected2' : null"
          >
            {{ toSelect[number] }}
          </div>
        </div>
      </div>
    </div>
    <div class="fit" v-if="celebration">
      <div class="feelBad cflex" style="font-size: 200px">☺</div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
    </div>
    <div
      class="fit feelBad cflex"
      style="font-size: 200px"
      v-if="celebration || feelBad"
    >
      <button class="nextBTN" @click="generate">Következő feladat</button>
    </div>
    <div class="fit feelBad cflex" style="font-size: 200px" v-if="feelBad">
      ☹
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      toSelect: [],
      selected: [],
      selected2: [],
      oddType: 0,
      sortType: 0,
      good_count: 0,
      bad_count: 0,
      phase: 1,
      celebration: false,
      feelBad: false,
    };
  },
  mounted: function () {
    this.generate();
    // this.phase = 2;
    // this.toSelect = [0, 2, 4, 6, 8, 10, 12, 14];
    // this.selected = [0, 1, 2, 3, 4, 5, 6, 7];
  },

  methods: {
    isgood: function () {
      if (this.phase == 2) {
        var found = this.selected
          .filter((x, i) => !this.selected2.includes(i))
          .filter((x) =>
            this.oddType ? this.toSelect[x] % 2 != 0 : this.toSelect[x] % 2 == 0
          );
        // console.log(found);
        if (found.length == 0) this.runGood();
      }
    },
    rand: function (min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
    random: function (max, min) {
      let tmp = [];
      min = min || 0;
      for (let i = 0; i < 5; i++) tmp.push(this.rand(min, max));

      let shuffled = tmp
        .sort()
        .filter(function (item, pos, ary) {
          return !pos || item != ary[pos - 1];
        })
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      // console.log(max, min, shuffled);

      return shuffled[this.rand(0, shuffled.length - 1)];
    },
    runGood: function (val) {
      this.good_count++;
      this.celebration = true;
    },
    runBad: function (val) {
      this.bad_count++;
      this.feelBad = true;
    },
    generate: function () {
      this.sortType = this.random(0, 1);
      this.oddType = this.random(0, 1);
      this.toSelect = [];
      this.selected = [];
      this.selected2 = [];
      this.phase = 1;
      this.celebration = false;
      this.feelBad = false;
      this.toSelect.push(this.random(0, 100));
      this.toSelect.push(this.random(0, 100));
      this.toSelect.push(this.random(0, 100));
      this.toSelect.push(this.random(0, 100));
      this.toSelect.push(this.random(0, 100));
      this.toSelect.push(this.random(0, 100));
      this.toSelect.push(this.random(0, 100));
      this.toSelect.push(this.random(0, 100));
    },
    onSelect: function (number, i) {
      if (this.feelBad) return;

      var has = this.toSelect
        .filter((x, i) => !this.selected.includes(i))
        .filter((x) => (this.sortType ? x > number : x < number));
      if (has.length) {
        // rossz
        this.runBad();
      } else {
        //jó
        this.selected.push(i);
        has = this.toSelect.filter((x, i) => !this.selected.includes(i));
        if (!has.length) this.phase = 2;
      }
      this.isgood();
    },
    onSelect2: function (number, i) {
      if (this.selected2.includes(i)) return;
      if (this.feelBad) return;
      if (this.phase != 2) return;
      if (number % 2 == 0) {
        if (this.oddType) {
          this.runBad();
        } else {
          this.selected2.push(i);
          this.isgood();
        }
      } else {
        if (!this.oddType) {
          this.runBad();
        } else {
          this.selected2.push(i);
          this.isgood();
        }
      }
      // console.log(number % 2 == 0, number, i, this.selected2);
    },
  },
};
</script>

<style scoped >
.taskText {
  font-size: 40px;
}

.nextBTN {
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.numberBox {
  cursor: pointer;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  font-size: 40px;
  padding: 0 20px;
  margin: 4px;
}

.numberBoxSelected {
  cursor: pointer;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 15px;
  font-size: 40px;
  padding: 0 10px;
  border: 4px solid transparent;
  border-radius: 50px;
}

.numberBox:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.selected {
  opacity: 0.5;
  text-decoration: line-through;
}
.selected2 {
  border: 4px solid blue;
}

@keyframes firework {
  0% {
    transform: translate(var(--x), var(--initialY));
    width: var(--initialSize);
    opacity: 1;
  }
  50% {
    width: 0.5vmin;
    opacity: 1;
  }
  100% {
    width: var(--finalSize);
    opacity: 0;
  }
}

/* @keyframes fireworkPseudo {
  0% { transform: translate(-50%, -50%); width: var(--initialSize); opacity: 1; }
  50% { width: 0.5vmin; opacity: 1; }
  100% { width: var(--finalSize); opacity: 0; }
}
 */
.firework,
.firework::before,
.firework::after {
  --initialSize: 0.5vmin;
  --finalSize: 45vmin;
  --particleSize: 0.2vmin;
  --color1: yellow;
  --color2: khaki;
  --color3: white;
  --color4: lime;
  --color5: gold;
  --color6: mediumseagreen;
  --y: -30vmin;
  --x: -50%;
  --initialY: 60vmin;
  content: "";
  animation: firework 2s infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, var(--y));
  width: var(--initialSize);
  aspect-ratio: 1;
  background: 
    /*
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 0% 0%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 100% 0%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 100% 100%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 0% 100%,
    */ radial-gradient(
        circle,
        var(--color1) var(--particleSize),
        #0000 0
      )
      50% 0%,
    radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 100% 50%,
    radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 50% 100%,
    radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 0% 50%,
    /* bottom right */
      radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 80%
      90%,
    radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 95% 90%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 90% 70%,
    radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 100% 60%,
    radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 55% 80%,
    radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 70% 77%,
    /* bottom left */
      radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 22%
      90%,
    radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 45% 90%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 33% 70%,
    radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 10% 60%,
    radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 31% 80%,
    radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 28% 77%,
    radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 13% 72%,
    /* top left */
      radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 80%
      10%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 95% 14%,
    radial-gradient(circle, var(--color2) var(--particleSize), #0000 0) 90% 23%,
    radial-gradient(circle, var(--color3) var(--particleSize), #0000 0) 100% 43%,
    radial-gradient(circle, var(--color4) var(--particleSize), #0000 0) 85% 27%,
    radial-gradient(circle, var(--color5) var(--particleSize), #0000 0) 77% 37%,
    radial-gradient(circle, var(--color6) var(--particleSize), #0000 0) 60% 7%,
    /* top right */
      radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 22%
      14%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 45% 20%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 33% 34%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 10% 29%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 31% 37%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 28% 7%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 13% 42%;
  background-size: var(--initialSize) var(--initialSize);
  background-repeat: no-repeat;
}

.firework::before {
  --x: -50%;
  --y: -50%;
  --initialY: -50%;
  /*   transform: translate(-20vmin, -2vmin) rotate(40deg) scale(1.3) rotateY(40deg); */
  transform: translate(-50%, -50%) rotate(40deg) scale(1.3) rotateY(40deg);
  /*   animation: fireworkPseudo 2s infinite; */
}

.firework::after {
  --x: -50%;
  --y: -50%;
  --initialY: -50%;
  /*   transform: translate(44vmin, -50%) rotate(170deg) scale(1.15) rotateY(-30deg); */
  transform: translate(-50%, -50%) rotate(170deg) scale(1.15) rotateY(-30deg);
  /*   animation: fireworkPseudo 2s infinite; */
}

.firework:nth-child(2) {
  --x: 30vmin;
}

.firework:nth-child(2),
.firework:nth-child(2)::before,
.firework:nth-child(2)::after {
  --color1: pink;
  --color2: violet;
  --color3: fuchsia;
  --color4: orchid;
  --color5: plum;
  --color6: lavender;
  --finalSize: 40vmin;
  left: 30%;
  top: 60%;
  animation-delay: -0.25s;
}

.firework:nth-child(3) {
  --x: -30vmin;
  --y: -50vmin;
}

.firework:nth-child(3),
.firework:nth-child(3)::before,
.firework:nth-child(3)::after {
  --color1: cyan;
  --color2: lightcyan;
  --color3: lightblue;
  --color4: PaleTurquoise;
  --color5: SkyBlue;
  --color6: lavender;
  --finalSize: 35vmin;
  left: 70%;
  top: 60%;
  animation-delay: -0.4s;
}
</style>