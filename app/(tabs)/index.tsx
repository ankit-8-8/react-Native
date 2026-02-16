import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (

    // <View style={styles.titleContainer}>
    //   <View style={styles.rowContainer}>
    //     <View style={[styles.box, { backgroundColor: "white" }]}>
    //       <Text style={{ color: "red",fontSize:12,textAlign:"center",lineHeight:100 }}>1</Text>
    //     </View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}>
    //       <Text style={{ color: "red" }}>1</Text>
    //     </View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //   </View>
    //   <View style={styles.rowContainer}>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //   </View>
    //   <View style={styles.rowContainer}>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //   </View>
    //   <View style={styles.rowContainer}>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //   </View>
    //   <View style={styles.rowContainer}>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //   </View>
    //   <View style={styles.rowContainer}>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //   </View>
    //   <View style={styles.rowContainer}>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "white" }]}></View>
    //     <View style={[styles.box, { backgroundColor: "black" }]}></View>
    //   </View>

    // </View>


    <View style={{ flex: 1, backgroundColor: "oldlace", borderWidth: 5, borderColor: "coral", marginBlock: 40, marginHorizontal: 10, borderCurve: 'circular' }}>
      <Text style={{ marginHorizontal: 'auto', marginTop: 80, fontWeight: 'bold', fontSize: 20, borderBottomWidth: 2, borderColor: "white", paddingBlock: 10, paddingHorizontal: 60 }}>Hello, this is <Text style={{ color: "coral" }}>Ankit</Text></Text>
      <Text style={{ paddingHorizontal: 18, paddingVertical: 3, paddingTop: 40 }}>I am from Ballia.</Text>
      <Text style={{ paddingHorizontal: 18, paddingVertical: 3 }}>I have done my doploma from MMIT Hariharpur Gorakhpur in cse.</Text>
      <Text style={{ paddingHorizontal: 18, paddingVertical: 3 }}>After completing my, I join tecpile technology and Gained Hands on experience on Mern.</Text>
      <Text style={{ paddingHorizontal: 18, paddingVertical: 3 }}>I recommend techpile technology to my juniors , who want to develop their skills in tech.</Text>
      <Text style={{ textAlign: 'center', marginBlock: 20, fontSize: 15, fontWeight: 'bold' }}>Thank You</Text>
    </View>

    // <View style={{ marginTop: 40 }}>
    //   <TextInput style={styles.mInput} autoComplete='username'  placeholder='enter your name...' />
    //   <TextInput style={styles.mInput} autoComplete='email' placeholder='enter your email...' />
    //   <TextInput style={styles.mInput} autoComplete='new-password' placeholder='enter your password...' />
    //   <Button title='Submit'/>
    // </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    // justifyContent: "center", alignItems: "center",
    flexDirection: 'column',
    backgroundColor: "red",
    // ,
    // margin: "auto",
    // gap: 12,
  },
  rowContainer: {
    flexDirection: 'row',
    // flex: 1,
    // backgroundColor: "black"
  },
  box: {
    backgroundColor: "white",
    width: 50,
    height: 100,
  },
  mInput: {
    height: 40,
    marginVertical: 5,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  }
});
