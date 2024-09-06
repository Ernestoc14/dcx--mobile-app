import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Head from "../../assets/images/heading_icon.svg";
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Login_section2 from '../../components/Login/Login_section2/Login_section2';
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

// Login Screen (Main Login Screen)

const login = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const back = () => {
    // router.push('');
    // Redirect to new page
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity onPress={back}>
        {darkMode ? <Dark_back /> : <Back />}
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.head_content}>
          <Head />
          <Text style={[styles.heading, { color: theme.color }]}>Hey, qué Xopa! 👋🏻</Text>
          <Text style={[styles.heading_text, { color: theme.color3 }]}>Estamos felices de tenerte aqui en DCX.</Text>
        </View>
        <Login_section2 />
        <Text style={[styles.bottom_text, { color: theme.color3 }]}>
          <Link href='/profile_setup' style={styles.link}>Crear Cuenta</Link>
          ¿Aún no tienes casillero?
        </Text>
      </ScrollView>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    height: "100%",
  },
  head_content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#39335E',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 20,
  },
  heading_text: {
    fontSize: 12,
    lineHeight: 24,
    fontFamily: 'Montserrat_500Medium',
    color: '#727272',
    textAlign: 'center',
  },
  bottom_text: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 24,
    fontFamily: 'Montserrat_400Regular',
    color: '#727272',
    marginVertical: 30,
    paddingBottom: 20,
  },
  link: {
    fontFamily: 'Montserrat_700Bold',
    color: '#836EFE',
  },
  line: {
    borderBottomColor: '#9C9C9C',
    borderBottomWidth: 0.5,
    width: '35%',
    paddingTop: 2,
  },
})