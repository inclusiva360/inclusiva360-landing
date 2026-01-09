<template>
    <div class="page">
        <!-- Header -->
        <NavBar></NavBar>

        <!-- Hero -->
        <section class="hero">
            <div class="hero-text">
                <h1>
                    <strong>INCLUSIVA360</strong> – Mobilidade com dignidade,
                    acessibilidade com inteligência.
                </h1>

                <p>
                    App colaborativo para pessoas com mobilidade reduzida e
                    redes de apoio. Encontre rotas acessíveis e registre
                    barreiras em tempo real.
                </p>

                <button class="btn-primary">Quero colaborar</button>
            </div>

            <div class="hero-logo">
                <img src="~/assets/images/inclusiva360-logo-centered.png" alt="Inclusiva360" />
            </div>
        </section>

        <!-- Desafios -->
        <section class="challenges">
            <h2>DESAFIOS E COMO RESOLVEMOS</h2>
            <span class="subtitle">
                CLIQUE NO DESAFIO PARA DESCOBRIR A SOLUÇÃO
            </span>

            <div class="cards">
                <div class="card">
                    Pessoas com mobilidade reduzida não têm informações confiáveis
                    sobre acessibilidade urbana.
                </div>

                <div class="card">
                    Apps que ignoram barreiras do mundo real.
                </div>

                <div class="card">
                    A insegurança de não saber se há rampas, calçadas ou
                    banheiros adaptados gera ansiedade e limita a autonomia.
                </div>
            </div>
        </section>

        <!-- Experiência -->
        <section class="experience">
            <h2>SUA EXPERIÊNCIA TRANSFORMA ROTAS</h2>

            <p>
                Conte como você se desloca e quais obstáculos encontra – seja
                pessoas com mobilidade reduzida, quem usa cadeira de rodas,
                acompanhamento, cuidador ou familiar. Suas respostas tornam
                as rotas mais seguras e úteis para toda a comunidade.
                <br /><br />
                Privacidade respeitada (LGPD).
            </p>

            <button class="btn-primary">Quero colaborar</button>
        </section>

        <!-- Validação -->
        <section class="validation">
            <h2>VALIDAÇÃO REAL, IMPACTO PRÁTICO</h2>

            <p>
                A Inclusiva360 é mais que um app: é um movimento. Construída
                em parceria com universidades, entidades de classe e o poder
                público, une especialistas em tecnologia, engenheiros,
                voluntários e pessoas com deficiência que trazem suas
                vivências para dentro do projeto.
                <br /><br />
                Nosso propósito é simples: usar tecnologia para garantir
                dignidade e mobilidade. Com o apoio de parceiros estratégicos
                e princípios sólidos de inclusão e colaboração, estamos
                criando o primeiro mapa inteligente de acessibilidade do
                Brasil – e do mundo – que combina IA Assistiva para
                personalizar a experiência do usuário e uma IA inédita capaz
                de verificar acessibilidade em imagens públicas e
                colaborativas.
            </p>
        </section>

        <FooterSectionHero></FooterSectionHero>
    </div>
</template>

<style scoped>
/* ===== Base ===== */
.page {
    font-family: 'Inter', system-ui, sans-serif;
    color: #111;
}

/* Container padrão */
section,
footer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 24px;
}

/* ===== Hero ===== */
.hero {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    gap: 64px;
}

.hero-text {
    max-width: 520px;
}

.hero h1 {
    color: #ff2d2d;
    font-size: 32px;
    line-height: 1.35;
}

.hero p {
    margin: 24px 0 32px;
    font-size: 16px;
    line-height: 1.6;
}

.hero-logo {
    display: flex;
    justify-content: center;
}

.hero-logo img {
    width: 100%;
    max-width: 360px;
}

/* ===== Buttons ===== */
.btn-primary {
    background: linear-gradient(135deg, #ff2d2d, #ff5a5a);
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 14px 32px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 10px 24px rgba(255, 45, 45, 0.35);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 32px rgba(255, 45, 45, 0.45);
}

.btn-primary.small {
    padding: 10px 20px;
    font-size: 14px;
}

/* ===== Challenges ===== */
.challenges h2 {
    color: #ff2d2d;
    margin-bottom: 8px;
}

.subtitle {
    font-size: 12px;
    color: #888;
    letter-spacing: 0.04em;
}

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 40px;
}

.card {
    border: 1px solid #ffd1d1;
    padding: 28px;
    border-radius: 12px;
    font-style: italic;
    line-height: 1.6;
    background: #fff;
    min-height: 160px;
    display: flex;
    align-items: center;
}

/* ===== Experience ===== */
.experience {
    max-width: 720px;
}

.experience h2 {
    color: #ff2d2d;
    margin-bottom: 24px;
}

.experience p {
    line-height: 1.7;
    margin-bottom: 32px;
}

/* ===== Validation ===== */
.validation {
    max-width: 900px;
}

.validation h2 {
    color: #ff2d2d;
    margin-bottom: 24px;
}

.validation p {
    line-height: 1.7;
}
</style>
