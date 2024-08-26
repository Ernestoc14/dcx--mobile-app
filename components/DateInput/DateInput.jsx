import { StyleSheet, Text, View, TouchableOpacity, Modal, Button, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react';
import ThemeContext from '../../theme/ThemeContext';
import Icon from "../../assets/images/Calendar.svg";

const DateInput = ({
  label,
  placeholder,
  borderRadius,
  backgroundColor,
  borderColor,
}) => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');
  const [selectedPart, setSelectedPart] = useState('day');

  const showDatepicker = () => {
    setShow(true);
  };

  const handleConfirm = () => {
    const formatted = date.toISOString().split('T')[0];
    setFormattedDate(formatted);
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };

  const handleValueChange = (value) => {
    const newDate = new Date(date);
    if (selectedPart === 'day') {
      newDate.setDate(value);
    } else if (selectedPart === 'month') {
      newDate.setMonth(value - 1);
    } else if (selectedPart === 'year') {
      newDate.setFullYear(value);
    }
    setDate(newDate);
  };

  const renderPickerItems = (type) => {
    let items = [];
    if (type === 'day') {
      items = Array.from({ length: 31 }, (_, i) => i + 1);
    } else if (type === 'month') {
      items = Array.from({ length: 12 }, (_, i) => i + 1);
    } else if (type === 'year') {
      items = Array.from({ length: 202 }, (_, i) => 1900 + i);
    }
    return items.map((item, index) => (
      <TouchableOpacity key={index} style={styles.pickerItem} onPress={() => handleValueChange(item)}>
        <Text style={styles.pickerItemText}>{item}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      <View style={styles.inputBox}>
        {label && <Text style={[styles.label, { color: theme.color }]}>{label}</Text>}
        <View style={styles.inputWrapper}>
          <TouchableOpacity
            style={[
              styles.input,
              {
                color: theme.color,
                borderRadius: borderRadius || 6,
                backgroundColor: theme.cardbg2,
                borderColor: borderColor || 'transparent',
              },
            ]}
            onPress={showDatepicker}
          >
            <Text style={{ color: formattedDate ? theme.color : (darkMode ? '#ffffff' : '#808080') }}>
              {formattedDate || placeholder}
            </Text>
            <Icon />
          </TouchableOpacity>
          {show && (
            <Modal transparent={true} animationType="slide" visible={show}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <View style={styles.pickerRow}>
                    <TouchableOpacity style={styles.picker_column} onPress={() => setSelectedPart('day')}>
                      <Text style={styles.pickerText}>Date</Text>
                      <Text style={styles.pickerText}>{date.getDate()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.picker_column} onPress={() => setSelectedPart('month')}>
                      <Text style={styles.pickerText}>Month</Text>
                      <Text style={styles.pickerText}>{date.getMonth() + 1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.picker_column} onPress={() => setSelectedPart('year')}>
                      <Text style={styles.pickerText}>Year</Text>
                      <Text style={styles.pickerText}>{date.getFullYear()}</Text>
                    </TouchableOpacity>
                  </View>
                  <ScrollView style={styles.pickerList}>
                    {renderPickerItems(selectedPart)}
                  </ScrollView>
                  <View style={styles.buttonRow}>
                    <Button title="Confirm" onPress={handleConfirm} />
                    <Button title="Cancel" onPress={handleCancel} />
                  </View>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </View>
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  inputBox: {
    gap: 10,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'SourceSansPro_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    paddingVertical: 14,
    paddingLeft: 35,
    paddingRight: 20,
    borderWidth: 1,
    minWidth: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%', 
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  picker_column: {
    alignItems: 'center',
  },
  pickerText: {
    fontSize: 18,
  },
  pickerList: {
    width: '100%',
    height: 200,
  },
  pickerItem: {
    padding: 10,
    alignItems: 'center',
  },
  pickerItemText: {
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
});
