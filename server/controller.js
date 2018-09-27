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
        const mapped = items.map(e => {
          return e.fields;
        });
        res.status(200).json(mapped);
      })
      .catch(err => console.log(err));
  }
};
