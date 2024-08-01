<template>
    <div>
    <header class="bg-white shadow">
        <div class="container mx-auto px-4 py-6">
            <h1 class="text-3xl font-bold">Publications</h1>
        </div>
    </header>
    <main class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-bold mb-4">{{ data?.data?.main.title }}</h2>
            <ul class="list-disc list-inside">
                <li class="py-3" v-for="(theList, index) in data?.data?.main.list" :key="index">
                    {{ theList.item }} 
                    <a v-if="theList.link" :href="theList.link" target="_blank" class="text-blue-800 text-sm font-semibold">
                        ({{ theList.status }})
                    </a>
                    <span class="text-sm font-semibold" v-else>
                        ({{ theList.status }})
                    </span>
                </li>
            </ul>
        </div>
        <div v-for="(section, index) in data?.data?.sections" :key="index" class="bg-white rounded-lg shadow-lg p-6 mt-6">
            <h2 class="text-2xl font-bold mb-4">{{ section.title }}</h2>
            <p class="pb-2" v-for="(p, index) in section.content" :key="index">{{ p }}</p>
        </div>
    </main>
</div>
</template>

<script setup lang="ts">
import { useService } from '@/service';

const { data } = useService("publications");

</script>
