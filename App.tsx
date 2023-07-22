import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {todoContext} from '@app/config/db';
import TodoList from '@app/components/TodoList';

const {RealmProvider} = todoContext;

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <View>
        <View>
          <Text style={styles.sectionTitle}>Realm Tutorial</Text>
        </View>

        <TodoList />
      </View>
    </SafeAreaView>
  );
}

const AppWrapper = () => (
  <RealmProvider>
    <App />
  </RealmProvider>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    backgroundColor: '#F51663',
    paddingVertical: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default AppWrapper;
