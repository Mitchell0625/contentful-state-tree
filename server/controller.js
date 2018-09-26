module.exports = {
  getAssets: (req, res) => {
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/${
        process.env.ENVIRONMENT_ID
      }/assets?access_token=${process.env.ACCESS_TOKEN}`
    )
      .then(resp => {
        const { items } = resp.json();
        console.log(items);
        const mapped = items.map(e => {
          return e.fields;
        });
        console.log(mapped);
        res.status(200).json(mapped);
      })
      .catch(err => console.log(err));
  }
};
