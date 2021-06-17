<template>
  <IonApp>
    <ion-menu side="start" menu-id="first" content-id="main" autoHide="false">
      <div class="brand-logo-small">
        <div class="side-menu-logo">
          <img src="/assets/handy-help-logo.svg" alt="Handy Help Logo" />
        </div>
      </div>
      <ion-content>
        <ion-list class="brand-font-bold">
          <ion-item v-on:click="gotoPage('/')">Dashboard</ion-item>
          <ion-item v-on:click="gotoPage('/power-calculator')"
            >TNEB Power Calculator</ion-item
          >
          <ion-item v-on:click="gotoPage('/mileage-calculator')">Mileage Calculator</ion-item>
          <ion-item>News Feeds</ion-item>
        </ion-list>
        <p class="version-text">Version:1.0</p>
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
              <img src="/assets/handy-help-logo.svg" alt="Handy Help Logo" />
            </div>
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header>

    <ion-content class="has-header handy-help__bg">
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
  IonMenu,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { power } from "ionicons/icons";
import { useRouter } from "vue-router";
import { isPlatform  } from '@ionic/vue';

export default defineComponent({
  name: "HandyHelp",
  setup() {
    return {
      power,
      router: useRouter(),
    };
  },
  components: {
    IonApp,
    IonRouterOutlet,
    IonItem,
    IonContent,
    IonList,
    IonMenu,
  },
  created(){
    console.log('%c Oh my heavens! ', 'background: green; color: #bada55', isPlatform('ios'));
  },
  methods: {
    openFirst() {
      menuController.enable(true, "first");
      menuController.open("first");
    },
    openEnd() {
      menuController.open("end");
    },
    gotoPage(params: any) {
      this.$router.push(params);
      menuController.close("first");
    }
  },
});
</script>
