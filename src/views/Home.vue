<template>
  <div class="hflex gap noPrint">
    <div class="Box">
      <div class="box_for_image">
        <div class="img_bg">
          <img
            :src="images[activeImage]"
            alt="Okos és sármos Megyik Zolán profil képe"
            class="megyik88_img pointer"
            @click="onImgClick"
          />
        </div>
        <h2 class="BoxHeader">Megyik Zoltán</h2>
        <div class="BoxCt">
          <div>Szoftverfejlesztő</div>
        </div>

        <div class="BoxCt">
          <div>
            <a
              v-if="!noLink"
              target="_BLANK"
              class="bold"
              href="https://www.linkedin.com/in/zoltán-megyik-294559184"
              >LinkedIn profil</a
            >
          </div>
        </div>
      </div>
      <div class="BoxCt">
        <br />
        <div>
          Jó tudni:
          <ul>
            <li v-html="todayText"></li>
            <li>
              Megvagy! Rögzítettem az IP címed. (Legalább is, ha az Apache
              access log be van kapcsolva. Mind1, ha lesz időm akkor beállítom.)
            </li>
            <li>
              Házassági évforduló: Október 20 Mondjuk ezt csak nekem kell nagyon
              tudi. TODO: később Cron-t állítani, mert nem bízok a naptárban.
            </li>
            <li>Próbáld meg nyomtatni az oldalt (Ctrl + p)</li>
            <li>
              Ez egy Vue Vue-ban készített "single-page" web alkalmazás.
              Nevezhetjük az én kis személyes fejlesztői játszóteremnek.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="Box">
      <div class="BoxHeader">Változtassunk az oldal külsején</div>
      <div class="BoxCt">
        <div>
          Nem tetszik a dizájn?
          <span v-if="style_count == 0">Tudom, érdekes a szín választás.</span>
          <span v-if="style_count >= 10">
            Kattintások száma: {{ click_count }}
          </span>
        </div>
        <ul>
          <li>
            <a v-if="!noLink" @click="changeStyle">{{ style_btn_text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="Box">
      <div class="BoxHeader">Matek a fiammal</div>
      <div class="BoxCt">
        Bizony a számítógép elé ültetem gyakorolni. Igy jár az, akinek
        programozó az apja:
        <ul>
          <li>
            <router-link v-if="!noLink" to="/math_2">
              1. osztály v1.2
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="Box">
      <div class="BoxHeader">Játék a születési dátummal</div>
      <div class="BoxCt">
        Készítettem egy kis dátum-idő kalkulátort, amivel részletes
        információkat tudhatsz meg a korodról. Használhatod arra is, hogy
        megnézd mióta dolgozol a jelenlegi munkahelyeden.
        <br />
        <ul>
          <li>
            <router-link v-if="!noLink" to="/age">
              Link a játékhoz
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function name() {
    var days = [
      "Vasárnap van! &#127881; (Holnap hétfő &#128546;)",
      "Hétfő van, &#128557; sajnálatos",
      "Már csak 3 nap és péntek",
      "Már csak 2 nap és péntek",
      "Már csak 1 nap és péntek",
      "Péntek van! &#127881;&#127881;&#127881;",
      "Szombat van, nem kell dolgozni! &#127881;",
    ];
    return {
      todayText: days[new Date().getDay()],
      click_count: 0,
      style_count: 0,
      style_btn_text: "<< katt ide >>",
      activeImage: 0,
      noLink: false,
      images: ["pic/megyik88.jpg", "pic/megyik88_evil.jpg"],
    };
  },
  methods: {
    changeStyle: function (e) {
      this.style_count++;
      this.click_count++;
      switch (this.style_count) {
        case 1:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          break;
        case 2:
          this.style_btn_text += " ... Talán bugos?";
          break;
        case 3:
          this.style_btn_text += " ...Próbáld még...";
          break;
        case 10:
          this.style_btn_text = "Megoldottam, most már menni fog!";
          break;
        case 11:
          var el = document.createElement("div");
          el.style.cssText =
            "position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;background:#000";
          el.innerHTML =
            '<img src="pic/mzoli88_portrait_scary.jpg" alt="megyik scare" style="display: block;margin: auto;margin-top: 35vh;">';
          el.className = "noselect";
          document.body.appendChild(el);
          // let me = this;
          App.showWrap = false;
          setTimeout(function () {
            document.body.removeChild(el);
            App.showWrap = true;
          }, 4000);
          this.style_btn_text = "Hehe";
          break;
        case 12:
          this.style_btn_text += " he";
          break;
        case 13:
          this.style_btn_text += " he";
          break;
        case 14:
          this.style_btn_text += " he";
          break;
        case 15:
          this.style_btn_text = "<< Következő >>";
          App.style = "style_simple";
          this.delayBtn();
          Msg.i("Igy nézhetnek ki az oldalak css nélkül.", 6);
          break;
        case 16:
          this.style_btn_text = "<< Következő >>";
          App.style = "style_apache";
          break;
        case 17:
          this.style_btn_text = "<< Következő >>";
          App.style = "style_colorfull";
          break;
        case 18:
          this.style_btn_text = "<< Következő >>";
          App.style = "style_black";
          break;
        default:
          App.style = "style_main";
          this.style_count = 15;
          break;
      }
      if (this.click_count == 22) {
        var el = document.createElement("div");
        el.style.cssText =
          "position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;background:#fff";
        el.innerHTML =
          '<img class="tmp_img" src="pic/db.jpg" alt="db" style="display: block;margin: auto;">';
        el.className = "noselect";
        document.body.appendChild(el);
        App.showWrap = false;
        setTimeout(function () {
          Msg.i("Hoppá!", 2);
          setTimeout(function () {
            Msg.i("Kérlek, csukd be a szemed és ne nyomj semmit!", 3);
            setTimeout(function () {
              Msg.i("Mindjárt megoldom...", 4);
              setTimeout(function () {
                document.body.removeChild(el);
                App.showWrap = true;
              }, 6000);
            }, 3500);
          }, 3500);
        }, 1500);
      }
    },
    onImgClick: function () {
      this.activeImage++;
      if (this.activeImage >= this.images.length) this.activeImage = 0;
    },
    delayBtn: function () {
      var me = this;
      me.noLink = true;
      setTimeout(function () {
        me.noLink = false;
      }, 1000);
    },
  },
};
</script>