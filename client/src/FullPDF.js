import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    border: "1 solid black",
    margin: 5
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: "center",
    maxHeight: 70,
  },
  row: {
    flexDirection: "row", 
    justifyContent: "space-around", 
    border: "1 solid #000", 
    paddingTop: 10, 
    paddingBottom: 10, 
    marginTop: 5, 
    marginBottom: 10, 
    marginRight: 10
  }
});

const FullPDF = (props) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ fontSize: 25 }}>{props.currentSchool}</Text>
        </View>
        <View >
          {
            props.schoolQuery.map(obj => {
              return (
                <View key={obj._id} style={styles.row}>
                  <Text>{obj.studentFirstName}</Text>
                  <Text>{obj.studentLastName}</Text>
                  {
                    obj.grades.map(gradeArr => {
                      return (
                        <View key={gradeArr._id} style={{flexDirection: "column", alignItems: "center"}}>
                          <Text>{gradeArr.subject}</Text>
                          <Text>{gradeArr.grade}</Text>
                        </View>
                      )
                    })
                  }
                </View>
              )
            })
          }
        </View>
      </Page>
    </Document>
  )
};

export default FullPDF;