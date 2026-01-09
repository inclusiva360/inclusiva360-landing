<template>
  <!-- Barra de progresso do scroll -->
  <div class="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-[9999]">
    <div class="h-full bg-brand-green transition-all duration-300" :style="{ width: scrollProgress + '%' }"></div>
  </div>

  <header class="bg-white py-4 shadow-sm fixed w-full top-1 z-50">
    <div class="container mx-auto px-4 grid grid-cols-3 md:flex md:justify-between items-center">
      <div class="md:hidden"></div> <!-- Espaço vazio para grid em mobile -->
      <div
        class="text-xl md:text-2xl font-bold text-brand-green flex items-center gap-2 justify-center md:justify-start">
        <NuxtLink to="/"><span class="text-3xl md:text-4xl"><span
              class="text-brand-blue-origin">inclusiva</span>360</span></NuxtLink>

      </div>
      <nav class="hidden md:flex gap-4 md:gap-8 text-sm font-semibold text-black">
        <a href="#comunidade"
          class="text-lg md:text-xl px-3 py-1 border-2 border-transparent rounded-lg hover:border-[#ffd700] transition-colors duration-200">
          Comunidade
        </a>
        <a href="#"
          class="text-lg md:text-xl px-3 py-1 border-2 border-transparent rounded-lg hover:border-[#ffd700] transition-colors duration-200">
          Sobre Nós
        </a>
        <NuxtLink to="/form"
          class="text-lg md:text-xl px-3 py-1 border-2 border-transparent rounded-lg hover:border-[#ffd700] transition-colors duration-200">
          Contato</NuxtLink>
      </nav>
      <!-- Mobile menu button -->
      <button @click="toggleMenu" class="md:hidden text-gray-700 focus:outline-none justify-self-end">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <NuxtLink
        class="text-lg md:text-xl hidden md:block bg-brand-green text-white px-4 md:px-6 py-2 rounded-[15px] font-bold hover:bg-green-600 transition shadow-md text-sm md:text-base"
        to="/form">Seja um Parceiro!</NuxtLink>
    </div>
    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-lg">
      <nav class="px-4 py-4 space-y-2 flex flex-col items-center">
        <a href="#" @click="closeMenu"
          class="block text-lg px-3 py-2 border-2 border-transparent rounded-lg hover:border-[#ffd700] transition-colors duration-200 text-center">
          Comunidade
        </a>
        <a href="#" @click="closeMenu"
          class="block text-lg px-3 py-2 border-2 border-transparent rounded-lg hover:border-[#ffd700] transition-colors duration-200 text-center">
          Sobre Nós
        </a>
        <a href="#" @click="closeMenu"
          class="block text-lg px-3 py-2 border-2 border-transparent rounded-lg hover:border-[#ffd700] transition-colors duration-200 text-center">
          Contato
        </a>

        <NuxtLink
          class="w-full max-w-[200px] bg-brand-green text-white px-4 py-2 rounded-[15px] font-bold hover:bg-green-600 transition shadow-md text-lg text-center"
          to="/form">Seja um Parceiro!</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const scrollProgress = ref(0)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  if (process.client) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>