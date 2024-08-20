<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <input v-model="email" type="email" placeholder="Email" required>
            <input v-model="password" type="password" placeholder="Senha" required>
            <button type="submit">Entrar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        handleLogin() {
            if (this.email === 'tecnico@exemplo.com' && this.password === 'senha123') {
                this.$router.push('/kanban');
            } else if (this.email === 'usuario@exemplo.com' && this.password === 'senha123') {
                this.$router.push('/report');
            } else {
                alert('Credenciais inválidas');
            }
        }
    }
};
</script>

<style scoped>
/* Adicione estilos específicos para Login.vue se necessário */
</style>
