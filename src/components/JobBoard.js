// Job Stories
// Fetches a list of job posting IDs.

// URL: https://hacker-news.firebaseio.com/v0/jobstories.json
// HTTP Method: GET
// Content Type: json
// Sample response:

// [35908337, 35904973, 35900922, 35893439, 35890114, 35880345, ...]
// Job Details
// Fetches job posting details given its ID.

// URL: https://hacker-news.firebaseio.com/v0/item/{id}.json
// HTTP Method: GET
// Content Type: json
// Sample response for https://hacker-news.firebaseio.com/v0/item/35908337.json:

// {
//   "by": "jamilbk",
//   "id": 35908337,
//   "score": 1,
//   "time": 1683838872,
//   "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
//   "type": "job",
//   "url": "https://www.ycombinator.com/companies/firezone/jobs"
// }
import React from "react";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

function JobBoard() {
  const [serverResponse, setServerResponse] = useState([]);
  const [currentJobs, setCurrentJobs] = useState([]);
  const [jobDetailIndex, setJobDetailIndex] = useState(0);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get(
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    );
    setServerResponse(response.data);
  }, []);

  const fetchJobDetails = useCallback(async () => {
    console.log("clicked");
    const jobArray = [];
    const urls = serverResponse.splice(jobDetailIndex, 6).map((x) => {
      return `https://hacker-news.firebaseio.com/v0/item/${x}.json`;
    });
    const requests = urls.map((url) => axios.get(url));
    axios.all(requests).then((responses) => {
      responses.forEach((resp) => {
        let msg = {
          server: resp.headers.server,
          status: resp.status,
          fields: Object.keys(resp.data).toString(),
        };
        console.info(resp);
        // jobArray.push(resp.data);
        // setCurrentJobs(...currentJobs, resp.data);
        console.table(msg);
      });
    });
    setJobDetailIndex(jobDetailIndex + 6);
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const checkState = () => {
    console.log(serverResponse);
    console.log(serverResponse.splice(jobDetailIndex, 6));
    console.log(currentJobs);
  };

  return (
    <div>
      <button onClick={checkState}>click</button>
      <button onClick={fetchJobDetails}>get jobs</button>
    </div>
  );
}

export default JobBoard;
