import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { v4 as uuidv4 } from 'uuid';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: "center"
  }
});

const GradesPDF = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{props.school}</Text>
      </View>
      <View style={styles.section}>
        {
          props.grades.map(subj => {
            return (
              <View key={uuidv4()}>
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
      </View>
    </Page>
  </Document>
);

export default GradesPDF;