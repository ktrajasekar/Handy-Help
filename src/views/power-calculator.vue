<template>
  <ion-page>
    <ion-card-content class="power-calculator">
      <ion-item>
        <ion-label position="stacked">Units Consumed</ion-label>
        <ion-input v-model="units"></ion-input>
      </ion-item>
      <div class="power-calculator__calculate">
         <button class="brand-button-black"  v-on:click="calculateUnits">CALCULATE</button>
      </div>
      <div class="result-view" v-if="showResult">
        <div class="result-label">Fixed Charges</div>
        <div class="result-value">{{ fixedCharges }}</div>
        <div class="result-label">Electricity Duty</div>
        <div class="result-value">{{ dutyCharges }}</div>
        <div class="result-label null-style">Total Payable</div>
        <div class="result-value null-style">{{ Math.round(result) }}</div>
      </div>
    </ion-card-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonPage,
  IonCardContent,
  IonItem,
  IonInput,
  IonLabel
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    IonPage,
    IonCardContent,
    IonItem,
    IonInput,
    IonLabel
  },
  data() {
    return {
      units: 0,
      result: 0,
      showResult: false,
      fixedCharges: 0,
      dutyCharges: 0,
      data: null,
    };
  },
  methods: {
    calculateUnits() {
      this.result = 0;
      if (this.units <= 100) {
        this.result = 0;
      } else if (this.units > 100 && this.units <= 200) {
        this.calaculate200();
      } else if (this.units >= 201 && this.units <= 500) {
        this.calculate500();
      } else if (this.units >= 501) {
        this.calculate500more();
      }
      this.showResult = true;
    },
    calaculate200() {
      this.fixedCharges = 20;
      this.dutyCharges = this.units / 10;
      if (this.units > 100) {
        this.result =
          (this.units - 100) * 1.5 + this.fixedCharges + this.dutyCharges;
      }
    },
    calculate500() {
      let result1 = 0,
        result2 = 0;
      this.fixedCharges = 30;
      this.dutyCharges = this.units / 10;
      const temp = this.units - 100 - (this.units - 200);
      const range200 = this.units - 200;
      result1 = temp * 2;
      result2 = range200 * 3;
      this.result = result1 + result2 + this.fixedCharges + this.dutyCharges;
    },
    calculate500more() {
      let result1 = 0,
        result2 = 0,
        result3 = 0;
      this.fixedCharges = 50;
      this.dutyCharges = this.units / 10;
      const temp = 100;
      const range200 = 300;
      const range300 = this.units - 500;
      result1 = temp * 3.5;
      result2 = range200 * 4.6;
      result3 = range300 * 6.6;
      this.result =
        result1 + result2 + result3 + this.fixedCharges + this.dutyCharges;
    },
  },
  watch: {
    units: function() {
      this.showResult = false;
      this.fixedCharges = 0;
      this.dutyCharges = 0;
    },
  },
  setup() {
    return {};
  },
});
</script>
