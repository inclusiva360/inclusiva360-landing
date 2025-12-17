<template>
    <section id="solutions" class="py-16 bg-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl md:text-6xl font-bold mb-12">
                SOLUÇÕES DA <span class="text-blue-500">inclusiva</span><span class="text-brand-green">360</span>
            </h2>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                    @click="openModal(1)">
                    <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                        <Icon name="bi:person-x-fill" class="text-6xl md:text-[112px]" />
                    </div>
                    <p class="text-gray-600 font-medium">
                        Pessoas com mobilidade reduzida não têm informações confiáveis sobre acessibilidade urbana.
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                    @click="openModal(2)">
                    <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                        <Icon name="weui:eyes-off-filled" class="text-6xl md:text-[112px]" />
                    </div>
                    <p class="text-gray-600 font-medium">
                        Apps que ignoram barreiras do mundo real.
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="border rounded-xl p-8 shadow-sm hover:shadow-md transition bg-white cursor-pointer hover:bg-gray-50"
                    @click="openModal(3)">
                    <div class="text-blue-900 text-4xl md:text-5xl mb-4 flex justify-center">
                        <Icon name="oi:thumb-down" class="text-6xl md:text-[112px]" />
                    </div>
                    <p class="text-gray-600 font-medium">
                        A insegurança de não saber se há acessibilidade gera ansiedade e limita a autonomia.
                    </p>
                </div>
            </div>
        </div>

        <!-- Modal Overlay -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            @click="closeModal">
            <!-- Modal Content -->
            <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
                <!-- Modal Header -->
                <div class="sticky top-0 bg-white p-6 border-b flex justify-between items-center rounded-t-2xl">
                    <h3 class="text-2xl font-bold text-blue-900">
                        {{ modalTitle }}
                    </h3>
                    <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl">
                        ×
                    </button>
                </div>

                <!-- Modal Body -->
                <div class="p-6">
                    <div v-if="activeModal === 1">
                        <div class="text-blue-900 text-6xl mb-6 flex justify-center">
                            <Icon name="bi:person-x-fill" />
                        </div>
                        <h4 class="text-xl font-bold mb-4 text-blue-900">Problema: Falta de Informação Confiável</h4>
                        <p class="text-gray-700 mb-4">
                            Pessoas com mobilidade reduzida enfrentam dificuldades para encontrar informações precisas
                            sobre acessibilidade em espaços urbanos.
                        </p>
                        <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                            <li>Rampas inexistentes ou mal conservadas</li>
                            <li>Calçadas irregulares e obstruídas</li>
                            <li>Transporte público sem acessibilidade</li>
                            <li>Estabelecimentos sem estrutura adequada</li>
                        </ul>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-blue-800 font-semibold">
                                <strong>Solução inclusiva360:</strong> Mapeamento colaborativo e verificado de rotas
                                acessíveis.
                            </p>
                        </div>
                    </div>

                    <div v-if="activeModal === 2">
                        <div class="text-blue-900 text-6xl mb-6 flex justify-center">
                            <Icon name="weui:eyes-off-filled" />
                        </div>
                        <h4 class="text-xl font-bold mb-4 text-blue-900">Problema: Apps que Ignoram a Realidade</h4>
                        <p class="text-gray-700 mb-4">
                            Aplicativos de navegação tradicionais não consideram as barreiras físicas que pessoas com
                            mobilidade reduzida enfrentam.
                        </p>
                        <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                            <li>Rotas com escadas e degraus</li>
                            <li>Travessias de ruas perigosas</li>
                            <li>Distâncias muito longas sem pontos de descanso</li>
                            <li>Falta de informações sobre largura de passagens</li>
                        </ul>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-blue-800 font-semibold">
                                <strong>Solução inclusiva360:</strong> Navegação inteligente que considera apenas rotas
                                verdadeiramente acessíveis.
                            </p>
                        </div>
                    </div>

                    <div v-if="activeModal === 3">
                        <div class="text-blue-900 text-6xl mb-6 flex justify-center">
                            <Icon name="oi:thumb-down" />
                        </div>
                        <h4 class="text-xl font-bold mb-4 text-blue-900">Problema: Insegurança e Ansiedade</h4>
                        <p class="text-gray-700 mb-4">
                            A incerteza sobre condições de acessibilidade gera stress e limita a autonomia das pessoas
                            com mobilidade reduzida.
                        </p>
                        <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                            <li>Medo de encontrar barreiras imprevistas</li>
                            <li>Necessidade de planejamento excessivo</li>
                            <li>Dependência de terceiros para locomoção</li>
                            <li>Isolamento social por falta de acessibilidade</li>
                        </ul>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-blue-800 font-semibold">
                                <strong>Solução inclusiva360:</strong> Sistema de confiança e validação comunitária para
                                rotas seguras.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Modal Footer -->
                <div class="p-6 border-t">
                    <button @click="closeModal"
                        class="bg-brand-green text-white px-6 py-3 rounded-full font-bold shadow hover:opacity-90 w-full">
                        Entendi a Solução
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue'

const showModal = ref(false)
const activeModal = ref(1)

const openModal = (modalNumber) => {
    activeModal.value = modalNumber
    document.body.classList.add('modal-open')
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
    // Remove a classe após a animação do modal
    setTimeout(() => {
        document.body.classList.remove('modal-open')
    }, 300)
}

// Adicione este CSS no seu arquivo global (app.css ou style.css)
</script>

<style>
/* Adicione no seu CSS global */
body.modal-open {
    overflow: hidden;
    padding-right: var(--scrollbar-width, 0px);
}

/* Opcional: transição suave para o modal */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>