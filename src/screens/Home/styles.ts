import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1A",
        paddingHorizontal: 24,
        paddingTop: 50,
    },
    input: {
        flex: 1,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#555',
        padding: 16,
        backgroundColor: '#262626',
        color: '#FFF',
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1E6F9F",
        borderWidth: 1,
        borderColor: '#555',
    },
    form: {
        flexDirection: 'row',
        marginBottom: 32,
        gap: 8,
    },
    logo: {
        width: 110,
        height: 30,
        marginTop: 30,
        marginBottom: 40,
        alignSelf: 'center'
    },
    contagem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '100%',
        
    },
    bloco1: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    bloco2: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    criadas: {
        minWidth: 25,
        height: 25,
        backgroundColor: '#333333',
        borderRadius: 10,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    concluidas: {
        minWidth: 25,
        height: 25,
        backgroundColor: '#333333',
        borderRadius: 10,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    tarefas: {
        flexGrow: 1,
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#333333',
        paddingTop: 48,
        width: '100%',
    },
    texto1: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
});
