<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img class="rounded-lg transition-transform transform hover:scale-125" src="~/assets/img/inclusiva-logo.png"
        alt="Starship starts the engine" loading="eager" format="avif" width="512" height="512" />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        <span class="text-[#00ADEF]">inclusiva</span><span class="font-bold text-[#00A54F]">360</span>
      </h1>
      <h1 class="text-5xl lg:text-6xl xl:text-4xl">
        Mobilidade com dignidade, acessibilidade com inteligência.
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Aplicativo colaborativo para pessoas com mobilidade reduzida e redes de apoio. Descubra rotas acessíveis,
        registre barreiras urbanas em tempo real e ajude a construir cidades mais inclusivas.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink href="/contact" rel="noopener">Quero colaborar
        </LandingLink>
        <LandingLink size="lg" styleName="outline" rel="noopener" href="/about">Sobre</LandingLink>
      </div>
    </div>
  </main>
</template>
