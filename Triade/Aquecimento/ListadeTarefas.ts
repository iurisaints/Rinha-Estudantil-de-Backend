class ListaDeTarefas {
    private tarefas: string[] = [];
  
    adicionarTarefa(tarefa: string): void {
      this.tarefas.push(tarefa);
      console.log(`Tarefa "${tarefa}" adicionada.`);
    }
  
    removerTarefa(tarefa: string): void {
      const indice = this.tarefas.indexOf(tarefa);
      if (indice !== -1) {
        this.tarefas.splice(indice, 1);
        console.log(`Tarefa "${tarefa}" removida.`);
      } else {
        console.log(`Tarefa "${tarefa}" não encontrada.`);
      }
    }
  
    listarTarefas(): void {
      if (this.tarefas.length === 0) {
        console.log('Nenhuma tarefa na lista.');
      } else {
        console.log('Tarefas:');
        this.tarefas.forEach((tarefa, index) => {
          console.log(`${index + 1}. ${tarefa}`);
        });
      }
    }
  }