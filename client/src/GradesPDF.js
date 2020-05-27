import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { v4 as uuidv4 } from 'uuid';

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
  },
});

const GradesPDF = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={{ fontSize: 25 }}>{props.school}</Text>
      </View>
        {
          props.grades.map(subj => {
            return (
              <View key={uuidv4()} style={styles.row}>
                <Text>{subj._id}</Text>
                {
                  subj.grades.map(grade => {
                    return <Text key={uuidv4()}>{grade}</Text>
                  })
                }
              </View>
            )
          })
        }
    </Page>
  </Document>
);

export default GradesPDF;