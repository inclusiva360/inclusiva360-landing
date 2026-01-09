<template>
    <!-- Footer -->
    <footer class="footer">
        <div class="footer-col">
            <h4 class="font-bold">Contato</h4>
            <p>contato@inclusiva360</p>
            <button class="btn-primary small">Entre em contato</button>
        </div>

        <div class="footer-col">
            <h4>Páginas</h4>
            <ul>
                <li class="active">Home</li>
                <li>Soluções</li>
                <li>Comunidade</li>
                <li>Sobre Nós</li>
                <li>Contato</li>
            </ul>
        </div>

        <div class="footer-col">
            <h4>Redes Sociais</h4>
            <div class="socials">
                <div class="flex justify-center md:justify-start gap-4 text-2xl">
                    <Icon name="mdi:linkedin" class="text-2xl md:text-[60px]" />
                    <Icon name="mdi:instagram" class="text-2xl md:text-[60px]" />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
/* ===== Footer ===== */
.footer {
    background: #f1f1f1;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr;
    gap: 48px;
    padding: 48px;
    margin-bottom: 48px;
}

.footer-col h4 {
    margin-bottom: 12px;
}

.footer ul {
    list-style: none;
    padding: 0;
}

.footer li {
    margin-bottom: 8px;
    cursor: pointer;
}

.footer .active {
    color: #ff2d2d;
    font-weight: 600;
}

/* ===== Socials ===== */
.socials {
    display: flex;
    gap: 12px;
}

.social-icon {
    width: 40px;
    height: 40px;
    background: #111;
    border-radius: 8px;
}
</style>