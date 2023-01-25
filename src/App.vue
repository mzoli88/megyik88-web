<template>
  <div id="wrap" class="noselect">
    <mainMsg></mainMsg>
    <div id="app" v-show="showWrap">
      <div class="main_page">
        <div class="bHeader noPrint">
          <h1>megyik88.hu</h1>
        </div>
        <div class="sHeader noPrint"></div>
        <div class="content">
          <template v-if="isIE">
            <div class="Box">
              <div class="BoxHeader">Miért pont Internet Explorer?</div>
              <div class="BoxCt">
                A te fajtád nehezíti meg az életem. Használd inkább ezt:
                <a target="_blank" href="https://www.google.com/chrome/"
                  >LINK</a
                >
                <br />I.E. alatt nem vagyok hajlandó megjeleneníteni rendes
                tartalmat! (Kivéve, ha fizetnek.)
              </div>
            </div>
          </template>
          <template v-else>
            <keep-alive>
              <router-view />
            </keep-alive>
          </template>
        </div>
      </div>
    </div>

    <div class="toPrint cflex">
      <div>
        <div>
          Kérem, gondoljon a környezetére, mielőtt kinyomtatja ezt az oldalt!
        </div>
        <div class="cflex greenTree gap">
          <font-awesome-icon icon="fa-solid fa-tree" />
          <font-awesome-icon icon="fa-solid fa-tree" />
          <font-awesome-icon icon="fa-solid fa-tree" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainMsg from "./Msg.vue";
export default {
  created: function () {
    global.App = this;
    if (!this.isIE) console.log("̄😂 ?");
    console.log("̄¯_(ツ)_/¯");
  },
  data: function name() {
    document.body.className = document.body.className = "style_green";
    return {
      isIE: false || !!document.documentMode,
      menu_clicks: 0,
      menu_click_run: false,
      menu_click_status: 0,
      menu_canClick: true,
      showWrap: true,
      style: "style_green",
    };
  },
  watch: {
    style: function (val) {
      document.body.className = document.body.className = val;
    },
  },
  methods: {
    menu_click: function (e) {
      var me = this;
      this.menu_clicks++;
      // log(this.menu_clicks, me.menu_click_status);
      if (e.ctrlKey) {
        Msg.s("Yeeee... nézd, megnyitottál egy új lapot!");
        return;
      }
      if (!me.menu_canClick) return;
      if (me.menu_clicks == 12) {
        switch (me.menu_click_status) {
          case 0:
            Msg.i("Keresel valamit?");
            break;
          case 1:
            Msg.i("Talán segítségre szorulsz?");
            break;
          case 2:
            Msg.i("Tudom mi kell neked. Várj egy picit és átirányítalak...");
            me.menu_canClick = false;
            setTimeout(function () {
              window.open("http://google.com/search?q=hogy+ne+legyek+hülye");
              me.menu_canClick = true;
            }, 4000);
            break;
          case 3:
            Msg.i("Nem volt jó? Pedig nekem sokat segített!");
            break;
          default:
            me.menu_click_status = -1;
            break;
        }
        me.menu_clicks = 0;
        me.menu_click_status++;
      }
      if (me.menu_click_run == false) {
        me.menu_click_run = true;
        setTimeout(function () {
          me.menu_clicks = 0;
          me.menu_click_run = false;
        }, 5000);
      }
    },
  },
  components: {
    mainMsg,
  },
};
</script>

<style scoped>
.greenTree {
  color: green !important;
  font-size: 80px;
  margin: 40px;
}
</style>