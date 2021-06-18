<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-card-content class="news-feeds">
        <h2 class="text-center">smashingmagazine.com feeds</h2>
        <ul class="rss-feeds">
          <li v-for="item in feeds" v-bind:key="item.title">
            <a v-bind:href="item.link" target="_blank">{{ item.title }}</a>
          </li>
        </ul>
      </ion-card-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonCardContent} from "@ionic/vue";
import { defineComponent } from "vue";
import Parser from "rss-parser";
type CustomFeed = { foo: string };
type CustomItem = { bar: number };

const parser: Parser<CustomFeed, CustomItem> = new Parser({
  customFields: {},
});

export default defineComponent({
  name: "Tab1",
  components: { IonContent, IonPage, IonCardContent },
  data() {
    return {
      feeds: {},
    };
  },
  async created() {
    const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";
    const feed = await parser.parseURL(
      CORS_PROXY +
        "https://www.smashingmagazine.com/category/javascript/index.xml"
    );
    this.feeds = feed.items;
  },
});
</script>
