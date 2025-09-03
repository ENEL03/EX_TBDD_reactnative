import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { addItem,removeItem} from './action';

const windowHeight = Dimensions.get('window').height;

const Flast = ({ item, onRemove }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 15,
        borderWidth: 1,
        width: 335,
        height: 48,
        borderRadius: 10,
        backgroundColor: '#9095A0',
        marginTop: 20,
        position: 'relative'
      }}
    >
      <Image
        source={require('../images/Frame(4).png')}
        style={{ position: 'absolute', left: 10, top: 10 }}
      />
      <Text style={{ fontSize: 16, position: 'absolute', left: 40, top: 10 }}>
        {item.name}
      </Text>
      <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Image
          source={require('../images/a.png')}
          style={{ position: 'absolute', right: -300, top: 0 }} // Cập nhật vị trí cho biểu tượng xóa
        />
      </TouchableOpacity>
    </View>
  );
};


const Page = ({ navigation, items, addItem,removeItem}) => {
  const [newItemName, setNewItemName] = useState(''); // State để lưu tên item mới

  const handleAddItem = () => {
    if (newItemName.trim() === '') {
      Alert.alert('Error', 'Please enter a valid item name.'); // Kiểm tra tên item
      return;
    }
    const newItem = { name: newItemName }; // Tạo một mục mới
    addItem(newItem); // Gọi hành động để thêm mục
    setNewItemName(''); // Reset input
  };

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      {/* head */}
      <View
        style={{
          height: 0.1 * windowHeight,
          flexDirection: 'row',
          width: 334,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../images/IconButton11.png')} />
        </TouchableOpacity>

        <Image
          source={require('../images/Rectangle.png')}
          style={{
            borderWidth: 1,
            borderRadius: '50%',
            backgroundColor: '#D9CBF6',
            marginLeft: 60,
          }}
        />
        <View style={{ flexDirection: 'column', padding: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>Hi Twinkle</Text>
          <Text style={{ fontSize: 14 }}>Have a great day ahead</Text>
        </View>
      </View>

      {/* search */}
      <View
        style={{
          borderWidth: 1,
          width: 334,
          height: 44,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginTop: 15,
        }}
      >
        <Image source={require('../images/Frame(2).png')} style={{ marginRight: 10 }} />
        <TextInput placeholder="Search" />
      </View>

      {/* Danh sách các mục */}
      <FlatList
        data={items}
        renderItem={({ item }) => <Flast item={item} onRemove={removeItem}/>}
        keyExtractor={(item, index) => index.toString()} // Cung cấp key cho mỗi item
      />

      {/* Nhập tên item mới */}
      <TextInput
        style={{
          borderWidth: 1,
          width: 334,
          height: 44,
          marginTop: 15,
          paddingLeft: 10,
          borderRadius: 5,
        }}
        placeholder="Enter new item name"
        value={newItemName}
        onChangeText={setNewItemName} // Cập nhật giá trị
      />

      <TouchableOpacity
        style={{
          width: 69,
          height: 69,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          backgroundColor: '#00BDD6',
          marginTop: 0.05 * windowHeight,
        }}
        onPress={handleAddItem} // Gọi hàm khi nhấn
      >
        <Text style={{ fontSize: 32, color: '#FFF' }}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Kết nối với Redux
const mapStateToProps = (state) => ({
  items: state.list.items, // Lấy danh sách items từ Redux
});

const mapDispatchToProps = { addItem, removeItem }; // Đảm bảo removeItem được thêm vào đây


export default connect(mapStateToProps, mapDispatchToProps)(Page);
