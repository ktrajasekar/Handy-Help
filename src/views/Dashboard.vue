<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-content padding>
          <div class="hero-image">
            <img src="/assets/hero-image.svg"  alt="Handy Help Logo">
          </div>
          <div class="app-modules-container">
            <div class="app-module">
              <button class="brand-button-black" v-on:click="() => router.push('/power-calculator')" >TNEB POWER CALCULATOR</button>
            </div>
                <div class="app-module">
              <button class="brand-button-black" v-on:click="() => router.push('/mileage-calculator')" >MILAGE CALCULATOR</button>
            </div>
                        <div class="app-module">
              <button class="brand-button-black" v-on:click="() => router.push('/news-feed')" >NEWS FEED</button>
            </div>
          </div>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Dashboard',
  components: { IonContent, IonPage },
setup() {
    return {
      router: useRouter()
    }
  }
});
</script>
