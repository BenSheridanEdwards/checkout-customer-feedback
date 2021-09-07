import axios from "axios";

export default function addFeedbackItem(data: {}): Promise<any> {
  return axios.request({
    method: "post",
    url: `http://localhost:3002/feedback`,
    data
  });
}
