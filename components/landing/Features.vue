<script setup>
const features = [
  {
    title: "Falta de informação confiável",
    description:
      "Pessoas com mobilidade reduzida enfrentam a ausência de dados precisos sobre acessibilidade urbana.",
    icon: "bx:bxs-error-circle",
  },
  {
    title: "Aplicativos que ignoram barreiras reais",
    description:
      "Muitos apps de navegação não consideram calçadas quebradas, rampas inexistentes ou banheiros adaptados.",
    icon: "bx:bxs-map-alt",
  },
  {
    title: "Insegurança e perda de autonomia",
    description:
      "Sem saber se o caminho é acessível, a pessoa evita sair, gerando ansiedade e isolamento.",
    icon: "bx:bxs-low-vision",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Problema & Como resolvemos
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Pessoas com mobilidade reduzida enfrentam diariamente a falta de informações confiáveis sobre acessibilidade urbana. A inclusiva360 transforma essa realidade com tecnologia colaborativa, unindo dados e comunidade para criar rotas verdadeiramente acessíveis.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
