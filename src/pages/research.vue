<template>
  <div>
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold">Research</h1>
      </div>
    </header>
    <main class="container mx-auto px-4 py-8">
      <div
        v-for="(section, index) in data?.data?.sections"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-6 mb-6"
      >
        <h2 class="text-2xl font-bold mb-4">{{ section.title }}</h2>
        <p class="pb-2" v-for="(p, index) in section.content" :key="index">{{ p }}</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useService } from "@/service";

const { data } = useService("research");
</script>
