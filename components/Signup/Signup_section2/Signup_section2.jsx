// Signup_section2.jsx
import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Input from '../../Input/Input';
import Password from '../../Password/Password';
import Person from "../../../assets/images/person.svg";
import Dark_person from "../../../assets/images/dark_person.svg";
import Security from "../../../assets/images/password.svg";
import Dark_security from "../../../assets/images/dark_security.svg";
import CheckBox from '../../Checkbox/Checkbox';
import Button from '../../Button/Button';
import Signup_section3 from '../Signup_section3/Signup_section3';
import ThemeContext from '../../../theme/ThemeContext';

const Signup_section2 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [Passwordvisible, setPasswordvisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);

    const openModal5 = () => {
        setTimeout(() => setModalVisible5(true), 300);
    };  
    const closeModal5 = () => {
        setModalVisible5(false);
    };
    return (
        <View>
            <View style={styles.input_container}>
                <Input placeholder="User Name" Icon={darkMode? Dark_person : Person} />
                <Password passwordVisible={Passwordvisible} setPasswordVisible={setPasswordvisible} Icon={darkMode? Dark_security : Security} placeholder="password" />
            </View>
            <View style={styles.check_row}>
                <CheckBox
                    label="By clicking the Register button, you agree to the public offer"
                    checked={isChecked}
                    onChange={setIsChecked}
                />
            </View>
            <Button buttonText="signin" onPress={openModal5} />
            <Signup_section3 
            openModal5={openModal5}
            modalVisible5={modalVisible5}
            closeModal5={closeModal5}
            />
        </View>
    );
};

export default Signup_section2;

const styles = StyleSheet.create({
    input_container: {
        gap: 16,
    },
    check_row: {
        paddingVertical: 30,
    }
});
