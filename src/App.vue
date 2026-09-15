<template>
  <v-app>
    <v-navigation-drawer
      permanent
      :rail="mobile"
      rail-width="56"
      width="220"
    >
      <v-list-item
        class="pl-4 pt-4"
        :prepend-avatar="profilePhoto"
        title="Mojdeh Mansoori"
        nav
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="home"
          title="Home"
          @click="push('/')"
        ></v-list-item>
        <v-list-item
          prepend-icon="publish"
          title="Publications"
          @click="push('/publications')"
        ></v-list-item>
        <v-list-item
          prepend-icon="science"
          title="Research"
          @click="push('/research')"
        ></v-list-item>
        <v-list-item
          prepend-icon="web"
          title="Posters"
          @click="push({name: 'posters'})"
        ></v-list-item>
        <v-list-item
          prepend-icon="co_present"
          title="Resume"
          @click="push('/resume')"
        ></v-list-item>
        <v-list-item
          prepend-icon="person"
          title="About me"
          @click="push('/about')"
        ></v-list-item>
        <v-list-item
          prepend-icon="message"
          title="Contact me"
          @click="push('/contact')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-gray-100 text-gray-800">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";
import profilePhoto from "./assets/images/mojdeh.jpeg";
import { useRouter } from "vue-router";

const { push } = useRouter();
const { mobile } = useDisplay();
</script>
