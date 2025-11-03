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

const solutions = [
  {
    title: "Rotas acessíveis",
    description:
      "Busque destinos e visualize rotas com informações de acessibilidade verificadas pela comunidade.",
    icon: "bx:bxs-map",
  },
  {
    title: "Avisos em tempo real",
    description:
      "Receba alertas sobre barreiras e condições do trajeto, atualizados constantemente pelos usuários.",
    icon: "bx:bxs-bell",
  },
  {
    title: "Colaboração cidadã",
    description:
      "Registre barreiras com fotos, texto ou pins interativos e ajude a tornar o mapa mais preciso.",
    icon: "bx:bxs-hand",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      O Problema </h2>
    <p class="text-lg mt-4 text-slate-600">
      Pessoas com mobilidade reduzida enfrentam diariamente a falta de informações confiáveis sobre acessibilidade
      urbana. A inclusiva360 transforma essa realidade com tecnologia colaborativa, unindo dados e comunidade para criar
      rotas verdadeiramente acessíveis.
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
  <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-16">
    Como resolvemos? </h2>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of solutions" class="flex gap-4 items-start">
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
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-16">
      Sua experiência transforma rotas </h2>
    <p class="text-lg mt-4 text-slate-600">
      Conte como você se desloca e quais obstáculos encontra — seja pessoa com mobilidade reduzida, quem usa cadeira de
      rodas, acompanhante, cuidador ou familiar. Suas respostas tornam as rotas mais seguras e úteis para toda a
      comunidade. Privacidade respeitada (LGPD).
    </p>
  </div>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-16 text-slate-900">
      Validação real, impacto prático
    </h2>
    <p class="text-lg mt-6 text-slate-600 leading-relaxed">
      A <strong><span class="font-bold text-[#00ADEF]">inclusiva</span><span class="text-[#00A54F]">360</span></strong> nasceu da união entre universidades, entidades
      de classe e o poder público —
      uma rede que conecta <strong>tecnologia, engenharia e empatia</strong> para transformar a mobilidade urbana.
    </p>

    <p class="text-lg mt-4 text-slate-600 leading-relaxed">
      Nosso propósito é simples e poderoso: <strong>usar tecnologia para garantir dignidade e mobilidade</strong>.
      Com o apoio de parceiros estratégicos e a colaboração de pessoas com deficiência,
      estamos construindo o <strong>primeiro mapa inteligente de acessibilidade</strong> do Brasil — e do mundo.
    </p>

    <p class="text-lg mt-4 text-slate-600 leading-relaxed">
      Nossa IA Assistiva personaliza a experiência de cada usuário, enquanto uma IA inédita verifica
      <strong>acessibilidade em imagens públicas e colaborativas</strong>, tornando cada dado uma oportunidade real de
      inclusão.
    </p>
  </div>

</template>
