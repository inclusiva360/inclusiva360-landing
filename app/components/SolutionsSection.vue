<template>
    <section id="solutions" class="py-16 bg-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl md:text-6xl font-bold mb-12">
                SOLUÇÕES DA <span class="text-blue-500">inclusiva</span><span class="text-brand-green">360</span>
            </h2>

            <div v-if="!anyExpanded" class="grid md:grid-cols-3 gap-8 transition-all duration-500">
                <!-- Card 1 -->
                <div class="border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                    @click="toggleExpanded(1)">
                    <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                        <Icon name="bi:person-x-fill" class="text-6xl md:text-[112px]" />
                    </div>
                    <p class="text-gray-600 font-medium">
                        Pessoas com mobilidade reduzida não têm informações confiáveis sobre acessibilidade urbana.
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                    @click="toggleExpanded(2)">
                    <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                        <Icon name="weui:eyes-off-filled" class="text-6xl md:text-[112px]" />
                    </div>
                    <p class="text-gray-600 font-medium">
                        Apps que ignoram barreiras do mundo real.
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                    @click="toggleExpanded(3)">
                    <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                        <Icon name="oi:thumb-down" class="text-6xl md:text-[112px]" />
                    </div>
                    <p class="text-gray-600 font-medium">
                        A insegurança de não saber se há rampas, calçadas ou banheiros adaptados gera ansiedade e limita a autonomia.
                    </p>
                </div>
            </div>

            <div v-else class="md:flex md:flex-row gap-8 transition-all duration-500">
                <!-- Expanded Card -->
                <div v-if="isExpanded1" class="md:flex-2 border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                    @click="toggleExpanded(1)">
                    <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                        <Icon name="bi:person-x-fill" class="text-6xl md:text-[112px]" />
                    </div>
                    <p class="text-gray-600 font-medium text-2xl">
                        Pessoas com mobilidade reduzida não têm informações confiáveis sobre acessibilidade urbana.
                    </p>
                    <div class="flex items-center pt-20 mt-4 border-t border-gray-200 transition-all duration-300 text-center">                  
                        <div class="bg-blue-50 p-3 rounded-lg w-full">
                            <p class="text-blue-800 font-semibold text-4xl md:text-5xl">
                                Você busca o destino.
                            </p>
                        </div>
                    </div>
                </div>

                <div v-if="isExpanded2" class="md:flex-2 border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                    @click="toggleExpanded(2)">
                    <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                        <Icon name="weui:eyes-off-filled" class="text-6xl md:text-[112px]" />
                    </div>
                    <p class="text-gray-600 font-medium text-2xl">
                        Apps que ignoram barreiras do mundo real.
                    </p>
                    <div class="flex items-center pt-20 mt-4 border-t border-gray-200 transition-all duration-300 text-center">                  
                        <div class="bg-blue-50 p-3 rounded-lg w-full">
                            <p class="text-blue-800 font-semibold text-4xl md:text-5xl">
                                Vê rotas e avisos de acessibilidade.
                            </p>
                        </div>
                    </div>
                </div>

                <div v-if="isExpanded3" class="md:flex-2 border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                    @click="toggleExpanded(3)">
                    <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                        <Icon name="oi:thumb-down" class="text-6xl md:text-[112px]" />
                    </div>
                    <p class="text-gray-600 font-medium text-2xl">
                        A insegurança de não saber se há acessibilidade gera ansiedade e limita a autonomia.
                    </p>
                    <div class="flex items-center pt-20 mt-4 border-t border-gray-200 transition-all duration-300 text-center">                  
                        <div class="bg-blue-50 p-3 rounded-lg w-full">
                            <p class="text-blue-800 font-semibold text-4xl md:text-5xl">
                                Registra barreiras com foto, texto ou pin.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Collapsed Cards -->
                <div class="md:flex-1 flex flex-col gap-8">
                    <div v-if="!isExpanded1" class="border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                        @click="toggleExpanded(1)">
                        <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                            <Icon name="bi:person-x-fill" class="text-6xl md:text-[112px]" />
                        </div>
                        <p class="text-gray-600 font-medium">
                            Pessoas com mobilidade reduzida não têm informações confiáveis sobre acessibilidade urbana.
                        </p>
                    </div>

                    <div v-if="!isExpanded2" class="border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                        @click="toggleExpanded(2)">
                        <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                            <Icon name="weui:eyes-off-filled" class="text-6xl md:text-[112px]" />
                        </div>
                        <p class="text-gray-600 font-medium">
                            Apps que ignoram barreiras do mundo real.
                        </p>
                    </div>

                    <div v-if="!isExpanded3" class="border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                        @click="toggleExpanded(3)">
                        <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                            <Icon name="oi:thumb-down" class="text-6xl md:text-[112px]" />
                        </div>
                        <p class="text-gray-600 font-medium">
                            A insegurança de não saber se há rampas, calçadas ou banheiros adaptados gera ansiedade e limita a autonomia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const isExpanded1 = ref(false)
const isExpanded2 = ref(false)
const isExpanded3 = ref(false)

const anyExpanded = computed(() => isExpanded1.value || isExpanded2.value || isExpanded3.value)

const toggleExpanded = (cardNumber) => {
    if (cardNumber === 1) {
        isExpanded1.value = !isExpanded1.value
        isExpanded2.value = false
        isExpanded3.value = false
    } else if (cardNumber === 2) {
        isExpanded2.value = !isExpanded2.value
        isExpanded1.value = false
        isExpanded3.value = false
    } else if (cardNumber === 3) {
        isExpanded3.value = !isExpanded3.value
        isExpanded1.value = false
        isExpanded2.value = false
    }
}
</script>

