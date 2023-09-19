import {Stack, Text, Box, Pressable, Flex, Avatar, AlertDialog, Button, Input, Icon } from "native-base";
import { NativeBaseProvider} from "native-base";
import {StyleSheet, Alert } from 'react-native';
import { useState, useRef } from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';






export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);
  const [show, setShow] = useState(false);

  const [adoreiContador, setAdoreiContador] = useState(0)
  const [gosteiContador, setGosteiContador] = useState(0)
  const [okContador, setOkContador] = useState(0)
  const [naoGosteiContador, setNaoGosteiContador] = useState(0)
  const [detesteiContador, setDetesteiContador] = useState(0)
  const [senha, setSenha] = useState(senha);
  const _senhaMock = "123";

  _alterarValor = (valor) => {
    switch (valor) {
      case "adorei":
        setAdoreiContador(adoreiContador + 1)
        break;
      case "gostei":
        setGosteiContador(gosteiContador + 1)
        break;
      case "ok":
        setOkContador(okContador + 1)
        break;
      case "nao_gostei":
        setNaoGosteiContador(naoGosteiContador + 1)
        break;
      case "detestei":
        setDetesteiContador(detesteiContador + 1)
        break;  
      default:
        break;
    }
   }

   _zerarValores = (senha) => {
      if (senha == _senhaMock){
        Alert.alert('Sucesso', 'Dados zerados com sucesso!', [{style: 'cancel',} ,{text: 'OK'}]);
        setAdoreiContador(0);
        setGosteiContador(0);
        setOkContador(0);
        setNaoGosteiContador(0);
        setDetesteiContador(0);
        setSenha("");
      } else{
        Alert.alert('Erro', 'Senha Incorreta!', [{style: 'cancel',},{text: 'OK'}]);
      }
   }

  return (
    <NativeBaseProvider>
    <Stack style={styles.container} space={2} backgroundColor={'#6CB629'}>
    <Animatable.View animation="slideInRight">
      <Box>
      <Pressable onPress={() => {this._alterarValor("adorei")}} rounded="3xl" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5" >
        <Box>
            <Text ml={"1.5"} mb= {"1.5"} fontWeight="black" fontSize="sm">
              Adorei
            </Text>
          <Avatar size="md" alt="adorei" source={require('./assets/avaliacao/adorei.png')}/>
          <Flex>
            <Text style = {styles.textoContador}>
              {adoreiContador}
            </Text>
          </Flex>
        </Box>
      </Pressable>
    </Box>
    </Animatable.View>

    <Animatable.View animation="slideInLeft">
    <Box>
      <Pressable onPress={() => {this._alterarValor("gostei")}} rounded="3xl" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
        <Box>
        <Text ml={"1.5"} mb= {"1.5"} fontWeight="black" fontSize="sm">
          Gostei
        </Text>
          <Avatar size="md" alt="gostei" source={require('./assets/avaliacao/gostei.png')}/>
          <Flex>
            <Text style = {styles.textoContador}>
              {gosteiContador}
            </Text>
          </Flex>
        </Box>
      </Pressable>
    </Box>
    </Animatable.View>
    <Animatable.View animation="slideInRight">
    <Box>
      <Pressable onPress={() => {this._alterarValor("ok")}}rounded="3xl" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
        <Box>
        <Text ml={"3.5"} mb= {"1.5"} fontWeight="black" fontSize="sm">
          Ok
        </Text>
          <Avatar size="md" alt= "indiferente" source={require('./assets/avaliacao/indiferente.png')}/>
          <Flex>
            <Text style = {styles.textoContador}>
              {okContador}
            </Text>
          </Flex>
        </Box>
      </Pressable>
    </Box>
    </Animatable.View>
    <Animatable.View animation="slideInLeft">
    <Box>
      <Pressable onPress={() => {this._alterarValor("nao_gostei")}} rounded="3xl" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
        <Box>
        <Text ml={"2"} fontWeight="black" fontSize="sm">
              Não
        </Text>
        <Text ml={"1"} mb= {"1.5"} fontWeight="black" fontSize="sm">
              Gostei
        </Text>
          <Avatar size="md" alt= "não gostei" source={require('./assets/avaliacao/nao_gostei.png')}/>
          <Flex>
            <Text style = {styles.textoContador}>
              {naoGosteiContador}
            </Text>
          </Flex>
        </Box>
      </Pressable>
    </Box>
    </Animatable.View>
    <Animatable.View animation="slideInRight">
    <Box>
      <Pressable onPress={() => {this._alterarValor("detestei")}}rounded="3xl" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
        <Box>
        <Text mb= {"1.5"} fontWeight="black" fontSize="sm">
              Detestei
        </Text>
          <Avatar size="md" alt="detestei" source={require('./assets/avaliacao/detestei.png')}/>
          <Flex>
            <Text style = {styles.textoContador}>
              {detesteiContador}
            </Text>
          </Flex>
        </Box>
      </Pressable>
    </Box>
    </Animatable.View>
    <FontAwesome onPress={() => {setIsOpen(!isOpen)}} style={styles.button} name="refresh" size={40} color="black" />
  </Stack>

  <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Zerar Dados</AlertDialog.Header>
          <AlertDialog.Body>
            <Text style={{marginBottom: 20}}>
            Informar senha para zerar dados
            </Text>
              <Input value={senha} w={{base: "75%",md: "25%"}} type={show ? "text" : "password"} py="0"  InputRightElement={<Pressable onPress={() => setShow(!show)}>
                  <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
              </Pressable>} placeholder="Senha"  onChangeText={text => setSenha(text)}/>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="outline" colorScheme="blue" onPress={onClose} ref={cancelRef}>
                Cancelar
              </Button>
              <Button colorScheme="danger" onPress={() => {this._zerarValores(senha)}} onPressOut={onClose}>
                Zerar
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
  </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  button:{
    position: "absolute",
    alignSelf: 'flex-end',
    right: 55,
    bottom: 80
  },
  textoContador:{
    textAlign: 'center',
    fontWeight: "bold"
  }

})