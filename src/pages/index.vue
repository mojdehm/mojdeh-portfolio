<template>
  <div>
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold">Mojdeh Mansoori, Ph.D. Student</h1>
      </div>
    </header>
    <main class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/3 pb-6 md:pb-0">
            <img
              :src="profilePhoto"
              alt="Mojdeh Mansoori"
              class="rounded-full mx-auto md:mx-0 md:w-full"
            />
          </div>
          <div class="md:w-2/3 md:pl-8">
            <h2 class="text-2xl font-bold mb-4">{{ data?.data?.['main-section'].title }}</h2>
            <p class="pb-2" v-for="(p, index) in data?.data?.['main-section'].content" :key="index">{{ p }}</p>
            <a
              @click="() => push({ name: 'about' })"
              class="text-blue-500 text-sm cursor-pointer"
              >Read more ...</a
            >
          </div>
        </div>
      </div>
      <div v-for="(section, index) in data?.data?.sections" :key="index" class="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">{{ section.title }}</h2>
        <p class="pb-2" v-for="(p, index) in section.content" :key="index">{{ p }}</p>
      </div>
      <div class="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
        <p>
          Email:
          <a
            href="mailto:mojdeh.m@dent.au.dk"
            class="text-blue-500 hover:underline flex gap-2"
          >
            mojdeh.m@dent.au.dk
          </a>
        </p>
        <div class="flex p-8 gap-5">
          <a
            href="https://www.linkedin.com/in/mojdeh-mansoori-3a258482/"
            target="”_blank”"
          >
            <img width="32" height="32" :src="linkedin" />
          </a>
          <a
            href="https://www.researchgate.net/profile/Mojdeh-Mansoori"
            target="”_blank”"
          >
            <img width="32" height="32" :src="rgate" />
          </a>
          <a href="https://orcid.org/0000-0001-9026-7590" target="”_blank”">
            <img width="80" height="32" :src="orcid" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=AFLXxBMAAAAJ&hl=en"
            target="”_blank”"
          >
            <img width="32" height="32" :src="scholar" />
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import profilePhoto from "../assets/images/mojdeh.jpeg";
import linkedin from "../assets/images/linkedin.png";
import scholar from "../assets/images/scholar.png";
import orcid from "../assets/images/orcid.svg";
import rgate from "../assets/images/rgate.png";
import { useRouter } from "vue-router";
import { useService } from "@/service";

const { push } = useRouter();

const { data } = useService("home");

</script>
