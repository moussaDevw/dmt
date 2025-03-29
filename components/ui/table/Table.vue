<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});

function editRow(id) {
  console.log(`Edit row with id: ${id}`);
}

function deleteRow(id) {
  console.log(`Delete row with id: ${id}`);
}
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-[90%] bg-white">
      <thead>
        <tr
          class="!bg-gradient-to-r from-[#E58216] to-[#FF9F43] h-[24px] text-white shadow-md text-center rounded-xl"
        >
          <th
            v-for="column in columns"
            :key="column.key"
            class="px-6 py-3 border-b text-xs font-medium uppercase tracking-wider"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr
          v-for="row in data"
          :key="row.id"
          class="shadow-lg rounded-3xl text-center"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            class="px-6 py-2 text-sm text-gray-900"
          >
            <component
              :is="column.component || 'span'"
              v-bind="column.props ? column.props(row[column.key]) : {}"
            >
              {{ row[column.key] }}
            </component>
          </td>
          <td
            v-if="columns.some((col) => col.key === 'actions')"
            class="px-6 py-2 text-sm text-gray-900"
          >
            <button @click="editRow(row.id)" class="text-blue-500">Edit</button>
            <button @click="deleteRow(row.id)" class="text-red-500">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
