<template>
  <div>
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold">Contact Mojdeh</h1>
      </div>
    </header>
    <main class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>
        <form
          @submit.prevent="onSubmitForm"
          action="#"
          method="POST"
          class="space-y-4"
        >
          <input type="hidden" name="access_key" v-model="access_key" />
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
              <span class="text-red-500 text-xs pl-5" v-if="errors?.name">{{
                errors.name
              }}</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
              <span class="text-red-500 text-xs pl-5" v-if="errors?.email">{{
                errors.email
              }}</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-700"
            >
              Message
              <span class="text-red-500 text-xs pl-5" v-if="errors?.message">{{
                errors.message
              }}</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              v-model="message"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
          <div>
            <v-dialog v-model="isDialogOpen" max-width="500">
              <template #activator>
                <v-btn
                  color="light-blue-darken-3"
                  text="Send Message"
                  variant="outlined"
                  type="submit"
                  :disabled="status === 'loading'"
                >
                </v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Thank you for reaching out!">
                  <v-card-text>
                    Your message has been successfully sent. I appreciate you
                    taking the time to contact me and will get back to you as
                    soon as possible.
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Close" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const status = ref<"sent" | "loading" | "ideal" | "error">("ideal");
const isDialogOpen = ref(false);

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const errors = ref<Errors>({});

const name = ref("");
const email = ref("");
const message = ref("");
const access_key = ref("b63ddf5d-14a7-4256-acc4-3a01f23efa16");

async function onSubmitForm() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errors.value = {};

  if (!emailPattern.test(`${email.value}`)) {
    errors.value.email = "Valid email is required.";
  }

  if (!name.value.trim()) {
    errors.value.name = "Name is required.";
  }

  if (!message.value.trim()) {
    errors.value.message = "Message is required.";
  }

  if (Object.keys(errors.value).length) return;

  try {
    status.value = "loading";
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ access_key: access_key.value, name: name.value, email: email.value, message: message.value }),
    });

    if (response.ok) {
      isDialogOpen.value = true;
      status.value = "ideal";

      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      status.value = "error";
      alert("something went wrong please try later");
    }
  } catch (error) {
    status.value = "error";
    console.error("Network Error:", error);
  }
}
</script>
