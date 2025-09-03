import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import vs_blue from '../images/vs_blue.png';
import vs_red from '../images/vs_red.png';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ChooseColor = ({ route, navigation }) => {
  const { color: initialColor, price: initialPrice, supplier: initialSupplier } = route.params;

  const [color, setColor] = useState(initialColor);
  const [price, setPrice] = useState(initialPrice);
  const [supplier, setSupplier] = useState(initialSupplier);
  const [imageSource, setImageSource] = useState(vs_blue);

  const handleColorChange = (selectedColor) => {
    let newPrice = initialPrice;
    let newSupplier = initialSupplier;
    let newImageSource = vs_blue;

    switch (selectedColor) {
      case 'blue':
        newPrice = '1.790.000 đ';
        newSupplier = 'Tiki Trangding';
        newImageSource = vs_blue;
        break;
      case 'red':
        newPrice = '1.900.000 đ';
        newSupplier = 'Tiki Trangding - Red Variant';
        newImageSource = vs_red;
        break;
      case 'black':
        newPrice = '1.850.000 đ';
        newSupplier = 'Tiki Trangding - Black Variant';
        break;
      case 'navy':
        newPrice = '1.950.000 đ';
        newSupplier = 'Tiki Trangding - Navy Variant';
        break;
      default:
        break;
    }

    setColor(selectedColor);
    setPrice(newPrice);
    setSupplier(newSupplier);
    setImageSource(newImageSource);
  };

  const handleFinish = () => {
    navigation.navigate('Home', {
      selectedColor: color,
      selectedPrice: price,
      selectedSupplier: supplier,
      selectedImage: imageSource
    });
  };

  return (
    <SafeAreaView>
      {/* Product */}
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <Image 
          source={imageSource}
          style={{ height: 130, width: 100, marginRight: 10 }} 
        />
        <View>
          <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 10 }}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text style={{ fontSize: 15, marginTop: 10 }}>
            Màu: {color}
          </Text>
          <Text style={{ fontSize: 15, marginTop: 10 }}>
            Cung cấp bởi: {supplier}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
            {price}
          </Text>
        </View>
      </View>
      
      {/* Choose color */}
      <View style={{ height: 550, justifyContent: 'center', alignItems: 'center', backgroundColor: '#C4C4C4' }}>
        <Text style={{ position: 'absolute', left: 10, top: 30, fontSize: 15 }}>
          Chọn một màu bên dưới:
        </Text>
        <TouchableOpacity 
          style={{ marginTop: 10, height: 100, borderWidth: 1, width: 100, backgroundColor: '#C5F1FB' }}
          onPress={() => handleColorChange('blue')}
        />
        <TouchableOpacity 
          style={{ marginTop: 10, height: 100, borderWidth: 1, width: 100, backgroundColor: '#F30D0D' }}
          onPress={() => handleColorChange('red')}
        />
        <TouchableOpacity 
          style={{ marginTop: 10, height: 100, borderWidth: 1, width: 100, backgroundColor: '#000000' }}
          onPress={() => handleColorChange('black')}
        />
        <TouchableOpacity 
          style={{ marginTop: 10, height: 100, borderWidth: 1, width: 100, backgroundColor: '#234896' }}
          onPress={() => handleColorChange('navy')}
        />
        {/* success */}
        <TouchableOpacity 
          style={{ borderRadius: 10, borderWidth: 1, width: 300, height: 50, justifyContent: 'center', backgroundColor: '#1952E294', marginTop: 10 }}
          onPress={handleFinish}
        >
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChooseColor;