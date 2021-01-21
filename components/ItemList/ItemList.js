import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Heading from '../Heading/Heading';
import Item from './Item';


const DATA = [
  {
    id: '1',
    content: 'first',
    date: 'Aug 1 1995',
    user: {
      name: 'Peter Griffin',
      email: 'peter@example.com'
    }
  },
  {
    id: '2',
    content: 'second',
    date: 'Aug 1 1996',
    user: {
      name: 'Lois Griffin',
      email: 'lois@example.com'
    }
  },
  {
    id: '3',
    content: 'third',
    date: 'Aug 1 1997',
    user: {
      name: 'Brian Griffin',
      email: 'brian@example.com'
    }
  },
  {
    id: '4',
    content: 'fourth',
    date: 'Aug 1 1998',
    user: {
      name: 'Chris Griffin',
      email: 'chris@example.com'
    }
  },
  {
    id: '5',
    content: 'fifth',
    date: 'Aug 1 1999',
    user: {
      name: 'Meg Griffin',
      email: 'meg@example.com'
    }
  },
  {
    id: '6',
    content: 'sixth',
    date: 'Aug 1 2000',
    user: {
      name: 'Stewie Griffin',
      email: 'stewie@example.com'
    }
  }
];

export default function ItemList() {
  const renderItem = ({ item }) => (
    <Item
      content={item.content}
      userName={item.user.name}
      date={item.date}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Heading text={'This is the item list. Scroll to view items'} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});
