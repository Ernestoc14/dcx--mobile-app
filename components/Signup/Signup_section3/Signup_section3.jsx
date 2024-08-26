import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../../assets/images/back.svg";
import Dark_back from "../../../assets/images/dark_back.svg";
import ThemeContext from '../../../theme/ThemeContext';
import Password from '../../Password/Password';
import Button from '../../Button/Button';
import { Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import Otp from '../../OTP/Otp';
import Signup_section4 from '../Signup_section4/Signup_section4';

const Signup_section3 = ({openModal5, closeModal5, modalVisible5}) => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [modalVisible6, setModalVisible6] = useState(false);

    const openModal6 = () => {
        setTimeout(() => setModalVisible6(true), 300);
    };  
    const closeModal6 = () => {
        setModalVisible6(false);
    };
    const handleContinue = () => {
      closeModal5();
      openModal6();
  };
  return (
    <View>
     <Modal
                transparent={true}
                visible={modalVisible5}
                onRequestClose={closeModal5}
            >
                <View style={[styles.modalOverlay, { backgroundColor: theme.overlay }]}>
                    <View style={[styles.modalContent, { backgroundColor: theme.background }]}>
                        <View style={styles.modal_header}>
                            <TouchableOpacity onPress={closeModal5}>
                              {darkMode? <Dark_back /> : <Back />}
                            </TouchableOpacity>
                            <Text style={[styles.heading, { color: theme.color }]}>Verification</Text>
                        </View>
                        <Text style={[styles.head_text, {color:theme.color3}]}>Enter the 4 digits code that you received on your email.</Text>
                        <Otp />
                     <Button buttonText="continue" onPress={handleContinue} />
                     <Text style={[styles.bottom_text, {color:theme.color3}]}>By continuing, you agree to Shopping<Text style={styles.terms}> Conditions of Use</Text> and<Text style={styles.terms}> Privacy Notice</Text></Text>
                    </View>
                </View>
            </Modal>
            <Signup_section4
            modalVisible6={modalVisible6}
            closeModal6={closeModal6}
            openModal6={openModal6}
            />

    </View>
  )
}

export default Signup_section3;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
},
modalContent: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 60,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
},
modal_header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70,
    marginBottom: 25,
},
heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#151515',
},
head_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_400Regular',
    color: '#727272',
},
bottom_text: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#474747',
    textAlign: 'center',
    marginTop: 16,
},
terms: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#836EFE',
    textDecorationLine: 'underline',
}
})