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
            rail-width="60"
            width="220"
          >
            <v-list-item
              class="pl-4 pt-4"
              :prepend-avatar="profilePhoto"
              title="Mojdeh Mansoori"
              nav
            >
              <template #append>
                <v-btn
                  width="30"
                  height="30"
                  icon="chevron_left"
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
          <v-main class="h-screen overflow-auto bg-gray-100 text-gray-800">
            <div
              @click.stop="rail = true"
              class="w-[calc(100vw-60px)] md:w-full min-h-screen"
            >
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
