<template>
  <IonApp>
    <ion-menu side="start" menu-id="first" content-id="main">
      <ion-content>
        <ion-list>
          <ion-item  v-on:click="() => router.push('/')">Dashboard</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-header>
      <ion-toolbar>
        <ion-row>
          <ion-col size="2" class="centering-block">
            <ion-buttons>
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
          </ion-col>
          <ion-col class="centering-block">
                  <div class="handy-help-logo">
            <img src="/assets/handy-help-logo.svg"  alt="Handy Help Logo">
          </div>
<!--             <ion-title color="primary"
              >
              <ion-icon :icon="power"></ion-icon> Power Calculator</ion-title
            > -->
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header> 

    <ion-content class="has-header handy-help__bg" >
      <ion-router-outlet id="main"> </ion-router-outlet>
    </ion-content>
  </IonApp>
</template>

<script lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  menuController,
  IonItem,
  IonList,
  IonContent,
  IonMenu
} from "@ionic/vue";
import { defineComponent } from "vue";
import { power } from "ionicons/icons";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "App",
  setup() {
    return {
      power,
      router: useRouter()
    };
  },
  components: {
    IonApp,
    IonRouterOutlet,
    IonItem,
    IonContent,
    IonList,
    IonMenu
  },
  methods: {
    openFirst() {
      menuController.enable(true, "first");
      menuController.open("first");
    },
    openEnd() {
      menuController.open("end");
    },
    openCustom() {
      menuController.enable(true, "custom");
      menuController.open("custom");
    },
  },
});
</script>
