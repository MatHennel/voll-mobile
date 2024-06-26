import Login from '../src/Login'
import Cadastro from '../src/Cadastro'
import { Text, View } from "react-native";
import {NativeBaseProvider, StatusBar} from 'native-base'
import { TEMAS } from "@/src/estilos/Temas";

export default function Index() {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
      <Cadastro/>
    </NativeBaseProvider>
    
  );
}
