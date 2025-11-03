<script setup>
definePageMeta({
  layout: "landing",
});

const TeamImg1 = "https://source.unsplash.com/IF9TK5Uy-KI";
const TeamImg2 = "https://source.unsplash.com/iEEBWgY_6lA";
const TeamImg3 = "https://source.unsplash.com/ZHvM3XIOHoE";

const team = [
  {
    name: "Roniel Lima",
    title: "CEO",
    avatar: {
      src: "https://media.licdn.com/dms/image/v2/D4D03AQHyeL7l46l44g/profile-displayphoto-shrink_800_800/B4DZQpa8YbG0Ac-/0/1735861716931?e=1763596800&v=beta&t=sRrUeM-Zih1Tw9WAYy2k0i-OcTYmVzpWuQJyWVS4LyM",
      width: 480,
      height: 560,
    },
  },
  {
    name: "Lucas",
    title: "Desenvolvedor Full Stack",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 580,
    },
  },
  {
    name: "Ivan Pinheiro",
    title: "Desenvolvedor Full Stack",
    avatar: {
      src: "https://media.licdn.com/dms/image/v2/D4D03AQHScaSvi907ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693453779746?e=1763596800&v=beta&t=HdclbrxnFja1qVB0eqs5ZG83rDHyHBAFj7s6mmrJOlg",
      width: 580,
      height: 580,
    },
  },
  {
    name: "Renan",
    title: "Desenvolvedor Full Stack",
    avatar: {
      src: TeamImg3,
      width: 580,
      height: 580,
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Sobre</template>
      <template v-slot:desc>Um pequeno time apaixonado</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Empowering the world with inclusiva360.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        [...]
      </p>
    </div>
    <div class="grid md:grid-cols-4 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" class="group">
        <div class="w-full aspect-square ">
          <img
            :src="item.avatar.src"
            :width="item.avatar.width"
            :height="item.avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
          <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
