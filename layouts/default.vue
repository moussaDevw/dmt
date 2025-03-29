<script setup>
import Header from "~/components/ui/Header/Header.vue";
import Sidebar from "~/components/ui/Sidebar/Sidebar.vue";
</script>

<template>
  <div class="flex flex-row max-w-[1728px] mx-auto h-screen">
    <Sidebar />

    <div class="flex-1 bg-[#EFEFEF] overflow-x-hidden h-screen flex flex-col">
      <Header />
      <div class="flex justify-center mt-[99px] px-4">
        <div class="w-full max-w-[1426px]">
          <nuxt-page />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
