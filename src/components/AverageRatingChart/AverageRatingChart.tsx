import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

interface Props {
  ratingList: Array<any>;
}

const AverageRatingChart = (props: Props) => {
  const { ratingList } = props;

  const calcAvgRating = (ratingList: Array<number>) => {
    const avgRatingList = [];

    for (let i = 0; i < ratingList.length; i++) {
      let ratingsUpToThatPoint = ratingList.slice(0, i + 1);
      let averageRating =
        ratingsUpToThatPoint.reduce((a, b) => a + b, 0) /
        ratingsUpToThatPoint.length;

      avgRatingList.push(averageRating);
    }

    return avgRatingList;
  };

  const memoizedAvgRatingList = useMemo(() => {
    return calcAvgRating(ratingList);
  }, [ratingList]);

  const chartData = {
    labels: Array.from({ length: ratingList.length }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Average Customer Rating',
        data: memoizedAvgRatingList,
        fill: false,
        borderColor: '#426696',
        tension: 0.25,
      },
    ],
  };

  return <Line data={chartData} className='rating-chart' />;
};

export default AverageRatingChart;
