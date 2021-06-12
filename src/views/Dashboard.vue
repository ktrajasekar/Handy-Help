<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content padding>
          <div class="handy-help-logo">
            <img src="/assets/handy-help-logo.svg"  alt="Handy Help Logo">
          </div>
          <div class="hero-image">
            <img src="/assets/hero-image.svg"  alt="Handy Help Logo">
          </div>
          <div class="app-modules-container">
            <div class="app-module">
              <button class="brand-button-black">TNEB POWER CALCULATOR</button>
            </div>
                <div class="app-module">
              <button class="brand-button-black">MILAGE CALCULATOR</button>
            </div>
          </div>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
