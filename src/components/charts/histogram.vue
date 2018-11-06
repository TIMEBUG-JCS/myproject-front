<template>
  <!--div id="vehicleStat"></div-->
  <div v-bind:id=id v-bind:data=data></div>

</template>

<script>
  export default {
    name: "histogram",
    data() {
      return {
        myGraph: null,
      }
    },
//      props:{
//        mydata:{
//          type:[Array]
//        }
//      },
    watch: {
      data: {
        handler(newValue, oldValue) {
          this.drawGraph(this.id, newValue);
        },
        deep: true
      }
    },

    props: ["id", "data"],

    mounted: function () {
      this.drawGraph(this.id, this.data);
    },


    methods: {
      drawGraph(id, data) {
        console.log("drawGraph");
        let _this = this;
        this.myGraph = this.$echarts.init(document.getElementById(id));
        this.myGraph.setOption(data);
        window.addEventListener("resize", function () {
          _this.myGraph.resize();
//            this.myGraph.resize();
        });
      },

      drawVehicleType() {
        console.log("drawVehicleType");

        var xdata = [];
        this.mydata.forEach(
          function (item) {
            xdata.push(item.roadwayName);
          }
        )

        var myChart = require('echarts');
        var vehicleStat = myChart.init(document.getElementById('vehicleStat'));

        var option12 = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['直接访问', '邮件营销', '联盟广告']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
//                data : ['周一','周二','周三','周四','周五','周六','周日']
              data: xdata

            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              data: [320, 332, 301, 334, 390]
            },
            {
              name: '邮件营销',
              type: 'bar',
              data: [120, 132, 101, 134, 90]
            },
            {
              name: '联盟广告',
              type: 'bar',
              data: [220, 182, 191, 234, 290]
            }
          ]
        };

        vehicleStat.setOption(option1);

      },

      beforeDestroy() {
        if (this.myGraph)
          this.myGraph.clear();
      }
    }
  }
</script>

<style scoped>

</style>

