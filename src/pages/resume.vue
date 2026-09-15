<template>
  <v-container class="my-10">
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="text-4xl font-bold">Mojdeh Mansoori</h1>
        <p>Aarhus, Denmark</p>
        <p>E-Mail: mojdeh.m@dent.au.dk</p>
      </v-col>
      <v-btn
        :href="cvPdf"
        download="mojdeh_mansoori_cv.pdf"
        class="ml-5 text-xs mt-5 font-bold"
        target="_blank"
        text="PDF"
        variant="tonal"
      />
    </v-row>

    <v-row>
      <v-col cols="12" class="mt-8">
        <h2 class="text-3xl font-semibold">Scientific Profile</h2>
        <p>{{ data?.data?.profile }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="mt-8">
        <h2 class="text-3xl font-semibold">
          Educational and Career Background
        </h2>
        <v-card
          v-for="(p, index) in data?.data?.positions"
          :key="'position-' + index"
          class="mt-4"
        >
          <v-card-title class="text-2xl font-bold">{{ p.role }}</v-card-title>
          <v-card-text>
            <p>{{ p.date }}</p>
            <p>{{ p.org }}</p>
            <p v-if="p.detail">{{ p.detail }}</p>
          </v-card-text>
        </v-card>

        <v-card
          v-for="(e, index) in data?.data?.education"
          :key="'education-' + index"
          class="mt-4"
        >
          <v-card-title class="text-2xl font-bold">{{ e.content }}</v-card-title>
          <v-card-text>
            <p v-if="e.org">{{ e.org }}</p>
            <p v-if="e.detail">{{ e.detail }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="mt-8">
        <h2 class="text-3xl font-semibold">Teaching Experience</h2>
        <v-card
          v-for="(t, index) in data?.data?.teaching"
          :key="'teaching-' + index"
          class="mt-4"
        >
          <v-card-text>
            <p>{{ t.content }}</p>
            <p v-if="t.org">{{ t.org }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="mt-8">
        <h2 class="text-3xl font-semibold">International Conferences</h2>
        <ul class="list-disc list-inside">
          <li
            v-for="(c, index) in data?.data?.conferences"
            :key="'conf-' + index"
            class="p-2 pl-4"
          >
            {{ c }}
          </li>
        </ul>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="mt-8">
        <h2 class="text-3xl font-semibold">Academic Service</h2>
        <ul class="list-disc list-inside">
          <li
            v-for="(s, index) in data?.data?.service"
            :key="'service-' + index"
            class="p-2 pl-4"
          >
            {{ s }}
          </li>
        </ul>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="mt-8">
        <h2 class="text-3xl font-semibold">Honors and Awards</h2>
        <ul class="list-disc list-inside">
          <li
            v-for="(h, index) in data?.data?.honors"
            :key="'honor-' + index"
            class="p-2 pl-4"
          >
            {{ h }}
          </li>
        </ul>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="mt-8">
        <h2 class="text-3xl font-semibold">Publications</h2>
        <p>
          See the
          <a href="/publications" class="text-blue-500 hover:underline">Publications</a>
          page for the full list.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import cvPdf from "../assets/cv.pdf";
import { useService } from "@/service";

const { data } = useService("cv");
</script>
