import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import dayjs from "dayjs";
import Games from "../../components/Games";

const Free = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const getDates = (current) => {
    const dates = [];
    for (let i = -3; i <= 3; i++) {
      dates.push(current.add(i, 'day'));
    }
    return dates;
  };

  const dates = getDates(currentDate);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView>
        <View style={{ width: '100%', justifyContent: 'center', paddingHorizontal: 16, marginVertical: 24 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }} className="text-secondary">Aora</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
              <Pressable
                onPress={() => {
                  router.push("/(tabs)/coinsp");
                }}
              >
                <Image
                  style={{ width: 28, height: 28, marginRight: 8 }}
                  source={require("../../assets/icons/coins.png")}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  router.push("/(tabs)/premium"), console.log("clicked");
                }}
              >
                <Image
                  style={{ width: 28, height: 28 }}
                  source={require("../../assets/icons/shopping-store.png")}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', backgroundColor: '#2c2c2e', paddingHorizontal: 0, height: 124 }}>
          <Text style={{ color: '#e5e5e7', textAlign: 'center', fontSize: 18, fontWeight: '600',marginTop:12,marginBottom:12 }}>
            {currentDate.format('MMMM YYYY')}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 8, paddingHorizontal: 4 }}>
            {dates.map((date, index) => {
              const isCurrentDate = date.isSame(currentDate, 'day');
              const isSelectedDate = selectedDate && date.isSame(selectedDate, 'day');

              return (
                <Pressable
                  key={index}
                  style={{ flexDirection: 'column', alignItems: 'center' }}
                  onPress={() => setSelectedDate(date)}
                >
                  <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#e5e5e7' }}>
                    {date.format('ddd').toUpperCase()}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 32,
                      width: 32,
                      marginTop: 4,
                      borderRadius: 16,
                      marginBottom:10,
                      backgroundColor: isCurrentDate
                        ? '#FF8E01'
                        : isSelectedDate
                        ? '#575757'
                        : 'transparent'
                    }}
                  >
                    <Text style={{ fontWeight: 'bold', color: '#e5e5e7', fontSize: 18, textAlign: 'center' }}>
                      {date.date()}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
        <Games/>

       
      </ScrollView>
    </SafeAreaView>
  );
};

export default Free;
