import { VStack,Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';

export default function Cadastro() {

  const [numSecao, setNumSecao] = useState(0)

  const secoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados basicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu email'
        },
      ]
    },
    {
      id:2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Para finalizar, quais são os seus planos?',
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: 'SulaAmerica'
        },
        {
          id: 1,
          value: 'SulaAmerica'
        }
      ]
    }
  ]

  function avançarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao-1)
    }
  }

  return (
   <VStack flex={1} alignItems={"center"} justifyContent={'center'} p={5}>
    <Image source={Logo} alt='Logo Voll'/>

   <Titulo color="blue.500">
    {secoes[numSecao].titulo}
   </Titulo>

   <Box>
    {
      secoes[numSecao].entradaTexto.map(entrada =>{
        return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id}/>
      })
    }
   </Box>
    
    {numSecao > 0 && <Botao onPress = {() => voltarSecao()} 
      bgColor={"red.700"}> Voltar </Botao>}
    <Botao onPress = {() => avançarSecao()} mt={4}> Avançar </Botao>

        
   </VStack>
  );
}
