<template>
  <div>
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold">Posters</h1>
      </div>
    </header>
    <main class="mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-lg font-semibold">
          Association between Pre-Adolescent Spinal Pain and Painful
          Temporomandibular Disorders in Young Adulthood
        </h2>
        <v-btn
        :href="posterPdf"
        download="mojdeh_mansoori_poster.pdf"
        class="ml-5 text-xs mt-5 font-bold"
        target="_blank"
        text="Download PDF"
        variant="tonal"
      />
        <VuePdfEmbed :source="posterPdf" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import VuePdfEmbed from "vue-pdf-embed";
import posterPdf from "../assets/poster.pdf";
</script>
