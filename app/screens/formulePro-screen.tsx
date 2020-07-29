import React, { Component } from "react"
import { ViewStyle, TextStyle, View, Image, ImageStyle, StyleSheet, Alert, TouchableOpacity } from "react-native"
import { Button, Screen, Text } from "../components"
import { color, spacing } from "../theme"
import { Table, TableWrapper, Cell } from 'react-native-table-component';
import { FontAwesome } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'


const ROOT: ViewStyle = {
  backgroundColor: color.transparent
}
const TEXT: TextStyle = {
  color: "#8E5044",
  alignSelf: "center",
  fontSize: 34
}
const GO_TEXT: TextStyle = {
  color: "#FFFFFF",
  fontSize: 13,
}

const FOOTER_GO: ViewStyle = {
  paddingVertical: spacing[6],
  paddingHorizontal: spacing[8],
  width: 250,
  height: 30,
  marginBottom: "5%",
  alignSelf: "flex-end"
}
const GO: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#8E5044",
}

const PASTRY: ImageStyle = {
  alignSelf: "center",
}
const pastry = require("./connexion-screen/patisier.png")
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  head: { height: 40 },
  text: { margin: '2%', textAlign: 'center' },
  row: { flexDirection: 'row', backgroundColor: '#f6f8fa' },
  btn: { alignSelf: "center" }
});

export class FormuleProScreen extends Component<{ navigation }, {
  tableHead: string[],
  checked: boolean[],
  tableData: [
    string[],
    string[],
    string[],
    string[],
    string[],
    string[],
    string[],
    string[]
  ]
}> {
  constructor(props) {
    super(props)
    this.state = {
      checked: [
        false,
        false,
        false
      ],
      tableHead: [],
      tableData: [
        ['', 'BASIQUE', 'PRO\n(mensuel)', 'Pro\n(Annuel)'],
        ['Prix', 'Gratuit', '€', '€'],
        ['Commissions sur les ventes', '20%', '5%', '5%'],
        ['Nombre de produits en vitrine', '5', '15', '15'],
        ['Ajout d\'un produit (une fois la limite atteinte)', '', '', ''],
        ['Statistiques', '', '', ''],
        ['Facture \nautomatique', '', '', ''],
        ['FORMULE CHOISIE', '', '', ''],



      ]
    }
  }
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
  render() {
    const elementCheck = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <FontAwesome name="check" size={24} color="green" />
        </View>
      </TouchableOpacity>
    );
    const elementUnCheck = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <FontAwesome name="remove" size={24} color="red" />
        </View>
      </TouchableOpacity>
    );
    const checkBoxAbo = (data, index) => (
      <CheckBox
        containerStyle={{
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          alignSelf: 'center'
        }}
        checked={this.state.checked[index - 1]}
        onPress={() => {
          let array = []
          for (let i = 0; i < this.state.checked.length; i++) {
            if (i === index - 1) {
              array.push(!this.state.checked[index - 1])
            } else {
              if (this.state.checked[i] === true) {
                array.push(!this.state.checked[i])
              } else {
                array.push(this.state.checked[i])
              }
            }
          }
          this.setState({ checked: array })
        }}
      />
    );
    return (
      <Screen style={ROOT} preset="scroll">
        <View>
          <Image source={pastry} style={PASTRY} />
          <Text style={TEXT} preset="header" tx="formulePro.header" />
        </View>
        <View style={styles.container}>
          <Table style={{ margin: 10, padding: 0, }} borderStyle={{ borderWidth: 1, borderColor: '#FFFFFF' }}>
            {
              this.state.tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row} >
                  {
                    rowData.map((cellData, cellIndex) => (
                      <Cell
                        style={cellIndex === 0 && index === 0 ?
                          { width: '35%', backgroundColor: '#8E5044' } :

                          cellIndex === 0 ?
                            { width: '35%', backgroundColor: '#F2F2F2' }
                            : index === 0 ? { width: '22%', backgroundColor: '#8E5044' }
                              : { width: '22%', backgroundColor: '#F2F2F2' }}

                        key={cellIndex}
                        data={
                          (index >= 5 && index <= 6) && cellIndex >= 2 ?
                            elementCheck(cellData, index) :
                            (index >= 5 && index <= 6) && cellIndex === 1 ?
                              elementUnCheck(cellData, index) :
                              (index >= 7) && cellIndex >= 1 ?
                                checkBoxAbo(cellData, cellIndex) :
                                cellData} textStyle={index === 0 ? { ...styles.text, color: '#FFFFFF' } : styles.text} />
                    ))
                  }
                </TableWrapper>
              ))
            }
          </Table>
        </View>
        <View style={FOOTER_GO}>
          <Button
            style={GO}
            textStyle={GO_TEXT}
            tx="formulePro.go"
            onPress={() => { this.props.navigation.navigate('creationProfile1') }}
          />
        </View>
      </Screen >
    )
  }

}