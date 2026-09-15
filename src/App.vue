<template>
  <v-app>
    <v-app-bar v-if="mobile" density="compact" color="white" elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mojdeh Mansoori</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :permanent="!mobile"
      :temporary="mobile"
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
          @click="navigate('/')"
        ></v-list-item>
        <v-list-item
          prepend-icon="publish"
          title="Publications"
          @click="navigate('/publications')"
        ></v-list-item>
        <v-list-item
          prepend-icon="science"
          title="Research"
          @click="navigate('/research')"
        ></v-list-item>
        <v-list-item
          prepend-icon="web"
          title="Posters"
          @click="navigate({name: 'posters'})"
        ></v-list-item>
        <v-list-item
          prepend-icon="co_present"
          title="Resume"
          @click="navigate('/resume')"
        ></v-list-item>
        <v-list-item
          prepend-icon="person"
          title="About me"
          @click="navigate('/about')"
        ></v-list-item>
        <v-list-item
          prepend-icon="message"
          title="Contact me"
          @click="navigate('/contact')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-gray-100 text-gray-800">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useDisplay } from "vuetify";
import profilePhoto from "./assets/images/mojdeh.jpeg";
import { useRouter } from "vue-router";

const { push } = useRouter();
const { mobile } = useDisplay();
const drawer = ref(!mobile.value);

watch(mobile, (isMobile) => {
  drawer.value = !isMobile;
});

function navigate(route: string | { name: string }) {
  push(route);
  if (mobile.value) {
    drawer.value = false;
  }
}
</script>
