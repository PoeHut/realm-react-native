import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Todo} from '@app/config/db';
import AntIcon from 'react-native-vector-icons/AntDesign';

type itemPrps = {
  item: Todo;
  cb: (item: Todo) => void;
};

const ListItem = ({item, cb}: itemPrps) => {
  return (
    <View style={styles.listStyle}>
      <Text>{item?.title}</Text>

      <TouchableOpacity onPress={() => cb(item)}>
        <AntIcon name="closecircle" size={22} color="#F51663" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    marginBottom: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#CCC',
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 5,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#F51663',
    padding: 10,
    marginHorizontal: 12,
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default ListItem;
