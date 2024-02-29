import { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface OlaProps {
    nomeProps:string
}

export function Ola({nomeProps} : OlaProps) {

    const [contadorLikes, setContadorLikes] = useState<number>(0);

    const incrementarContador = () =>  setContadorLikes(contadorLikes + 1);
    const decrementarContador = () =>  setContadorLikes(contadorLikes - 1);

    return (
    <View style={styles.container}>
        <Text style={styles.greeting}>
          Olá {nomeProps} seu total de Likes é: {contadorLikes}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Like"         
            onPress={incrementarContador}
            color="blue"
          />
          <Button
            title="Deslike"         
            onPress={decrementarContador}
            color="red"
          />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    greeting: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 16,
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10
    },
  });