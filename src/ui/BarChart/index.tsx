import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface DataItem {
  name: string;
  value: number;
}

interface BarChartProps {
  data: DataItem[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const options: echarts.EChartsOption = {
      xAxis: {
        type: 'category',
        data: data.map((item: DataItem) => item.name)
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: data.map((item: DataItem) => item.value),
        type: 'bar'
      }]
    };

    chart.setOption(options);

    return () => {
      chart.dispose(); // Dispose chart instance on unmounting
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default BarChart;
