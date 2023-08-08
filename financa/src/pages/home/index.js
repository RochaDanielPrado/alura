import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../Components/Header';
import Balance from '../../Components/Balance';
import Moviments from '../../Components/Moviments';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '17/09/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix cliente x',
        value: '2.500,00',
        date: '20/09/2022',
        type: 1 // Receitas
    },
    {
        id: 3,
        label: 'Salario',
        value: '7.200,00',
        date: '22/09/2022',
        type: 1 // Receitas
    }
];

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name={'Daniel Rocha'} />
            <Balance saldo='9.250,90' gastos='390,00' />

            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={ ({ item }) => <Moviments data={item}/>}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    }
});
