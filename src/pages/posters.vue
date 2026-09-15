<template>
  <div>
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold">Posters</h1>
      </div>
    </header>
    <main class="mx-auto px-4 py-8 max-w-5xl">
      <section class="mb-10">
        <h2 class="text-xl font-bold mb-1">EAOPD 2026</h2>
        <p class="text-sm text-gray-600 mb-4">
          Athens, Greece, 18–19 September 2026. Scanned the QR code on the poster? Here it is.
        </p>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-lg font-semibold">
            Multidomain phenotyping of painful temporomandibular disorders in young adults from the
            Danish National Birth Cohort
          </h3>
          <v-btn
            :href="eaopd2026"
            download="Mansoori_EAOPD2026_poster.pdf"
            class="mt-3 text-xs font-bold"
            target="_blank"
            text="Download PDF"
            variant="tonal"
          />
          <iframe :src="eaopd2026 + '#toolbar=0&view=Fit'" class="poster-frame mt-4" title="EAOPD 2026 poster"></iframe>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold mb-4">Past Conference Posters</h2>

        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
          <p class="text-sm text-gray-500">IASP World Congress, 2024</p>
          <h3 class="text-lg font-semibold">
            Association between Pre-Adolescent Spinal Pain and Painful Temporomandibular Disorders
            in Young Adulthood
          </h3>
          <v-btn
            :href="iasp2024"
            download="Mansoori_IASP2024_poster.pdf"
            class="mt-3 text-xs font-bold"
            target="_blank"
            text="Download PDF"
            variant="tonal"
          />
          <iframe :src="iasp2024 + '#toolbar=0&view=Fit'" class="poster-frame mt-4" title="IASP 2024 poster"></iframe>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
          <p class="text-sm text-gray-500">EAOPD Conference, September 2023</p>
          <h3 class="text-lg font-semibold">
            Adolescent Dietary Quality as a Risk Factor for Painful TMD & Headaches in Young Adults
          </h3>
          <v-btn
            :href="eaopd2023"
            download="Mansoori_EAOPD2023_poster.pdf"
            class="mt-3 text-xs font-bold"
            target="_blank"
            text="Download PDF"
            variant="tonal"
          />
          <iframe :src="eaopd2023 + '#toolbar=0&view=Fit'" class="poster-frame mt-4" title="EAOPD 2023 poster"></iframe>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6">
          <p class="text-sm text-gray-500">Departmental Research Day, 24 April 2023</p>
          <h3 class="text-lg font-semibold">
            Dietary quality in adolescents as a risk factor for painful temporomandibular disorders
            and headache in young adult members of the Danish National Birth Cohort
          </h3>
          <v-btn
            :href="researchDay2023"
            download="Mansoori_ResearchDay2023_poster.pdf"
            class="mt-3 text-xs font-bold"
            target="_blank"
            text="Download PDF"
            variant="tonal"
          />
          <iframe :src="researchDay2023 + '#toolbar=0&view=Fit'" class="poster-frame mt-4" title="Research Day 2023 poster"></iframe>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import eaopd2026 from "../assets/posters/eaopd2026.pdf";
import researchDay2023 from "../assets/posters/research-day-2023.pdf";
import eaopd2023 from "../assets/posters/eaopd2023.pdf";
import iasp2024 from "../assets/posters/iasp2024.pdf";
</script>

<style scoped>
.poster-frame {
  width: 100%;
  aspect-ratio: 1.41 / 1;
  max-height: 85vh;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
}
</style>
