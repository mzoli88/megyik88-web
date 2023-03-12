<template>
  <div>
    <div>Jó:{{ good_count }}</div>
    <div>Rossz:{{ bad_count }}</div>
    <div class="pointer" @click="read">Hang lejátszása &#x1F50A;</div>
    <h2 v-if="index && !good && !bad">
      {{
        words[index]
          .replace("j", "_")
          .replace("J", "_")
          .replace("ly", "_")
          .replace("Ly", "_")
      }}
    </h2>
    <h2 v-if="good || bad" :class="{ red: bad, green: good }" class="answer">
      {{ words[index] }}
    </h2>
    <div v-if="index && !good && !bad" class="vflex gap">
      <div class="Blue btn" @click="onJ">j</div>
      <div class="Blue btn" @click="onLy">ly</div>
    </div>
    <div v-else>
      <div class="btn Blue" @click="next">Következő</div>
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
var words = [
  "ajak",
  "ajándék",
  "ajtó",
  "ájul",
  "akadály",
  "amely",
  "apály",
  "aszály",
  "átkelőhely",
  "bagoly",
  "baj",
  "báj",
  "bajnok",
  "bajusz",
  "bármely",
  "bátyja",
  "bélyeg",
  "bivaly",
  "bója",
  "bolygó",
  "bojler",
  "bolyong",
  "bojt",
  "borbély",
  "borjú",
  "bújik",
  "cikkely",
  "csekély",
  "cserje",
  "dagály",
  "derelye",
  "díj",
  "éjfél",
  "éjjel",
  "éjszaka",
  "ejt",
  "ejtőernyő",
  "eleje",
  "éljen!",
  "engedély",
  "erély",
  "esély",
  "évfolyam",
  "fahéj",
  "fáj",
  "fájdalom",
  "fáklya",
  "fej",
  "fejedelem",
  "fejsze",
  "fejt",
  "fekhely",
  "felejt",
  "férj",
  "fogoly",
  "fojt",
  "folyam",
  "folyékony",
  "folyik",
  "folyó",
  "folyosó",
  "folytat",
  "földrajz",
  "furulya",
  "fürj",
  "gally",
  "gépjármű",
  "gereblye",
  "Gergely",
  "gólya",
  "golyó",
  "gomblyuk",
  "gömbölyű",
  "görkorcsolya",
  "gulyás",
  "gyapjú",
  "gyújt",
  "gyűjt",
  "gyűjtemény",
  "haj",
  "háj",
  "hajít",
  "hajnal",
  "Hajnalka",
  "hajó",
  "hajrá!",
  "hajt",
  "hajtás",
  "héj",
  "héja",
  "hely",
  "helyes",
  "helyesírás",
  "helyett",
  "helyez",
  "helyezés",
  "helyiség",
  "helység",
  "helyszín",
  "hógolyózik",
  "hólyag",
  "homályos",
  "hópehely",
  "hüvelyk",
  "ibolya",
  "Ibolya",
  "idején",
  "időjárás",
  "ifjú",
  "íj",
  "íjász",
  "ijed",
  "ijedség",
  "ijeszt",
  "ilyen",
  "injekció",
  "írásjel",
  "jácint",
  "jaguár",
  "jajgat",
  "János",
  "január",
  "japán",
  "jár",
  "jármű",
  "járvány",
  "játék",
  "játszik",
  "javít",
  "jég",
  "jegy",
  "jel",
  "jelen",
  "jeles",
  "jellem",
  "jelvény",
  "jelző",
  "jérce",
  "jó",
  "jobb",
  "jókor",
  "jólelkű",
  "jósol",
  "jószág",
  "József",
  "jön",
  "jövő",
  "Judit",
  "juh",
  "juhar",
  "juhász",
  "Júlia",
  "Julianna",
  "július",
  "június",
  "jut",
  "jutalom",
  "kályha",
  "Károly",
  "kastély",
  "keselyű",
  "kétely",
  "király",
  "királynő",
  "komoly",
  "korcsolya",
  "kölyök",
  "kristály",
  "kulcslyuk",
  "lábujj",
  "lajhár",
  "Lajos",
  "lefolyó",
  "lejjebb",
  "lejtő",
  "lyuk",
  "lyukas",
  "lyukasztó",
  "máj",
  "májas",
  "majdan",
  "majdcsak",
  "majom",
  "május",
  "mély",
  "melyik",
  "mélység",
  "Mihály",
  "milyen",
  "moly",
  "mosoly",
  "mosolyog",
  "muszáj",
  "műhely",
  "nyáj",
  "nyavalya",
  "nyavalyog",
  "nyújt",
  "nyújtózik",
  "óhaj",
  "olaj",
  "olyan",
  "olykor",
  "osztály",
  "pajta",
  "pajtás",
  "pajzs",
  "pálya",
  "pályázat",
  "papagáj",
  "paraj",
  "pehely",
  "persely",
  "petrezselyem",
  "pisztoly",
  "pocsolya",
  "pólya",
  "pulyka",
  "raj",
  "rajong",
  "rajt",
  "rajta",
  "rajz",
  "rejt",
  "rejtvény",
  "ricsaj",
  "saját",
  "sajnál",
  "sajnos",
  "sajt",
  "segély",
  "sejt",
  "sekély",
  "selejt",
  "selyem",
  "selymes",
  "sikoly",
  "sóhaj",
  "sólyom",
  "sújt",
  "súly",
  "súlyos",
  "súlyzó",
  "süllyed",
  "szabály",
  "szabályos",
  "száj",
  "szeszélyes",
  "szíj",
  "szomjas",
  "táj",
  "talaj",
  "tégely",
  "tej",
  "tejföl",
  "teljes",
  "teljesít",
  "terjeszt",
  "teteje",
  "tojás",
  "tolvaj ",
  "tűzhely",
  "új (nem régi)",
  "újév",
  "újdonság",
  "ujj (testrész)",
  "újra",
  "újság",
  "uszály",
  "ünnepély",
  "vaj",
  "váj",
  "vajon?",
  "valójában",
  "vályog",
  "vályú",
  "varjú",
  "veszély",
  "veszélyes",
  "zaj",
  "zsálya",
  "zsámoly",
  "zsivaj",
];

