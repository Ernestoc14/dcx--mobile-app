import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import Input from '../../components/Input/Input';
import DateInput from '../DateInput/DateInput';
import GenderDropdown from '../Gender_dropdown/Gender_dropdown';
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

// Create User Page

const Profile_setup_section2 = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <Input placeholder="Nombre y Apellido" />
        {/* # de Casillero Blockeado y Automatizado */}
        <Input placeholder="Numero de Casillero" />
        <Input placeholder="Email" />
        <DateInput placeholder="Fecha de Nacimiento" />
        <Input placeholder="Numero de Celular" />
        <GenderDropdown placeholder="Sucursal" />
      </View>
      <View style={styles.button_container}>
        <Button buttonText="Continuar" onPress={() => { router.push('address') }} />
      </View>
    </View>
  )
}

export default Profile_setup_section2;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60,
    flex: 1,
  },
  input_container: {
    marginBottom: 120,
  },
})