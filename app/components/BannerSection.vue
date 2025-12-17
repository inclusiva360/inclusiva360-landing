<template>
  <section class="relative min-h-screen bg-gray-100 overflow-hidden flex flex-col">

    <!-- Background -->
    <div class="absolute inset-0 z-0 opacity-65">
      <img src="~/assets/images/banner-1.png" class="w-full h-full object-cover object-top" alt="Background" />
    </div>

    <!-- Conteúdo principal -->
    <div class="container mx-auto px-4 relative z-10 grid md:grid-cols-2 mt-24 items-center gap-10 flex-1">
      <div class="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-4xl">
        <h1 class="text-3xl md:text-6xl font-extrabold text-blue-900 mb-4 leading-tight">
          MOBILIDADE COM DIGNIDADE, <br />
          ACESSIBILIDADE COM INTELIGÊNCIA.
        </h1>

        <p class="text-gray-600 mb-6 text-lg md:text-2xl leading-relaxed">
          App colaborativo para pessoas com mobilidade reduzida e redes de apoio:
          Encontre rotas acessíveis e registre barreiras em tempo real.
        </p>

        <div class="container relative z-10 pt-10 pb-10">
          <button
            class="bg-brand-green text-white w-full max-w-[340px] h-[60px] md:h-[75px] rounded-[15px] font-bold text-xl md:text-2xl flex items-center justify-center shadow hover:bg-green-600 transition-colors">
            Seja um Parceiro!
          </button>
        </div>
      </div>

      <div class="hidden md:flex justify-center">
        <div class="w-[42rem] h-[42rem] bg-white rounded-full flex items-center justify-center">
          <img src="~/assets/images/inclusiva360-logo-centered.png" alt="Logo Inclusiva360"
            class="w-[30rem] h-[30rem] object-contain" />
        </div>
      </div>
    </div>

    <!-- Botão Saiba Mais (fixado no final visual) -->
    <div class="container mx-auto px-4 relative z-10 pb-10 flex justify-center">
      <a href="#solutions"
        class="bg-brand-yellow px-8 py-6 rounded-full font-bold text-xl flex items-center gap-2 cursor-pointer shadow hover:bg-yellow-500 transition-colors animate-softPulse">Saiba
        Mais
        <Icon name="fluent:arrow-down-12-filled" class="text-2xl" />
      </a>
    </div>

  </section>
</template>
