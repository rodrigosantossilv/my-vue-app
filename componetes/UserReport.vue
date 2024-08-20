<template>
    <div class="container">
        <h1>Relatar Problema</h1>
        <form @submit.prevent="submitReport">
            <input v-model="issue" type="text" placeholder="Descreva o problema" required>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            issue: ''
        };
    },
    methods: {
        submitReport() {
            alert(`Problema relatado: ${this.issue}`);
            this.issue = '';
        }
    }
};
</script>

<style scoped>
/* Adicione estilos específicos para UserReport.vue se necessário */
</style>
