<template>
  <div class="cv-page">
    <div class="cv-header">
      <div>
        <h1 class="cv-name">Mojdeh Mansoori<span class="cv-suffix">, DDS, MSc, PhD</span></h1>
        <p class="cv-subtitle">Postdoctoral Researcher — Orofacial Pain and Jaw Function</p>
      </div>
      <v-btn
        :href="cvPdf"
        download="mojdeh_mansoori_cv.pdf"
        class="cv-download"
        target="_blank"
        text="Download PDF"
        variant="tonal"
      />
    </div>

    <div class="cv-contact">
      <p>Section for Orofacial Pain and Jaw Function, Department of Dentistry and Oral Health, Aarhus University, Denmark</p>
      <p>Email: mojdeh.m@dent.au.dk | Phone: 53336170</p>
      <p class="cv-links">
        <a href="https://scholar.google.com/citations?hl=en&user=AFLXxBMAAAAJ" target="_blank">Google Scholar</a> |
        <a href="https://orcid.org/0000-0001-9026-7590" target="_blank">ORCID</a> |
        <a href="https://www.linkedin.com/in/mojdeh-mansoori-3a258482/" target="_blank">LinkedIn</a> |
        <a href="https://www.researchgate.net/profile/Mojdeh-Mansoori" target="_blank">ResearchGate</a> |
        <a href="https://www.mojdeh.dk/" target="_blank">Academic website</a>
      </p>
    </div>

    <section class="cv-section">
      <h2>Research profile</h2>
      <p>{{ data?.data?.profile }}</p>
    </section>

    <section class="cv-section">
      <h2>Positions</h2>
      <div v-for="(p, index) in data?.data?.positions" :key="'position-' + index" class="cv-block">
        <p class="cv-date">{{ p.date }}</p>
        <p class="cv-role">{{ p.role }}</p>
        <p class="cv-muted">{{ p.org }}</p>
        <p v-if="p.detail" class="cv-muted">{{ p.detail }}</p>
      </div>
    </section>

    <section class="cv-section">
      <h2>Publications</h2>
      <p>See the <a href="/publications">Publications</a> page for the full list.</p>
    </section>

    <section class="cv-section">
      <h2>Research methods and analytical skills</h2>
      <ul>
        <li v-for="(s, index) in data?.data?.skills" :key="'skill-' + index">{{ s }}</li>
      </ul>
    </section>

    <section class="cv-section">
      <h2>Teaching experience</h2>
      <div v-for="(t, index) in data?.data?.teaching" :key="'teaching-' + index" class="cv-block">
        <p>{{ t.content }}</p>
        <p v-if="t.org" class="cv-muted">{{ t.org }}</p>
      </div>
    </section>

    <section class="cv-section">
      <h2>International conferences</h2>
      <ul>
        <li v-for="(c, index) in data?.data?.conferences" :key="'conf-' + index">{{ c }}</li>
      </ul>
    </section>

    <section class="cv-section">
      <h2>Education</h2>
      <div v-for="(e, index) in data?.data?.education" :key="'edu-' + index" class="cv-block">
        <p>{{ e.content }}</p>
        <p v-if="e.org" class="cv-muted">{{ e.org }}</p>
        <p v-if="e.detail" class="cv-muted">{{ e.detail }}</p>
      </div>
    </section>

    <section class="cv-section">
      <h2>Academic service</h2>
      <ul>
        <li v-for="(s, index) in data?.data?.service" :key="'service-' + index">{{ s }}</li>
      </ul>
    </section>

    <section class="cv-section">
      <h2>Honors and awards</h2>
      <ul>
        <li v-for="(h, index) in data?.data?.honors" :key="'honor-' + index">{{ h }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import cvPdf from "../assets/cv.pdf";
import { useService } from "@/service";

const { data } = useService("cv");
</script>

<style scoped>
.cv-page {
  font-family: Georgia, 'Times New Roman', serif;
  color: #1a1a1a;
  max-width: 760px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
  line-height: 1.5;
}
.cv-header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}
.cv-name {
  color: #1d4e89;
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
}
.cv-suffix {
  font-size: 1.1rem;
  color: #1a1a1a;
}
.cv-subtitle {
  margin: 0.25rem 0 0;
  font-size: 1rem;
}
.cv-download {
  flex-shrink: 0;
}
.cv-contact {
  margin-top: 0.75rem;
  font-size: 0.9rem;
}
.cv-contact p {
  margin: 0.15rem 0;
}
.cv-links a {
  color: #1d4e89;
  text-decoration: none;
}
.cv-links a:hover {
  text-decoration: underline;
}
.cv-section {
  margin-top: 1.75rem;
}
.cv-section h2 {
  font-size: 1.15rem;
  font-weight: bold;
  border-bottom: 1px solid #999;
  padding-bottom: 0.25rem;
  margin: 0 0 0.6rem;
}
.cv-section p {
  margin: 0.3rem 0;
}
.cv-section ul {
  margin: 0.3rem 0;
  padding-left: 1.3rem;
}
.cv-section li {
  margin: 0.2rem 0;
}
.cv-block {
  margin-bottom: 0.75rem;
}
.cv-date, .cv-role {
  font-weight: bold;
  margin: 0.15rem 0;
}
.cv-muted {
  color: #444;
  font-size: 0.9rem;
}
</style>
