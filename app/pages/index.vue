<template>
  <div class="min-h-screen bg-white text-gray-800">
    <NavBar></NavBar>
    <BannerSection></BannerSection>
    <SolutionsSection></SolutionsSection>
    <HeroSection></HeroSection>
    <section class="py-16 md:py-44 bg-brand-blue text-white text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-6xl font-bold mb-4 uppercase">Gostou do Projeto? Se torne Parceiro!</h2>
        <p class="text-blue-200 mb-8 text-lg md:text-2xl pt-5">Torne-se parceiro agora da inova360 para ajudar a causa.</p>
        <div class="container px-4 relative z-10 pt-10 pb-10 flex items-center justify-center">
          <button
            class="bg-brand-green text-white w-full max-w-[340px] h-[60px] md:h-[75px] rounded-[15px] font-bold text-xl md:text-2xl flex items-center justify-center shadow hover:bg-green-600 transition-colors">
            Seja um Parceiro!
          </button>
        </div>
      </div>
    </section>
    <TestimonialsSection></TestimonialsSection>
    <FooterSection></FooterSection>

    <!-- Botão Voltar ao Topo -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-8 bg-brand-green hover:bg-green-600 dark:bg-gray-700 dark:hover:bg-gray-600 text-white dark:text-gray-200 p-3 rounded-full shadow-lg transition-all duration-600 z-40"
      aria-label="Voltar ao topo">
      <Icon name="fluent:arrow-up-12-filled" class="w-8 h-7" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  if (process.client) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const halfHeight = window.innerHeight / 2
    showBackToTop.value = scrollTop > halfHeight
  }
}

const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>