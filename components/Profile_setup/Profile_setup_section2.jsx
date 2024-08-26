import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import Input from '../../components/Input/Input';
import DateInput from '../DateInput/DateInput';
import GenderDropdown from '../Gender_dropdown/Gender_dropdown';
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Profile_setup_section2 = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
        <View style={styles.input_container}>
      <Input placeholder="Full Name" />
      <Input placeholder="Nick Name" />
      <DateInput placeholder="Date of birth"  />
      <Input placeholder="Email" />
      <Input placeholder="Phone Number" />
      <GenderDropdown placeholder="Gender" />
      </View>
      <Button buttonText="Continue" onPress={() => {router.push('address')}}/>
    </View>
  )
}

export default Profile_setup_section2;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60,
    flex: 1,
  }
})