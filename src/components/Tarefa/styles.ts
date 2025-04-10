import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    tarefaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#262626',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#333',
        width: '100%',
        flexWrap: 'wrap',  // Permite que o conteúdo quebre quando necessário
    },
    tarefaConcluir: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,  // Faz o texto e o ícone de check ocuparem o espaço restante
        flexWrap: 'wrap',  // Quebra o texto se for muito grande
    },
    tarefaTexto: {
        color: '#FFF',
        fontSize: 14,
        flex: 1,  // Faz o texto ocupar o espaço disponível
        flexWrap: 'wrap',  // Permite que o texto quebre se necessário
        marginRight: 8,  // Espaço entre o texto e o ícone de check
    },
    tarefaConcluida: {
        textDecorationLine: 'line-through',
        color: '#AAA',
    },
    tarefaRemover: {
        fontSize: 18,
        color: '#E25858',
        marginLeft: 10,
    }
});
