import { StyleSheet, Text, View , ScrollView, Button, FlatList, TextInput, Keyboard, TouchableOpacity, Alert } from 'react-native';
import React, {useState, useEffect, useRef} from "react";
/*import { Card } from 'react-native-paper'; */
import styles from "./styles.js";



import TaskBox from './components/taskbox/TaskBox.js'





export default function App() {

  const [habito, setHabito] = useState("");
  const [habitos, setHabitos] = useState([]);
  const[seconds, setSeconds] = useState(0);
  //const inputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s+1), 1000);
    return () => clearIntervall(interval);
  }, []);

  const addHabito = () => {
    if (habito.trim() === "" ){
      Alert.alert("Error", "El habito a agregar no puede estar vacío");
      return;
    }
    
    setHabitos([...habitos, {name:habito, count: 0}]);
    setHabito("");
    Keyboard.dismiss();

   };

  //const changeCount = (index, delta) => {
     //setHabitos(habitos.map((h,i) => 
     //i === index ? {...h, count: Math.max(0, h.count+delta)} : h
     //));
  //};

  //const removeHabito = indice => {
     //setHabitos(habitos.filter((_, i) => i === indice));
  //};



  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}> Has tenido la app abierta durante {seconds} segundos</Text>

        <View style={styles.inputRow}>
          <TextInput style={styles.input}
          placeholder = "Ingresa el habito a agregar"
          value = {habito}
          onChangeText = {setHabito} />
          <Button title = "Agregar" onPress={addHabito} /> 
        </View>

        <View style = {styles.centered}>
          <TaskBox />
        </View>
        

      
      </View>
    </ScrollView>
  );
}