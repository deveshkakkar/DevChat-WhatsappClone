import { StyleSheet, Appearance } from 'react-native';
const colorScheme = Appearance.getColorScheme()
let colorUsername = ""
if (colorScheme === 'dark') {
  colorUsername = "white";
} else {
  colorUsername = "black"
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    padding: 10,
  },
  lefContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-around'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    color: colorUsername,
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    color: 'grey',
  },
});

export default styles;
