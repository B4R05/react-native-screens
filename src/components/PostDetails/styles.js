import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    paddingTop: 22
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 30,
    marginVertical: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  body: {
    textAlign: 'center'
  },
  author: {
    fontStyle: 'italic',
    fontSize: 20,
    marginVertical: 20
  },
  comments: {
    fontSize: 24,
    textAlign: 'center'
  },
  comment: {
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'whitesmoke'
  },
  loading: {
    marginVertical: 45,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default styles;
