import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: "center"
  }
});

const FullPDF = (props) => {

  console.log(props.schoolQuery)

  return (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{props.currentSchool}</Text>
      </View>
      <View style={styles.section}>
        {
          props.schoolQuery.map(obj => {
            return (
              <View key={obj._id}>
                <Text>{obj.studentFirstName}</Text>
                <Text>{obj.studentLastName}</Text>
                {
                  obj.grades.map(gradeArr => {
                    return (
                      <View key={gradeArr._id}>
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