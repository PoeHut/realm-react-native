import {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Realm from 'realm';
import {todoContext, Todo} from '@app/config/db';
import ListItem from '@app/components/ListItem';

const TodoList = () => {
  const [title, setTitle] = useState<string>('');
  const {useRealm, useQuery} = todoContext;
  const realm = useRealm();
  const todos = useQuery(Todo);

  const createTodo = () => {
    realm.write(() => {
      realm.create('Todo', {
        _id: new Realm.BSON.ObjectId(),
        title,
        description: 'This is the time to do learning',
        completed: false,
        createdAt: new Date(),
      });
    });

    setTitle('');
  };

  const deleteTodo = (item: Todo) => {
    realm.write(() => {
      realm.delete(item);
    });
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.inputStyle}
          value={title}
          onChangeText={(value: string) => setTitle(value)}
        />

        <TouchableOpacity style={styles.buttonStyle} onPress={createTodo}>
          <Text style={styles.buttonTextStyle}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        renderItem={({item}) => <ListItem item={item} cb={deleteTodo} />}
        keyExtractor={item => item._id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    backgroundColor: '#FFF',
    marginBottom: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
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

export default TodoList;
