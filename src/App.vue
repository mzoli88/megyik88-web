<template>
  <div id="wrap" class="noselect">
    <mainMsg></mainMsg>
    <div id="app" v-show="showWrap">
      <div class="main_page">
        <div class="bHeader noPrint">
          <h1 class="site_name">megyik88.hu</h1>
        </div>
        <div class="sHeader noPrint"></div>
        <div class="content">
          <template v-if="isIE">
            <div class="Box">
              <div class="BoxHeader">Miért pont Internet Explorer?</div>
              <div class="BoxCt">
                A te fajtád nehezíti meg a fejlesztők életét. Használd inkább az
                alábbi böngészőt:
                <a target="_blank" href="https://www.google.com/chrome/">
                  LINK
                </a>
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
    document.body.className = document.body.className = "style_red";
    return {
      isIE: false || !!document.documentMode,
      showWrap: true,
      style: "style_red",
    };
  },
  watch: {
    style: function (val) {
      document.body.className = document.body.className = val;
    },
  },
  // methods: {
  //   menu_click: function (e) {
  //     window.open("http://google.com/search?q=hogy+ne+legyek+hülye");
  //   },
  // },
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

.site_name {
  animation: lights 20s 10s linear infinite;
  text-decoration: none;
}

@keyframes lights {
  0% {
    text-shadow: -10px 5px 2px #33333300;
  }
  5% {
    text-shadow: 0px 5px 2px #333333dd;
  }
  10% {
    text-shadow: 15px 5px 2px #33333300;
  }
}
</style>