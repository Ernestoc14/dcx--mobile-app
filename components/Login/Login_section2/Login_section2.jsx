import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import Input from '../../Input/Input';
import Mail from "../../../assets/images/mail.svg";
import Dark_mail from "../../../assets/images/dark_mail.svg";
import Security from "../../../assets/images/password.svg";
import Dark_security from "../../../assets/images/dark_security.svg";
import Password from '../../Password/Password';
import Button from '../../Button/Button';
import Login_section3 from '../Login_section3/Login_section3';
import Login_section4 from '../Login_section4/Login_section4';
import ThemeContext from '../../../theme/ThemeContext';
import Login_section5 from '../Login_section5/Login_section5';
import Login_section6 from '../Login_section6/Login_section6';
import { router, Link } from "expo-router";

// Login Screen  (Iniciar Sesion)

const Login_section2 = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    const [Passwordvisible, setPasswordvisible] = useState(false);
    const [isRemember, setIsRemember] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);

    const toggleSwitch = () => setIsRemember(previousState => !previousState);
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    const openModal2 = () => {
        setModalVisible(false);
        setTimeout(() => setModalVisible2(true), 300);
    };
    const openModal3 = () => {
        setModalVisible2(false);
        setTimeout(() => setModalVisible3(true), 300);
    };
    const openModal4 = () => {
        setModalVisible3(false);
        setTimeout(() => setModalVisible4(true), 300);
    };
    const closeModal2 = () => setModalVisible2(false);
    const closeModal3 = () => setModalVisible3(false);
    const closeModal4 = () => setModalVisible4(false);
    return (
        <View>
            <View style={[styles.input_container]}>
                <Input placeholder="Casillero DCX o Email" Icon={darkMode ? Dark_mail : Mail} />
                <Password passwordVisible={Passwordvisible} setPasswordVisible={setPasswordvisible} Icon={darkMode ? Dark_security : Security} placeholder="Contraseña" />
            </View>
            <View style={styles.row}>
                <View style={styles.switch_row}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#836EFE" }}
                        thumbColor={isRemember ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isRemember}
                    />
                    <Text style={styles.remember}>Recuérdame</Text>
                </View>
                <Text style={styles.forget} onPress={openModal}>Olvidé mi contraseña</Text>
            </View>
            <Button buttonText="Iniciar Sesión" onPress={() => { router.push('home') }} />

            <Login_section3
                modalVisible={modalVisible}
                closeModal={closeModal}
                openModal2={openModal2}
            />
            <Login_section4
                modalVisible2={modalVisible2}
                closeModal2={closeModal2}
                openModal3={openModal3}
            />
            <Login_section5
                modalVisible3={modalVisible3}
                closeModal3={closeModal3}
                openModal4={openModal4}
            />
            <Login_section6
                modalVisible4={modalVisible4}
                closeModal4={closeModal4}
            />

        </View>
    );
};

export default Login_section2;

const styles = StyleSheet.create({
    input_container: {
        gap: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,
        paddingBottom: 16,
    },
    switch_row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    remember: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'SourceSansPro_400Regular',
        color: '#727272',
        paddingLeft: 7
    },
    forget: {
        fontSize: 12,
        lineHeight: 24,
        fontFamily: 'Montserrat_400Regular',
        color: '#727272',
    }
});
