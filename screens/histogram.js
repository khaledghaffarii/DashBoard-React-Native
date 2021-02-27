import React from "react";
import { StyleSheet, View } from "react-native";
//import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import {
  VictoryPie,
  VictoryTooltip,
  VictoryLabel,
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
} from "../Victory.web.js";
const data = [

  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
  
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});




        {
          /* {data_sample.map((value) => {
        return (

            <StackedBarChart
              style={{ height: 100, width: "20%", marginLeft: "5%" }}
              keys={value.keys}
              colors={value.color}
              data={value.data}
              showGrid={false}
              horizontal={false}
            />

        );
      })} */
        }
        {
          /* <StackedBarChart
        // style={graphStyle}
        data={dataIFR}
        width={screenWidth}
        height={250}
        chartConfig={chartConfig}
      /> */
        }

        // const dataIFR = {
        //   labels: ["Test1", "Test2"],
        //   legend: ["planned ", "current "],
        //   data: [[dateIfrPl], [dateIfrAct]],
        //   barColors: [["#F00"], ["#F00"]],
        // };
        // const data = [
        //   { quarter: 1, earnings: 0 },
        //   { quarter: 1, earnings: 0 },
        //    { quarter: 1, earnings: 0 },
        //   { quarter: 3, earnings: dateIfrPl },
        //   { quarter: 3.4, earnings: dateIfrAct },
        // ];

        {
          /* <VictoryAxis
              dependentAxis
              labels  ="Document Register"
              style={{  
                axisLabel: {
                  padding:35,
                }
              }}
              // tickFormat specifies how ticks should be displayed
              // tickFormat={(x) => `$${x / 1000}k`}
            /> */
        }