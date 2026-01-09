<template>
    <div class="page">
        <NavBar />

        <section class="form-section">
            <div class="form-header d-flex flex-column align-center mb-8 text-center pt-6">
                <h1 class="font-extrabold">Sua experiência transforma rotas</h1>
                <p>
                    Compartilhe sua experiência. Seus dados são usados apenas
                    para fins de pesquisa e melhoria da acessibilidade.
                </p>
            </div>

            <form class="form-card" @submit.prevent="submitForm">
                <!-- Nome -->
                <div class="field">
                    <label>Nome</label>
                    <input v-model="form.nome" type="text" required />
                </div>

                <!-- Email -->
                <div class="field">
                    <label>Email</label>
                    <input v-model="form.email" type="email" required />
                </div>

                <!-- Telefone -->
                <div class="field">
                    <label>Telefone</label>
                    <input v-model="form.telefone" type="tel" placeholder="11999999999" required />
                </div>

                <!-- Tipo de participação -->
                <div class="field">
                    <label>Você está respondendo como:</label>
                    <select v-model="form.perfil">
                        <option>Pessoa com mobilidade reduzida</option>
                        <option>Usuário de cadeira de rodas</option>
                        <option>Cuidador / acompanhante</option>
                        <option>Familiar</option>
                        <option>Outro</option>
                    </select>
                </div>

                <!-- Obstáculo -->
                <div class="field">
                    <label>Descreva o obstáculo encontrado</label>
                    <textarea v-model="form.descricao" rows="4" placeholder="Conte o que aconteceu" />
                </div>

                <!-- LGPD -->
                <div class="checkbox">
                    <input v-model="form.lgpd" type="checkbox" id="lgpd" required />
                    <label for="lgpd">
                        Concordo com o uso anônimo das informações para fins de
                        pesquisa e melhoria da acessibilidade (LGPD).
                    </label>
                </div>

                <!-- Status -->
                <p v-if="status === 'success'" class="success">
                    ✅ Enviado com sucesso! Obrigado por colaborar.
                </p>

                <p v-if="status === 'error'" class="error">
                    ❌ Erro ao enviar. Tente novamente.
                </p>

                <!-- CTA -->
                <button class="btn-primary" :disabled="loading">
                    {{ loading ? 'Enviando...' : 'Enviar contribuição' }}
                </button>
            </form>
        </section>

        <Footer />
    </div>
</template>
<script setup>
import { ref } from 'vue'

const API_URL =
    'https://script.google.com/macros/s/AKfycbxiH2N7YJypZU20rvoXZHtX9TaDIx14zdkYRdorlwHgnsk70cohgR7hSePa-4NEVytR7A/exec'

const API_KEY = process.env.VUE_FORM_ENDPOINT

const loading = ref(false)
const status = ref(null)

const form = ref({
    nome: '',
    email: '',
    telefone: '',
    perfil: '',
    descricao: '',
    lgpd: false,
})

const submitForm = async () => {
    loading.value = true
    status.value = null

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: form.value.nome,
                email: form.value.email,
                telefone: form.value.telefone,
                apiKey: API_KEY,
            }),
        })

        if (!response.ok) throw new Error('Erro no envio')

        status.value = 'success'

        // limpa form
        Object.keys(form.value).forEach((key) => {
            form.value[key] = key === 'lgpd' ? false : ''
        })
    } catch (err) {
        status.value = 'error'
    } finally {
        loading.value = false
    }
}
</script>
<style scoped>
.form-section {
    max-width: 640px;
    margin: 0 auto;
    padding: 80px 24px;
}

.form-header h1 {
    color: #ff2d2d;
    font-size: 32px;
    margin-bottom: 16px;
}

.form-header p {
    color: #444;
    margin-bottom: 40px;
}

.form-card {
    background: #fff;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}

.field {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label {
    font-weight: 600;
    margin-bottom: 8px;
}

input,
select,
textarea {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid #ddd;
}

input:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: #ff2d2d;
}

.checkbox {
    display: flex;
    gap: 12px;
    margin: 24px 0;
    font-size: 14px;
}

.btn-primary {
    width: 100%;
    background: linear-gradient(135deg, #ff2d2d, #ff5a5a);
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 16px;
    font-weight: 600;
    cursor: pointer;
}

.btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.success {
    color: #0a9f6c;
    margin-bottom: 16px;
}

.error {
    color: #d93025;
    margin-bottom: 16px;
}
</style>
