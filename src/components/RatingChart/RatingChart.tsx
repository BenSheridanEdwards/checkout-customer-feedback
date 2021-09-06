import React from 'react';
import { Line } from 'react-chartjs-2';
import Comment from '../../types/Comment';

interface Props {
  feedbackList: Array<Comment>;
}

const RatingChart = (props: Props) => {
  const { feedbackList } = props;

  const calcAvgRating = (feedbackList: Array<Comment>) => {
    const ratingList = feedbackList.map((feedback) => {
      return feedback.rating;
    });

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

  const chartData = {
    labels: Array.from({ length: feedbackList.length }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Avg Customer Review',
        data: calcAvgRating(feedbackList),
        fill: false,
        borderColor: '#426696',
        tension: 0.25,
      },
    ],
  };

  return <Line data={chartData} className='rating-chart' />;
};

export default RatingChart;
