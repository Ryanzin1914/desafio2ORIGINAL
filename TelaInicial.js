import React from 'react';
import { View, Text, Button } from 'react-native';

const TelaInicial = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Inicial</Text>
      <Button
        title="Ir para a Tela Secundária"
        onPress={() => navigation.navigate('TelaSecundaria')}
      />
    </View>
  );
};

export default TelaInicial;
