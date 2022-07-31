//Tinha faltado colocar o código para exibir um texto na tela
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreatePost extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Criar Post</Text>
            </View>
        )
    }
}