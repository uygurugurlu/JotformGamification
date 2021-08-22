import React, {useState} from 'react'
import {ScrollView, Text, TouchableOpacity, View, TextInput} from "react-native";
import Modal from 'react-native-modal';
import {styles} from "./styles";
import { Icon } from 'react-native-elements'
import {BLUE} from "../../../constants/colors";

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
    const renderEmail = (item) => {
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

    const renderFormContent = (formContent) => {

        try {
            let formView = []
            let content = formContent.data.content
            for(let i in content) {
                switch (content[i].type){
                    case "control_head":
                        formView.push(renderHeader(content[i]))
                        break;

                    case "control_fullname":
                        formView.push(renderFullName(content[i]))
                        break;

                    case "control_email":
                        formView.push(renderEmail(content[i]))
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
