<script setup>
// import btnACtion from "@/assets/icons/actions.jpg";
const props = defineProps({
  Stocks: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["create", "update", "delete"]);

const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "description", label: "Description", sortable: true },
  { key: "actions", label: "Actions", sortable: false },
];

const actionDossier = (dossier) => [
  [
    {
      label: "Modifier",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => {
        emit("update", dossier);
      },
    },
    {
      label: "Supprimer",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => {
        emit("delete", dossier);
      },
    },
  ],
];
</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white">
      <thead>
        <tr class="bg-gradient-to-r h-[24px] text-white shadow-md">
          <th
            class="px-6 py-3 border-b text-xs font-medium uppercase tracking-wider first:rounded-l-lg"
          >
            Catégories
          </th>
          <th
            class="px-6 py-3 border-b text-xs font-medium uppercase tracking-wider"
          >
            Nombres
          </th>

          <th
            class="px-6 py-3 border-b text-xs font-medium uppercase tracking-wider last:rounded-r-lg"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr
          v-for="stock in Stocks"
          :key="stock.id"
          class="shadow-lg rounded-3xl"
        >
          <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
            {{ stock.name }}
          </td>
          <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
            {{ stock.description }}
          </td>
          <td class="px-6 py-2 whitespace-nowrap text-sm font-medium">
            <p>Actions</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.card .card-header {
  background: rgba(0, 0, 0, 0.03);
}
</style>
