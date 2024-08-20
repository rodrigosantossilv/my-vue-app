<template>
    <div class="container">
        <h1>Kanban de TI</h1>
        <div class="kanban">
            <div class="kanban-column">
                <h2>A Fazer</h2>
                <!-- Tarefas a fazer aqui -->
            </div>
            <div class="kanban-column">
                <h2>Em Progresso</h2>
                <!-- Tarefas em progresso aqui -->
            </div>
            <div class="kanban-column">
                <h2>Concluído</h2>
                <!-- Tarefas concluídas aqui -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: {
                todo: ['Task 1', 'Task 2'],
                inProgress: ['Task 3'],
                done: ['Task 4']
            }
        };
    }
};
</script>

<style scoped>
/* Adicione estilos específicos para TechnicianKanban.vue se necessário */
</style>
