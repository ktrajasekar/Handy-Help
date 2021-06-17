<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-card-content class="power-calculator">
        <ion-item>
          <ion-label position="stacked">Total Kms Travelled</ion-label>
          <ion-input type="number" v-model="totalKmsTravelled"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked"
            >Speed O Meter kms / Per Litre</ion-label
          >
          <ion-input type="number" v-model="speedOMeterKms"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Petrol / Diesel Price Today</ion-label>
          <ion-input type="number" v-model="fuelPriceToday"></ion-input>
        </ion-item>
        <div class="power-calculator__calculate">
          <button class="brand-button-black" v-on:click="calculateNow">
            CALCULATE MILAGE
          </button>
        </div>
        <div class="milage-calc-result ">{{ result }}</div>
      </ion-card-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonCardContent,
  IonItem,
  IonInput,
  IonLabel,
  //   toastController,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MileageCalculator",
  components: {
    IonContent,
    IonPage,
    IonCardContent,
    IonItem,
    IonInput,
    IonLabel,
    // toastController,
  },
  data() {
    return {
      totalKmsTravelled: 0,
      speedOMeterKms: 0,
      fuelPriceToday: 0,
      result: "",
    };
  },
  methods: {
    calculateNow() {
      const noOFLitreFeul = this.totalKmsTravelled / this.speedOMeterKms;
      this.result = "Rs." + (noOFLitreFeul * this.fuelPriceToday).toFixed(2);
    },
  },
  ionViewWillLeave() {
    this.totalKmsTravelled = 0;
    this.speedOMeterKms = 0;
    this.fuelPriceToday = 0;
    this.result = "";
  },
  setup() {
    return {
      router: useRouter(),
    };
  },
});
</script>
