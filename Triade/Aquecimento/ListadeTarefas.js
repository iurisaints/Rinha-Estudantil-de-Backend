var ListaDeTarefas = /** @class */ (function () {
    function ListaDeTarefas() {
        this.tarefas = [];
    }
    ListaDeTarefas.prototype.adicionarTarefa = function (tarefa) {
        this.tarefas.push(tarefa);
        console.log("Tarefa \"".concat(tarefa, "\" adicionada."));
    };
    ListaDeTarefas.prototype.removerTarefa = function (tarefa) {
        var indice = this.tarefas.indexOf(tarefa);
        if (indice !== -1) {
            this.tarefas.splice(indice, 1);
            console.log("Tarefa \"".concat(tarefa, "\" removida."));
        }
        else {
            console.log("Tarefa \"".concat(tarefa, "\" n\u00E3o encontrada."));
        }
    };
    ListaDeTarefas.prototype.listarTarefas = function () {
        if (this.tarefas.length === 0) {
            console.log('Nenhuma tarefa na lista.');
        }
        else {
            console.log('Tarefas:');
            this.tarefas.forEach(function (tarefa, index) {
                console.log("".concat(index + 1, ". ").concat(tarefa));
            });
        }
    };
    return ListaDeTarefas;
}());
