<template>
  <div class="cv-page">
    <div class="header">
      <div class="header-text">
        <h1>Mojdeh Mansoori<span class="suffix">, DDS, MSc, PhD</span></h1>
        <p class="subtitle">Postdoctoral Researcher</p>
        <div class="contact">
          <p>Section for Orofacial Pain and Jaw Function</p>
          <p>Department of Dentistry and Oral Health, Aarhus University, Denmark</p>
          <p>Email: mojdeh.m@dent.au.dk | Mobile: +45 53 33 61 70</p>
          <p class="links">
            <a href="https://scholar.google.com/citations?hl=en&user=AFLXxBMAAAAJ" target="_blank">Google Scholar</a>
            <a href="https://orcid.org/0000-0001-9026-7590" target="_blank">ORCID</a>
            <a href="https://www.linkedin.com/in/mojdeh-mansoori-3a258482/" target="_blank">LinkedIn</a>
            <a href="https://www.researchgate.net/profile/Mojdeh-Mansoori" target="_blank">ResearchGate</a>
            <a href="https://www.mojdeh.dk/" target="_blank">Academic website</a>
          </p>
        </div>
      </div>
      <img class="photo" :src="resumePhoto" alt="Mojdeh Mansoori" />
    </div>

    <v-btn
      :href="cvPdf"
      download="mojdeh_mansoori_cv.pdf"
      class="cv-download"
      target="_blank"
      text="Download PDF"
      variant="tonal"
    />

    <hr />

    <section class="cv-section">
      <h2>Research identity</h2>
      <p>{{ data?.data?.profile }}</p>
    </section>

    <section class="cv-section">
      <h2>Positions</h2>
      <div v-for="(p, index) in data?.data?.positions" :key="'position-' + index" class="cv-block">
        <p class="cv-date">{{ p.date }}</p>
        <p class="cv-role">{{ p.role }}</p>
        <p class="cv-muted">{{ p.org }}</p>
        <p v-for="(n, ni) in p.notes" :key="'position-' + index + '-note-' + ni" class="cv-muted indent">{{ n }}</p>
      </div>
    </section>

    <section class="cv-section">
      <h2>Education</h2>
      <div v-for="(e, index) in data?.data?.education" :key="'edu-' + index" class="cv-block">
        <p class="cv-role">{{ e.content }}</p>
        <p v-if="e.org" class="cv-muted">{{ e.org }}</p>
        <p v-for="(n, ni) in e.notes" :key="'edu-' + index + '-note-' + ni" class="cv-muted">{{ n }}</p>
      </div>
    </section>

    <section class="cv-section">
      <h2>Publications</h2>
      <p>See the <a href="/publications">Publications</a> page for the full list.</p>
    </section>

    <section class="cv-section">
      <h2>Teaching and scientific dissemination</h2>
      <p><strong>International conferences:</strong></p>
      <ul>
        <li v-for="(c, index) in data?.data?.conferences" :key="'conf-' + index">{{ c }}</li>
      </ul>
      <p><strong>Teaching:</strong></p>
      <ul>
        <li v-for="(t, index) in data?.data?.teaching" :key="'teaching-' + index">
          {{ t.content }}<span v-if="t.org">, {{ t.org }}</span>
        </li>
      </ul>
    </section>

    <section class="cv-section">
      <h2>Research methods and skills</h2>
      <ul>
        <li v-for="(s, index) in data?.data?.skills" :key="'skill-' + index">{{ s }}</li>
      </ul>
    </section>

    <section class="cv-section">
      <h2>Peer-review activity</h2>
      <p v-for="(s, index) in data?.data?.service" :key="'service-' + index">{{ s }}</p>
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
import resumePhoto from "../assets/images/resume-photo.jpg";
import { useService } from "@/service";

const { data } = useService("cv");
</script>

<style scoped>
.cv-page {
  font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
  color: #1a1a1a;
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
  line-height: 1.5;
  --accent: #a31545;
}
.header {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.header-text { flex: 1; min-width: 260px; }
h1 {
  color: var(--accent);
  font-size: 1.9rem;
  font-weight: bold;
  margin: 0 0 0.15rem;
}
.suffix { font-size: 1.1rem; color: var(--accent); }
.subtitle { font-weight: bold; font-size: 1rem; margin: 0.15rem 0 0.6rem; }
.photo {
  width: 110px;
  height: 140px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
}
.contact p { margin: 0.1rem 0; font-size: 0.9rem; }
.links a { color: var(--accent); text-decoration: none; }
.links a:hover { text-decoration: underline; }
.links a:not(:last-child)::after { content: " | "; color: #1a1a1a; }
.cv-download { margin-top: 1rem; }
hr { border: none; border-top: 2px solid var(--accent); margin: 1.25rem 0; }
.cv-section { margin-top: 1.5rem; }
.cv-section h2 {
  color: var(--accent);
  font-size: 1.1rem;
  border-bottom: 2px solid var(--accent);
  padding-bottom: 0.2rem;
  margin: 0 0 0.5rem;
}
.cv-section p { margin: 0.25rem 0; }
.cv-section ul { margin: 0.25rem 0; padding-left: 1.2rem; }
.cv-section li { margin: 0.15rem 0; }
.cv-block { margin-bottom: 0.6rem; }
.cv-date, .cv-role { font-weight: bold; margin: 0.1rem 0; }
.cv-muted { color: #444; font-size: 0.88rem; }
.indent { padding-left: 1rem; }
</style>
