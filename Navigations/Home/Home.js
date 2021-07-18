import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import CardComponent from "../../components/Card//Card";
import { justifyContent, style } from "styled-system";
const HomeScreen = () => {
  const [listData, setListData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getData = () => {
      setLoader(true);
      axios.get("http://mbctv.co.in/wp-json/wp/v2/posts").then((res) => {
        setListData(res.data);
        setLoader(false);
      });
    };
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {loader ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            listData &&
            listData.map((ele, index) => {
              return (
                <View key={index} style={{ marginTop: 20 }}>
                  <CardComponent
                    featured_image_urls={ele.featuredimage}
                    title={ele.title.rendered}
                    content={ele.content.rendered}
                  />
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
