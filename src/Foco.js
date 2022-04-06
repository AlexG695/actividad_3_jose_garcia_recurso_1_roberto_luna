import React from 'react'
import {Image, View, Button} from 'react-native';
import { useState } from 'react';

const Foco = () => {

    const [estatus,setEstatus] = useState(false);
    const [color, setColor] = useState("");

  return (
      <View>
        <Image source=
        {
            color == "Gris" ? require('../img/focoOff.png') :
            color == "Amarillo" ? require('../img/focoOn.png') :
            color == "Verde" ? require('../img/focoVerde.png') :
            color == "Azul" ? require('../img/focoAzul.png') :
            color == "Rojo" ? require('../img/focoRojo.png') :
            require('../img/focoOff.png')
        }
            style={{width: 250, height: 350}}/>

            
        
        <Button
          onPress={()=>{setColor("Gris")
                        }}
            title="Apagado"
            color="#BBA9BB"
          />

        <Button
          onPress={()=>{setColor("Amarillo")}}
            title="Amarrillo"
            color="#E7D40A"
          />

        
        <Button
          onPress={()=>{setEstatus(!estatus)
                        setColor("Rojo")}}
            title="Rojo"
            color="#E83845"
          />

        <Button
          onPress={()=>{setEstatus(!estatus)
                        setColor("Azul")}}
            title="Azul"
            color="#0000FF"
          />

        <Button
          onPress={()=>{setEstatus(!estatus)
                        setColor("Verde")}}
            title="Verde"
            color="#008000"
          />
      </View>

  )
}

export default Foco