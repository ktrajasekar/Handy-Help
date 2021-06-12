<template>
  <IonApp>
    <ion-menu side="start" menu-id="first" content-id="main">
      <ion-header>
        <ion-toolbar>
          <ion-title>Start Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>Menu Item</ion-item>
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
            <ion-title color="primary"
              ><ion-icon :icon="power"></ion-icon> Power Calculator</ion-title
            >
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content class="has-header">
      <ion-router-outlet id="main"> </ion-router-outlet>
    </ion-content>
  </IonApp>
</template>

<script lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  menuController,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonItem,
  IonList,
  IonContent,
  IonMenu,
  IonMenuButton,
  IonButtons,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { power } from "ionicons/icons";

export default defineComponent({
  name: "App",
  setup() {
    return {
      power,
    };
  },
  components: {
    IonApp,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonItem,
    IonContent,
    IonMenu,
    IonMenuButton,
    IonList,
    IonRow,
    IonCol,
    IonIcon,
    IonButtons,
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