export default {
  data: function () {
    return {
      index: null,
      words: null,
      celebration: false,
      good: false,
      bad: false,
      good_count: 0,
      bad_count: 0,
    };
  },
  mounted: function () {
    this.words = words;
    this.$nextTick(() => {
      this.generate();
    });
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
      this.index = this.random(0, this.words.length - 1);
      this.read();
    },
    read: function () {
      // console.log(this.words[this.index]);
      var to_speak = new SpeechSynthesisUtterance(this.words[this.index]);
      to_speak.lang = "hu-HU";
      window.speechSynthesis.speak(to_speak);
    },
    onJ: function () {
      // console.log(this.words[this.index].toLowerCase());
      if (this.words[this.index].toLowerCase().includes("j")) this.dogood();
      else this.dobad();
    },
    onLy: function () {
      if (this.words[this.index].toLowerCase().includes("ly")) this.dogood();
      else this.dobad();
    },
    dogood: function () {
      this.good = true;
      this.celebration = true;
      this.good_count++;
    },
    dobad: function () {
      this.bad = true;
      this.bad_count++;
    },
    next: function () {
      if (this.good) this.words.splice(this.index, 1);
      this.bad = false;
      this.good = false;
      this.celebration = false;
      // console.log(this.words);
      this.generate();
    },
  },
};
</script>

<style scoped >
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
.Blue {
  background-color: #008cba;
}
.red {
  background-color: red;
}
.green {
  background-color: greenyellow;
}
.answer {
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 10px;
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