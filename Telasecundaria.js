import React from 'react';
import { View, Text, Button } from 'react-native';

const TelaSecundaria = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Secundária</Text>
      <Button
        title="Voltar para a Tela Inicial"
        onPress={() => navigation.navigate('TelaInicial')}
      />
    </View>
  );
};

export default TelaSecundaria;
