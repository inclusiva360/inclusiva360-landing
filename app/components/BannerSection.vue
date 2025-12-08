<template>
  <section class="relative pt-52 pb-20 bg-gray-100 overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-75">
      <img src="~/assets/images/banner-1.png" class="w-full h-full object-cover object-top" alt="Background" />
    </div>

    <div class="container mx-auto px-4 relative z-10 grid md:grid-cols-2 items-center gap-10">
      <div class="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-lg">
        <h1 class="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 leading-tight">
          MOBILIDADE COM DIGNIDADE, <br />
          ACESSIBILIDADE COM INTELIGÊNCIA.
        </h1>
        <p class="text-gray-600 mb-6 text-sm leading-relaxed">
          Nós conectamos pessoas com mobilidade reduzida a rotas acessíveis e seguras, transformando a maneira
          como
          interagem com o espaço urbano.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 items-start">
          <button class="bg-brand-green text-white px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90">
            Seja um Parceiro!
          </button>
          <div
            class="bg-brand-yellow text-blue-900 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 cursor-pointer shadow">
            Saiba Mais ⬇
          </div>
        </div>
      </div>

      <div class="hidden md:flex justify-center">
        <div
          class="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-gray-100">
          <div class="text-center">
            <div class="text-6xl mb-2">♿</div>
            <div class="text-2xl font-bold text-blue-500">inclusiva<span class="text-brand-green">360</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="relative w-full min-h-[550px] flex items-center bg-cover bg-center"
    style="background-image: url('/images/bg-wheelchair.jpg');">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">

      <div class="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-xl">
        <h1 class="text-4xl font-bold text-darkblue">
          MOBILIDADE COM DIGNIDADE,
          <br />
          ACESSIBILIDADE COM INTELIGÊNCIA.
        </h1>

        <p class="mt-4 text-gray-700">
          App colaborativo para pessoas com mobilidade reduzida e redes de apoio.
          Encontre rotas acessíveis e registre barreiras em tempo real.
        </p>

        <div class="mt-6 flex gap-4 items-center">
          <button class="bg-primary text-white px-5 py-3 rounded-lg font-semibold">
            Seja um Parceiro!
          </button>

          <p class="text-sm text-gray-600">+100 usuários ativos na plataforma</p>
        </div>
      </div>

      <img src="../assets/images/inclusiva360-logo.png" class="w-72 md:w-96" alt="Logo">
    </div>
  </section> -->
</template>