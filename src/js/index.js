(function () {
  let dom = document.querySelector("#bar");
  let myChart = echarts.init(dom);
  let options = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    // 修改图表的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true,
    },
    xAxis: [
        {
          type: "category",
          data: [
            "Vue",
            "React",
            "TS",
            "WebPack",
            "Flutter",
            "uni-app",
            "rn"
          ],
          axisTick: {
            alignWithLabel: true
          },
          // 修改刻度标签 相关样式
          axisLabel: {
            color: "rgba(255,255,255,.6) ",
            fontSize: "12"
          },
          // 不显示x坐标轴的样式
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          // 修改刻度标签 相关样式
          axisLabel: {
            color: "rgba(255,255,255,.6) ",
            fontSize: 12
          },
          // y轴的线条改为了 2像素
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 2
            }
          },
          // y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          barWidth: "35%",
          data: [200, 300, 300, 900, 1500, 1200, 600],
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          }
        }
      ]
  };
  myChart.setOption(options)
  window.addEventListener("resize", ()=> {
    myChart.resize();
  });
})();
