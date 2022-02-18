<template>
  <div>
    <div class="Box">
      <div class="BoxHeader">Kérlek, add meg a születésed napját:</div>
      <div class="BoxCt">
        <form autocomplete="off">
          <input
            type="text"
            name="y"
            min="0"
            max="2400"
            placeholder="Év"
            v-model="y"
          />
          <input
            type="text"
            name="m"
            min="1"
            max="12"
            placeholder="Hónap"
            v-model="m"
          />
          <input
            type="text"
            name="d"
            min="1"
            max="31"
            placeholder="Nap"
            v-model="d"
          />
        </form>
      </div>
      <div class="BoxCt_error" v-if="errors.length">
        <div v-for="(error, i) in errors" v-bind:key="i + '_e'">
          {{ error }}
        </div>
      </div>
      <div class="BoxCt_info" v-if="out_sec">
        <div>
          <span class="bold">{{ out_year }}</span> éves vagy,
        </div>
        <div>
          <span class="bold">{{ out_day }}</span> napja születtél,
        </div>
        <div>
          ... az
          <span class="bold">{{ out_hour }}</span> óra,
        </div>
        <div>
          ... vagy
          <span class="bold">{{ out_min }}</span> perc,
        </div>
        <div>
          ... vagy
          <span class="bold">{{ out_sec }}</span> másodperc. Milyen öreg vagy!
        </div>
        <br />
        <div>Szerinted számolja a szökőéveket is?</div>
      </div>
      <br />
      <a @click="back">Vissza</a>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    var m = [
        "Január",
        "Február",
        "Március",
        "Április",
        "Május",
        "Június",
        "Július",
        "Augusztus",
        "Szeptember",
        "Október",
        "November",
        "December",
      ],
      date = new Date();
    return {
      y: null,
      m: null,
      d: null,
      out_sec: false,
      out_min: false,
      out_hour: false,
      out_day: false,
      out_year: false,
      fulldate: null,
      errors: [],
    };
  },
  watch: {
    y: function () {
      this.validateDate();
    },
    m: function () {
      this.validateDate();
    },
    d: function () {
      this.validateDate();
    },
  },

  methods: {
    back: function () {
      this.$router.push("/");
    },
    validateDate: function () {
      this.out_sec = false;
      this.errors = [];
      if (!this.y || !this.m || !this.d) return false;
      var reg = /^[0-9]+$/;
      if (!reg.test(this.y) || !reg.test(this.m) || !reg.test(this.d))
        return this.errors.push(
          "Te egy speciális korban (vagy kórral) születtél."
        );
      var y = parseInt(this.y),
        m = parseInt(this.m),
        d = parseInt(this.d),
        now = new Date(),
        praseDate = Date.parse(y + "-" + m + "-" + d);

      if (m == now.getMonth() + 1 && d == now.getDate())
        Msg.s("Boldog születésnapot!");
      if (y <= 1900) this.errors.push("Valaki nagyon öreg!");
      if (m < 1 || m > 12) this.errors.push('"' + m + '" - van ilyen hónap?');
      if (!praseDate)
        return this.errors.push("Nem létezik ilyen nap!");

      if (praseDate > now.getTime())
        return this.errors.push("Időutazás?");

      if(y<100)return; //Date.parse nem jó ha két karakterű a dátum

      this.out_sec = Math.floor((now.getTime() - praseDate) / 1000);
      this.out_min = Math.floor(this.out_sec / 60);
      this.out_hour = Math.floor(this.out_min / 60);
      this.out_day = Math.floor(this.out_hour / 24);
      this.out_year = Math.abs(
        new Date(now.getTime() - praseDate).getUTCFullYear() - 1970
      );
    },
  },
  // beforeRouteLeave: function (to, from, next) {
  //   if (this.out_sec == false) {
  //     Msg.e("Nyuszi!");
  //   }
  //   next();
  // },
};
</script>