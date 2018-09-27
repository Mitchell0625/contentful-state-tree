const axios = require('axios');

module.exports = {
  getAssets: (req, res) => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${
          process.env.SPACE_ID
        }/environments/${process.env.ENVIRONMENT_ID}/assets?access_token=${
          process.env.ACCESS_TOKEN
        }`
      )
      .then(resp => {
        const { items } = resp.data;
        res.status(200).json(getMapped(items));
      })
      .catch(err => console.log(err));
  },
  getEntries: (req, res) => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${
          process.env.SPACE_ID
        }/environments/${process.env.ENVIRONMENT_ID}/entries?access_token=${
          process.env.ACCESS_TOKEN
        }`
      )
      .then(resp => {
        const { items } = resp.data;
        res.status(200).json(getMapped(items));
      });
  }
};

const getMapped = arr => {
  const mapped = arr.map(e => {
    return e.fields;
  });
  return mapped;
};
