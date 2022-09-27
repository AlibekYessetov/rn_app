import { Box } from "native-base";
import React from "react";
import HomeAppInfo from "../components/HomeAppInfo";
import HomeHeader from "../components/HomeHeader";
import HomeSearch from "../components/HomeSearch";
import HomeScroll from "../components/HomeScroll";
import HomeProduct from "../components/HomeProduct";
import { connect } from "react-redux";
import { addItemTC } from "../redux/CartReducer";

function HomeScreen(props) {
  debugger;
  return (
    <Box flex={1} backgroundColor={"#fff"}>
      <HomeHeader navigator={props.navigation.openDrawer} text="Home" />
      <HomeAppInfo />
      <HomeSearch />
      <HomeScroll model={props.model} />
      <HomeProduct
        model={props.model}
        furnituries={props.furnituries}
        addItemTC={props.addItemTC}
      />
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    model: state.model,
    furnituries: state.furnituries,
  };
};

export default connect(mapStateToProps, { addItemTC })(HomeScreen);
