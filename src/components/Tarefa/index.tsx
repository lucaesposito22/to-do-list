import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

type TarefaProps = {
    id: number;
    text: string;
    completed: boolean;
    onComplete: (id: number) => void;
    onRemove: (id: number) => void;
};

export function Tarefa({ id, text, completed, onComplete, onRemove }: TarefaProps) {
    return (
        <View style={styles.tarefaItem}>
            {/* Botão para concluir tarefa */}
            <TouchableOpacity onPress={() => onComplete(id)} style={styles.tarefaConcluir}>
                {/* Troca da imagem baseada no estado completed */}
                <Image 
                    source={completed 
                        ? require('../../../assets/checked.png') 
                        : require('../../../assets/check.png')} 
                    style={{width:18, height:18, marginRight: 8}} 
                     resizeMode="contain"
                />
                <Text style={[styles.tarefaTexto, completed && styles.tarefaConcluida]}>
                    {text}
                </Text>
            </TouchableOpacity>

            {/* Botão para remover tarefa */}
            <TouchableOpacity onPress={() => onRemove(id)}>
                <Image source={require('../../../assets/lixeira.png')} style={{width:12, height:14}}/>
            </TouchableOpacity>
        </View>
    );
}
