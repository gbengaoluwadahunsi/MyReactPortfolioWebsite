
 

import {
  Text,
  Font,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

// import Header from './Header';
// import Skills from './Skills';
// import Education from './Education';
// import Experience from './Experience';
import Navbar from './Navbar';



// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const Resume = () =>  {
   
	return (
		<div className='bg-slate-200 h-screen'> 
      <Navbar />
      <h2 className='text-customBlue font-extrabold  md:text-xl lg:text-3xl text-center '>View my Résumé</h2>  
      <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
      
		</div>
      
	
	);
  }


export default Resume



