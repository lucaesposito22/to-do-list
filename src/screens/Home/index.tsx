import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Tarefa } from '../../components/Tarefa';

export default function Home() {
    const [tarefas, setTarefas] = useState<{ id: number; text: string; completed: boolean }[]>([]);
    const [tarefaNome, setTarefaNome] = useState('');

    function handleTarefaAdd() {
        if (!tarefaNome.trim()) return;

        if (tarefas.some(tarefa => tarefa.text === tarefaNome)) {
            return Alert.alert('Tarefa existe', 'Já existe uma tarefa igual na lista');
        }

        setTarefas(prevState => [
            ...prevState,
            { id: Date.now(), text: tarefaNome, completed: false }
        ]);
        setTarefaNome('');
    }

    function handleTarefaRemove(id: number) {
        Alert.alert('Remover', `Remover a tarefa?`, [
            { text: 'Sim', onPress: () => setTarefas(prevState => prevState.filter(tarefa => tarefa.id !== id)) },
            { text: 'Não', style: 'cancel' }
        ]);
    }

    function handleConcluirTarefa(id: number) {
        setTarefas(prevState =>
            prevState.map(tarefa =>
                tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa
            )
        );
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/Logo.png')} style={styles.logo} />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={"#808080"}
                    value={tarefaNome}
                    onChangeText={setTarefaNome}
                />

                <TouchableOpacity style={styles.button} onPress={handleTarefaAdd}>
                    <Image source={require('../../../assets/add.png')} style={{ width: 12, height: 12 }} />
                </TouchableOpacity>
            </View>

            <View style={styles.contagem}>
                <View style={styles.bloco1}>
                    <Text style={{ fontWeight: 'bold', color: '#4EA8DE' }}>Criadas</Text>
                    <Text style={styles.criadas}>{tarefas.length}</Text>
                </View>

                <View style={styles.bloco2}>
                    <Text style={{ fontWeight: 'bold', color: '#8284FA' }}>Concluídas</Text>
                    <Text style={styles.concluidas}>{tarefas.filter(tarefa => tarefa.completed).length}</Text>
                </View>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Tarefa
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                        onComplete={handleConcluirTarefa}
                        onRemove={handleTarefaRemove}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.tarefas}>
                        <Image source={require('../../../assets/Clipboard.png')} style={{ width: 56, height: 56, marginBottom: 16 }} />
                        <Text style={styles.texto1}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={{ color: '#808080' }}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />
        </View>
    );
}
