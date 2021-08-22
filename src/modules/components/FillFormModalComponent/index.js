import React, {useRef, useState} from 'react'
import {ScrollView, Text, TouchableOpacity, View, TextInput} from "react-native";
import Modal from 'react-native-modal';
import {styles} from "./styles";
import { Icon } from 'react-native-elements'
import {BLUE, ORANGE} from "../../../constants/colors";
import {Picker} from '@react-native-picker/picker';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

export const FillFormModal = (props) => {
    const [submissionList, setSubmissionList] = useState([])

    const handleSubmissionChange = (id, value) => {
        let index = submissionList.findIndex(x => x.id === id)
        if(index === -1) {
            setSubmissionList(old => [...old, {id: id, value: value}])
        }
        else {
            let newList = [...submissionList];
            newList[index] = {id: id, value: value}
            setSubmissionList(newList)
        }
    }

    const renderHeader = (item) => (
        <View key={item.qid}>
            <Text style={styles.header}>{item.text}</Text>
            <View style={styles.divider}></View>
        </View>
    )
    const renderFullName = (item) => {
        const getValue = (name) => {
            if(name === "first")
                return submissionList.findIndex(e => e.id == item.qid + "_first") === -1 ?
                    "" : submissionList[submissionList.findIndex(e => e.id == item.qid + "_first")].value
            else
                return submissionList.findIndex(e => e.id == item.qid + "_last") === -1 ?
                    "" : submissionList[submissionList.findIndex(e => e.id == item.qid + "_last")].value
        }
        return (
            <View key={item.qid}>
                <Text style={styles.subSectionHeader}>{item.text}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => handleSubmissionChange(item.qid + "_first", e)}
                    value={getValue("first")}
                    placeholder="First Name"
                />
                <Text style={styles.subLabel}>{item.sublabels.first}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => handleSubmissionChange(item.qid + "_last", e)}
                    value={getValue("last")}
                    placeholder="Last Name"
                />
                <Text style={styles.subLabel}>{item.sublabels.last}</Text>
                <View style={styles.divider} />
            </View>

        )
    }
    const renderText = (item) => {
        const getValue = () => {
            return submissionList.findIndex(e => e.id == item.qid) === -1 ?
                "" : submissionList[submissionList.findIndex(e => e.id == item.qid)].value
        }
        return(
            <View key={item.qid}>
                <Text style={styles.subSectionHeader}>{item.text}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => handleSubmissionChange(item.qid, e)}
                    value={getValue()}
                    placeholder={item.text}
                />
                <Text style={styles.subLabel}>{item.subLabel}</Text>
                <View style={styles.divider} />

            </View>
            )
    }
    const renderPhone = (item) => {
        const getValue = () => {
            return submissionList.findIndex(e => e.id == item.qid) === -1 ?
                "" : submissionList[submissionList.findIndex(e => e.id == item.qid)].value
        }
        const formatPhone = (value) => {
            try {
                let x = value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
                value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
                return value
            }
            catch (e) {
                return value
            }
        }
        return(
            <View key={item.qid}>
                <Text style={styles.subSectionHeader}>{item.text}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={e => handleSubmissionChange(item.qid, formatPhone(e))}
                    value={getValue()}
                    placeholder={item.inputMaskValue}
                    keyboardType={"phone-pad"}
                />
                <Text style={styles.subLabel}>{item.sublabels.masked}</Text>
                <View style={styles.divider} />

            </View>
        )
    }
    const renderDropdown = (item) => {
        const getValue = () => {
            return submissionList.findIndex(e => e.id == item.qid) === -1 ?
                null : submissionList[submissionList.findIndex(e => e.id == item.qid)].value
        }
        const renderValues = () => {
            let values = item.options.split("|")
            return( values.map( (x) => {
                return( <Picker.Item label={x} key={x} value={x}  />)} ));
        }
        return(
            <View key={item.qid}>
                <Text style={styles.subSectionHeader}>{item.text}</Text>
                <Picker
                    selectedValue={getValue()}
                    onValueChange={e => handleSubmissionChange(item.qid, e)}
                    style={styles.picker}>
                    {renderValues()}
                </Picker>
                <Text style={styles.subLabel}>{item.subLabel}</Text>
                <View style={styles.divider} />
            </View>
        )
    }
    const renderSubmit = (item) => {
        return(
            <View key={item.qid} style={styles.submitContainer}>
                <AwesomeButtonRick
                    type="primary"
                    backgroundColor={ORANGE}
                    backgroundDarker={'#be4e04'}
                    textColor={'#fff'}
                    onPress={() => submitForm()}
                >
                    {item.text}
                </AwesomeButtonRick>
            </View>
            )
    }
    const submitForm = () => {
        alert(submissionList)
    }
    const sortForm = (content) => {
        let arr = []
        for(let i in content) {
            arr.push(content[i])
        }
        return arr.sort((a,b) =>  (a.order.parseInt - b.order.parseInt));
    }
    const renderFormContent = (formContent) => {
        try {
            let formView = []
            let content = sortForm(formContent.data.content)
            for(let i in content) {
                switch (content[i].type){
                    case "control_head":
                        formView.push(renderHeader(content[i]))
                        break;

                    case "control_fullname":
                        formView.push(renderFullName(content[i]))
                        break;

                    case "control_email":
                        formView.push(renderText(content[i]))
                        break;

                    case "control_phone":
                        formView.push(renderPhone(content[i]))
                        break;

                    case "control_textbox":
                        formView.push(renderText(content[i]))
                        break;

                    case "control_textarea":
                        formView.push(renderText(content[i]))
                        break;

                    case "control_dropdown":
                        formView.push(renderDropdown(content[i]))
                        break;

                    case "control_button":
                        formView.push(renderSubmit(content[i]))
                        break;
                }
            }
            return (
                <View>
                    {formView}
                </View>
            )
        }
        catch (e) {
            console.log(e)
            return (
                <Text>Form Yükleniyor</Text>
            )
        }
    }
    return (
        <View>
            <Modal isVisible={props.visible}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={props.setNotVisible} style={styles.closeButton}>
                        <Icon
                            reverse
                            name='times'
                            type='font-awesome-5'
                            color= {BLUE}
                            size={20}
                        />
                    </TouchableOpacity>
                    <ScrollView>
                        {renderFormContent(props.formContent)}
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}
