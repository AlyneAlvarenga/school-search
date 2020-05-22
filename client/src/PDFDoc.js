import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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

const PDFDoc = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{props.school}</Text>
      </View>
      <View style={styles.section}>
        {
          props.grades.map(subj => {
            return (
              <>
                <Text>{subj._id}</Text>
                {
                  subj.grades.map(grade => {
                    return <Text>{grade}</Text>
                  })
                }
              </>
            )
          })
        }
      </View>
    </Page>
  </Document>
);

export default PDFDoc;