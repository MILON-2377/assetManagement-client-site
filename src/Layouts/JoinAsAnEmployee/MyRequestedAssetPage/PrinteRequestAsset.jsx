import {
  Document,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const asset = {
    id: '123',
    name: 'Sample Asset',
    description: 'This is a sample asset description.',
    status: 'Approved', // Change this value to see different behaviors
  };
  

const MyDocument = () => (
  <Document>
    <Page style={styles.body}>
      <View style={styles.header}>
        <Text>Company Information</Text>
      </View>
      <View style={styles.content}>
        <Text>Asset Details:</Text>
        <Text>ID:{asset.id} </Text>
        <Text>Name:{asset.name} </Text>
        <Text>Description: {asset.description}</Text>
        {/* Add more asset details as needed */}
      </View>
      <View style={styles.footer}>
        <Text>Printed on: {new Date().toLocaleDateString()}</Text>
      </View>
    </Page>
  </Document>
);

const PrinteRequestAsset = () => {
  return (
    <div>
      <PDFDownloadLink document={<MyDocument></MyDocument>} fileName="asset-details.pdf">
      {({ loading }) => (loading ? 'Loading document...' : 'Print Asset Details')}
      </PDFDownloadLink>
    </div>
  );
};

const styles = StyleSheet.create({
    body: {
      padding: 10,
    },
    header: {
      borderBottom: '1px solid #000',
      marginBottom: 10,
      paddingBottom: 10,
      textAlign: 'center',
    },
    content: {
      marginBottom: 10,
    },
    footer: {
      borderTop: '1px solid #000',
      marginTop: 10,
      paddingTop: 10,
      textAlign: 'center',
      position: 'absolute',
      bottom: 10,
      left: 0,
      right: 0,
    },
  });

export default PrinteRequestAsset;
