<template>
  <div
    class="w-[302px] bg-white xl:block xl:relative xl:h-screen xl:visible fixed h-full top-0 left-0 transform -translate-x-full transition-transform duration-300 z-50 xl:translate-x-0"
    :class="{ 'translate-x-0': false }"
  >
    <!-- isSidebarOpen -->
    <div
      class="border-r-primary border-opacity-15 border-solid border-r-2 h-full overflow-y-auto"
    >
      <button
        class="absolute right-0 xl:hidden"
        @click="$emit('close-sidebar')"
      >
        <!-- <ArrowBigLeft /> -->
      </button>
      <div class="flex items-center justify-center py-6 w-[80%]">
        <img :src="logo" alt="logo" class="" />
      </div>
      <!-- Centrer au milieu -->

      <nav class="w-full">
        <ul class="w-full m-auto">
          <li v-for="menu in menuItem">
            <NuxtLink
              :to="menu.link"
              class="w-[280px] h-[42px] flex py-3 mx-auto items-center text-primary text-[15px] font-poppins font-[500] hover:bg-primary hover:text-white transition-all hover:translate-x-2"
              :class="{
                'bg-secondary border-l-primary border-solid border-l-8 rounded-l-md text-[#1B2850]':
                  isActive(menu.link),
                'border-l-0': isActive(menu.link),
              }"
            >
              <span class="flex items-center w-[192px] mx-auto">
                <img :src="menu.icon" class="size-6 mr-3" />

                {{ menu.label }}
              </span>
            </NuxtLink>
          </li>
          <li v-for="(menu, index) in subMenus" :key="menu.label">
            <div
              v-if="menu.subMenu"
              class="flex items-center justify-between py-4 text-[#1B2850] font-poppins font-[500] hover:bg-primary hover:text-white hover:pl-5 cursor-pointer"
              :class="{
                'bg-secondary rounded-lg text-[#1B2850]': isMenuOpen(index),
              }"
              @click="toggleSubMenu(index)"
            >
              <span class="flex w-[192px] mx-auto items-center">
                <img :src="menu.icon" class="mr-3" />
                {{ menu.label }}
              </span>
              <i
                :class="
                  isMenuOpen(index)
                    ? 'fas fa-chevron-up'
                    : 'fas fa-chevron-down'
                "
              ></i>
            </div>

            <ul v-if="isMenuOpen(index)" class="bg-gray-50">
              <li
                v-for="subItem in menu.subMenu"
                :key="subItem.label"
                class="block py-2 pl-12 text-sm text-gray-700 hover:bg-gray-100"
              >
                <NuxtLink :to="subItem.link">
                  <span class="mr-2">&#8226;</span>
                  {{ subItem.label }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import logo from "@/assets/images/logo.svg";
import DashboardIcon from "@/assets/icons/dashboard.svg";
import CalendarIcon from "@/assets/icons/calendar-days.svg";
import ListCheck from "@/assets/icons/list-checks.svg";
import ManagerFolder from "@/assets/icons/manager-folder.svg";
import User from "@/assets/icons/users.svg";
import FileBarChar from "@/assets/icons/file-bar-chart.svg";
import BookOPenCheck from "@/assets/icons/book-open-check.svg";
import Coq from "@/assets/icons/cog.svg";

// Menu items with labels and links
const menuItem = [
  { label: "Tableau de bord", link: "/", icon: DashboardIcon },
  {
    label: "Journal d’activités",
    link: "/journal-activity",
    icon: CalendarIcon,
  },
  { label: "Stocks", link: "/stock", icon: ListCheck },
  { label: "Clients", link: "/clients", icon: User },
  { label: "Dossiers", link: "/dossiers", icon: ManagerFolder },
  { label: "Dépôts", link: "/depot", icon: FileBarChar },
  { label: "Logistiques", link: "/logistics", icon: BookOPenCheck },
];

const subMenus = [
  {
    label: "Sécurité",
    icon: Coq,
    subMenu: [
      { label: "Utilisateurs", link: "/security/utilisateurs" },
      { label: "Rôles", link: "/security/roles" },
      { label: "Permissions", link: "/security/permissions" },
    ],
  },
  {
    label: "Paramètres",
    icon: Coq,
    subMenu: [
      { label: "Type d'opération", link: "/settings/type-operation" },
      { label: "Catégories colis", link: "/settings/categorie-colis" },
      { label: "Contingents", link: "/settings/contingents" },
    ],
  },
];

// State to track open menus
const openMenus = ref([]);
defineProps({
  isSidebarOpen: Boolean,
});
// Function to toggle submenu for each index
const toggleSubMenu = (index) => {
  if (openMenus.value.includes(index)) {
    openMenus.value = openMenus.value.filter((i) => i !== index);
  } else {
    openMenus.value.push(index);
  }
};

// Function to check if a menu is open
const isMenuOpen = (index) => {
  return openMenus.value.includes(index);
};

// Use route to highlight the active link
const route = useRoute();
const isActive = (link) => {
  return route?.path === link;
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 2px;
}
/* Couleur de la piste de la scrollbar */
::-webkit-scrollbar-track {
  background: #f3f4f6; /* Couleur de fond de la scrollbar */
}
/* Couleur et style de la "thumb" */
::-webkit-scrollbar-thumb {
  background: #ff9f43; /* Couleur du "thumb" */
  border-radius: 9999px; /* Arrondi */
}
</style>
