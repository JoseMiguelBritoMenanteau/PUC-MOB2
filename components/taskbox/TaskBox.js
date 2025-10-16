import { StyleSheet, Text, View , ScrollView, Button, FlatList, TextInput, Keyboard, TouchableOpacity, Alert, Pressable } from 'react-native';
import React, {useState, useEffect, useRef} from "react";

import stylesTaskBox from './styles-TaskBox.js';



export default function TaskBox() {





    return (
        <View style = {stylesTaskBox.container}>
            <Pressable
                onPress = {() => Alert.alert('Eliminar tarea')}
                style = {stylesTaskBox.pressable_bin}>

                <Text>
                    X
                </Text>

            </Pressable>

            <Text>Primera Tarea</Text>
            <Pressable
                onPress = {() => Alert.alert('Bajar')}
                style = {stylesTaskBox.pressable_bajar}>

                <Text>
                    -
                </Text>

            </Pressable>
            <Text>0</Text>
            <Pressable
                onPress = {() => Alert.alert('Subir')}
                style = {stylesTaskBox.pressable_subir}>

                <Text>
                    +
                </Text>

            </Pressable>
        </View>
    );
};


