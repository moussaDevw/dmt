<script setup>
// import btnACtion from "@/assets/icons/actions.jpg";
const props = defineProps({
  Dossiers: {
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
            Numéro Dossiers
          </th>
          <th
            class="px-6 py-3 border-b text-xs font-medium uppercase tracking-wider"
          >
            Client
          </th>
          <th
            class="px-6 py-3 border-b text-xs font-medium uppercase tracking-wider"
          >
            Type dossier
          </th>
          <th
            class="px-6 py-3 border-b text-xs font-medium uppercase tracking-wider"
          >
            Nbr de camions
          </th>
          <th
            class="px-6 py-3 border-b text-xs font-medium uppercase tracking-wider"
          >
            Nbr de colis
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
          v-for="dossier in Dossiers"
          :key="dossier.id"
          class="shadow-lg rounded-3xl"
        >
          <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
            {{ dossier.name }}
          </td>
          <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
            {{ dossier.description }}
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
