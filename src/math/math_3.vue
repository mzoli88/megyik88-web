<template>
  <div>
    <div class="hflex fit gap Box">
      <div>
        <router-link to="/"> Vissza </router-link>
      </div>
      <div class="vflex">
        <div class="toDoCount">
          {{ first }} {{ op }} {{ second }} =
          <input type="number" ref="field" v-model="input" />
        </div>
        <div class="fit"></div>
        <div>Megoldott feladatok száma:{{ good_count }}</div>
      </div>
    </div>
    <div class="fit" v-if="celebration">
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      first: null,
      second: null,
      op: null,
      input: null,
      good_count: 0,
      celebration: false,
    };
  },
  mounted: function () {
    this.generate();
  },
  watch: {
    input: function (val) {
      if (val == eval(this.first + this.op + this.second)) {
        this.generate();
        this.good_count++;
        this.celebration = true;
        clearTimeout(this.setTimeouttmp);
        this.setTimeouttmp = setTimeout(
          (x) => (this.celebration = false),
          2000
        );
      }
    },
  },
  methods: {
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
    generate: function () {
      var type = this.random(0, 2);
      this.input = null;
      switch (type) {
        case 2:
          this.first = this.random(10, 99);
          this.second = this.random(0, 9);
          this.op = "-";
          break;
        case 1:
          this.second = this.random(10, 99);
          this.first = this.random(0, 9);
          this.op = "+";
          break;
        default:
          this.first = this.random(10, 99);
          this.second = this.random(0, 9);
          this.op = "+";
          break;
      }
      console.log("help :D " + eval(this.first + this.op + this.second));
      this.$nextTick((x) => this.$refs.field.focus());
    },
  },
};
</script>

<style scoped >
.toDoCount {
  font-size: 40px;
  letter-spacing: 10px;
  display: inline-block;
  padding: 7px 20px;
  border-radius: 10px;
}

.toDoCount input {
  font-size: 40px;
  letter-spacing: 10px;
  display: inline-block;
  padding: 7px 20px;
  border-radius: 10px;
  width: 140px;
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