const podcasts = require("../models/podcasts.json");

const express = require("express");
const app = express();

app.use(express.json());

// To list all podcasts - GET

const getAllPods = (request, response) => {
  try {
    response.status(200).json([
      {
        Podcasts: podcasts,
      },
    ]);
  } catch (err) {
    response.status(500).send({ message: "Server error." });
  }
};

// To list podcasts by topic - GET
const getPodByTopic = (request, response) => {
  try {
    const topicRequest = request.query.topic;

    const topicFilter = podcasts.filter((pods) =>
      pods.topic.includes(topicRequest)
    );

    if (topicFilter.length > 0) {
      response.status(200).send(topicFilter);
    } else {
      response.status(404).send({ message: "Topic not found." });
    }
  } catch (err) {
    response.status(500).send({ message: "Server error." });
  }
};

// To add a new podcast - CREATE

const createPod = (request, response) => {
  try {
    let newPodcast = {
      id: podcasts.length + 1,
      name: request.body.name,
      podcaster: request.body.podcaster,
      topic: request.body.topic,
      starts: request.body.stars,
    };

    podcasts.push(newPodcast);

    response.status(201).send({
      message: "New Podcast added!",
      newPodcast,
      podcasts,
    });
  } catch (err) {
    response.status(500).send({ message: "Server Error." });
  }
};

// To change the stars - PATCH

const updateStars = (request, response) => {
  try {
    const idRequest = request.params.id;
    const starsRequest = request.body.stars;

    const foundPod = podcasts.find((pod) => pod.id === parseInt(idRequest));

    foundPod.stars = starsRequest
    

    response.status(200).json([
      {
        message: "Rating update.",
        foundPod,
        podcasts,
      },
    ]);
  } catch (err) {
    response.status(404).send({ message: "Podcast not found." });
  }
};

// To delete a podcast - DELETE

const deletePod = (request, response) => {
  try {
    const idRequest = request.params.id;

    const foundIndex = podcasts.findIndex(
      (pod) => pod.id === parseInt(idRequest)
    );

    podcasts.splice(foundIndex, 1);

    response.status(200).json([
      {
        message: `Podcast ${idRequest} deleted.`,
        deletePod,
        podcasts,
      },
    ]);
  } catch (err) {
    response.status(404).send({ message: "Podcast not found." });
  }
};

module.exports = {
  getAllPods,
  getPodByTopic,
  createPod,
  updateStars,
  deletePod,
};
