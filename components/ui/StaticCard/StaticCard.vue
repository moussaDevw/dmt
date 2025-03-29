<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
    <div
      v-for="status in statusData"
      :key="status.id"
      class="relative bg-gradient-to-tr from-primary to-[#4A76C2] text-white h-[115px] rounded-md shadow-lg overflow-hidden"
    >
      <img
        :src="bgCard"
        class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
      />
      <div class="relative flex items-baseline p-4">
        <div
          class="flex-shrink-0 bg-[#4A76C2] w-12 h-12 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 7l6.16-3.422A12.07 12.07 0 0012 20c-3.309 0-6.309 1.492-8.16 3.578L12 21z"
            />
          </svg>
        </div>

        <!-- Texte -->
        <div class="ml-4">
          <div class="text-2xl font-semibold">{{ 55 }}</div>
          <div class="text-sm">{{ status.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgCard from "@/assets/images/bg_card.png";
// import iconFolder from "@/assets/icons/icon_folder.jpg";

defineProps({
  statusData: {
    type: Array,
    required: true,
    default: () => [
      ["En cours", 55],
      ["Terminé", 55],
      ["En attente", 55],
    ],
  },
});
</script>
