<template>
  <transition name="move-in">
    <div id="msg" v-if="txt" :class="cls" v-html="txt"></div>
  </transition>
</template>

<script>
export default {
  created: function() {
    global.Msg = this;
  },
  data: function() {
    return {
      time: 0,
      txt: false,
      counting: false,
      cls: null
    };
  },
  methods: {
    timedMsg: function(txt, type, sec) {
      var me = this;
      if (me.txt) {
        me.txt = false;
        setTimeout(function() {
          me.timedMsg(txt, type, sec);
        }, 500);
      } else {
        me.cls = type || "info";
        me.txt = txt;
        me.time = sec || 5;
        if (me.counting === false) me.doCount();
      }
    },
    doCount: function() {
      var me = this;
      me.counting = true;
      if (me.time < 1) {
        me.counting = false;
        me.txt = false;
      } else {
        setTimeout(function() {
          me.time--;
          me.doCount();
        }, 1000);
      }
    },
    s: function(txt, sec) {
      this.timedMsg(txt, "success", sec);
    },
    i: function(txt, sec) {
      this.timedMsg(txt, "info", sec);
    },
    w: function(txt, sec) {
      this.timedMsg(txt, "warning", sec);
    },
    e: function(txt, sec) {
      this.timedMsg(txt, "error", sec);
    }
  }
};
</script>