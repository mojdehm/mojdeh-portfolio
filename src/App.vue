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
          v-for="item in navItems"
          :key="item.label"
          @click="push(item.to)"
        >
          <div :class="mobile ? 'd-flex flex-column align-center' : 'd-flex align-center'">
            <v-icon :icon="item.icon" :size="mobile ? 20 : 22" :class="mobile ? '' : 'mr-3'"></v-icon>
            <span :class="mobile ? 'nav-caption' : ''">{{ item.label }}</span>
          </div>
        </v-list-item>
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

const navItems = [
  { icon: "home", label: "Home", to: "/" },
  { icon: "publish", label: "Publications", to: "/publications" },
  { icon: "science", label: "Research", to: "/research" },
  { icon: "web", label: "Posters", to: { name: "posters" } },
  { icon: "co_present", label: "Resume", to: "/resume" },
  { icon: "person", label: "About me", to: "/about" },
  { icon: "message", label: "Contact me", to: "/contact" },
];
</script>

<style scoped>
.nav-caption {
  font-size: 9px;
  line-height: 1.1;
  margin-top: 2px;
  text-align: center;
  white-space: normal;
}
</style>
