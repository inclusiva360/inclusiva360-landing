<template>
    <div>
        <div class="page">
            <section class="hero">
                <div class="container hero-content">
                    <div class="hero-text">
                        <h1>
                            <span class="brand-name">INCLUSIVA360</span> – Mobilidade com dignidade,
                            acessibilidade com inteligência.
                        </h1>
                        <p>
                            App colaborativo para pessoas com mobilidade reduzida e
                            redes de apoio. Encontre rotas acessíveis e registre
                            barreiras em tempo real.
                        </p>
                        <NuxtLink to="/form" class="btn-primary">
                            Quero colaborar</NuxtLink>
                    </div>

                    <div class="hero-logo">
                        <img src="~/assets/images/inclusiva360-logo-centered.png" alt="Inclusiva360 Logo" />
                    </div>
                </div>
            </section>

            <section class="challenges">
                <div class="container">
                    <h2>DESAFIOS E COMO RESOLVEMOS</h2>
                    <span class="subtitle">CLIQUE NO DESAFIO PARA DESCOBRIR A SOLUÇÃO</span>

                    <div class="cards">
                        <div class="card">
                            <p>Pessoas com mobilidade reduzida não têm informações confiáveis sobre acessibilidade
                                urbana.
                            </p>
                        </div>
                        <div class="card">
                            <p>Apps que ignoram barreiras do mundo real.</p>
                        </div>
                        <div class="card">
                            <p>A insegurança de não saber se há rampas, calçadas ou banheiros adaptados gera ansiedade e
                                limita a autonomia.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="experience">
                <div class="container">
                    <div class="content-limit">
                        <h2>SUA EXPERIÊNCIA TRANSFORMA ROTAS</h2>
                        <p>
                            Conte como você se desloca e quais obstáculos encontra – seja
                            pessoas com mobilidade reduzida, quem usa cadeira de rodas,
                            acompanhamento, cuidador ou familiar. Suas respostas tornam
                            as rotas mais seguras e úteis para toda a comunidade.
                        </p>
                        <p class="lgpd">Privacidade respeitada (LGPD).</p>
                        <NuxtLink to="/form" class="btn-primary">
                            Quero colaborar</NuxtLink>
                    </div>
                </div>
            </section>

            <section class="validation">
                <div class="container">
                    <div class="content-limit">
                        <h2>VALIDAÇÃO REAL, IMPACTO PRÁTICO</h2>
                        <p>
                            A Inclusiva360 é mais que um app: é um movimento. Construída
                            em parceria com universidades, entidades de classe e o poder
                            público, une especialistas em tecnologia, engenheiros,
                            voluntários e pessoas com deficiência que trazem suas
                            vivências para dentro do projeto.
                        </p>
                        <br>
                        <p>
                            Nosso propósito é simples: usar tecnologia para garantir
                            dignidade e mobilidade. Com o apoio de parceiros estratégicos
                            e princípios sólidos de inclusão e colaboração, estamos
                            criando o primeiro mapa inteligente de acessibilidade do
                            Brasil – e do mundo – que combina IA Assistiva para
                            personalizar a experiência do usuário e uma IA inédita capaz
                            de verificar acessibilidade em imagens públicas e
                            colaborativas.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <FooterSectionHero></FooterSectionHero>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

/* ===== Configurações Gerais ===== */
.page {
    font-family: 'Inter', sans-serif;
    color: #333;
    background-color: #fff;
    line-height: 1.6;
    /* Melhorado para leitura */
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
}

/* Limita a largura do texto nas seções inferiores mas mantém o alinhamento à esquerda do container */
.content-limit {
    max-width: 800px;
}

section {
    padding: 80px 0;
    /* Aumentado para dar "respiro" entre seções */
}

/* ===== Tipografia ===== */
h1,
h2 {
    color: #FF0000;
    margin-bottom: 24px;
}

h1 {
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
}

h2 {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.02em;
}

.brand-name {
    color: #FF0000;
    font-weight: 900;
}

p {
    font-size: 18px;
    /* Tamanho adequado para leitura web */
    color: #444;
}

/* ===== Hero Section ===== */
.hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.hero-text {
    flex: 1.2;
}

.hero-text p {
    margin-bottom: 32px;
}

.hero-logo {
    flex: 0.8;
    display: flex;
    justify-content: center;
}

.hero-logo img {
    width: 100%;
    max-width: 450px;
    height: auto;
}

/* ===== Botões ===== */
.btn-primary {
    background: #FF3B3B;
    color: white;
    border: none;
    padding: 16px 40px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(255, 59, 59, 0.3);
    transition: transform 0.2s, background 0.2s;
}

.btn-primary:hover {
    background: #e60000;
    transform: translateY(-2px);
}

/* ===== Desafios (Cards) ===== */
.subtitle {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: #666;
    margin-bottom: 40px;
    text-transform: uppercase;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
}

.card {
    border: 1px solid #eee;
    padding: 40px 30px;
    border-radius: 4px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    text-align: center;
}

.card p {
    font-style: italic;
    font-size: 16px;
    color: #555;
    margin: 0;
}

/* ===== Ajustes Específicos ===== */
.lgpd {
    font-size: 14px;
    color: #888;
    margin: 12px 0 24px;
}

/* Responsividade */
@media (max-width: 992px) {
    .hero-content {
        flex-direction: column;
        text-align: left;
    }

    .hero-logo img {
        max-width: 300px;
    }

    h2 {
        font-size: 26px;
    }
}
</style>