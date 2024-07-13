<template>
  <v-app>
    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
          >
            <v-list-item
              :prepend-avatar="profilePhoto"
              title="Mojdeh Mansoori"
              nav
            >
              <template v-slot:append>
                <v-btn
                  icon="arrow_circle_left"
                  variant="text"
                  @click.stop="rail = !rail"
                ></v-btn>
              </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
              <v-list-item
              prepend-icon="home"
              title="Home"
              @click="push('/')"
              ></v-list-item>
              <v-list-item
                prepend-icon="article"
                title="Publications"
                @click="push('/publications')"
              ></v-list-item>
              <v-list-item
                prepend-icon="biotech"
                title="Research"
                @click="push('/research')"
              ></v-list-item>
              <v-list-item
                prepend-icon="person"
                title="About me"
                @click="push('/about')"
              ></v-list-item>
              <v-list-item
                prepend-icon="contact_page"
                title="Contact me"
                @click="push('/contact')"
              ></v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main class="h-screen overflow-auto bg-gray-100 text-gray-800">
            <div class="w-[calc(100vw-60px)]">
              <router-view />
            </div>
          </v-main>
        </v-layout>
      </v-card>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import profilePhoto from "./assets/images/mojdeh.jpeg";
import { useRouter } from "vue-router";

const { push } = useRouter();
const drawer = ref(true);
const rail = ref(true);
</script>
