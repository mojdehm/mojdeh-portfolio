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
          <div class="md:w-1/3">
            <img
              :src="profilePhoto"
              alt="Mojdeh Mansoori"
              class="rounded-full mx-auto md:mx-0 md:w-full"
            />
          </div>
          <div class="md:w-2/3 md:pl-8">
            <h2 class="text-2xl font-bold mb-4">Introduction</h2>
            <p class="mb-4">
              Mojdeh is a dedicated Ph.D. student specializing in
              orofacial pain and jaw function. With a strong background in
              general dentistry and oral medicine, she is committed to advancing
              the field through her research on epigenetic and nutritional risk
              factors for painful temporomandibular disorders.
            </p>
            <a href="research.html" class="text-blue-500 hover:underline"
              >Read more about my research</a
            >
          </div>
        </div>
      </div>
      <div class="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Achievements</h2>
        <ul class="list-disc list-inside">
          <li>Top-ranked student upon graduation in 2017</li>
          <li>Iranian Board of Oral Medicine</li>
        </ul>
      </div>
      <div class="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
        <p>
          Email:
          <a
            href="mailto:mojdeh.m@dent.au.dk"
            class="text-blue-500 hover:underline"
            >mojdeh.m@dent.au.dk</a
          >
        </p>
        <p>Mobile: (+45) 53336170</p>
      </div>
    </main>
    <footer class="bg-white shadow mt-8">
      <div class="container mx-auto px-4 py-6">
        <nav>
          <a href="about.html" class="text-gray-600 hover:underline mx-2"
            >About</a
          >
          <a href="research.html" class="text-gray-600 hover:underline mx-2"
            >Research</a
          >
          <a href="publications.html" class="text-gray-600 hover:underline mx-2"
            >Publications</a
          >
          <a href="contact.html" class="text-gray-600 hover:underline mx-2"
            >Contact</a
          >
        </nav>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import profilePhoto from '../assets/images/mojdeh.jpeg'

</script>