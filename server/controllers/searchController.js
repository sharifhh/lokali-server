const db = require("../models");

const compare = (a, b) => {
  now = new Date();
  date1 = new Date(a);
  date2 = new Date(b);

  if (date1 < date2) {
    return -1;
  }
  if (date1 > date2) {
    return 1;
  }
  return 0;
};

module.exports = {
  findAll: async function (req, res) {
    const { query } = req.query;
    console.log("Hello World");
    let results = [];
    try {
      if (query) {
        const events = await db.Event.find({
          $or: [
            { heading: { $regex: query, $options: "i" } },
            { subheading: { $regex: query, $options: "i" } },
          ],
        });

        const initiatives = await db.Initiative.find({
          $or: [
            { heading: { $regex: query, $options: "i" } },
            { subheading: { $regex: query, $options: "i" } },
          ],
        });

        const helprequests = await db.HelpRequest.find({
          $or: [
            { heading: { $regex: query, $options: "i" } },
            { subheading: { $regex: query, $options: "i" } },
          ],
        });

        const giftofferings = await db.GiftOffering.find({
          $or: [
            { heading: { $regex: query, $options: "i" } },
            { subheading: { $regex: query, $options: "i" } },
          ],
        });

        results.push(
          ...events,
          ...initiatives,
          ...helprequests,
          ...giftofferings
        );
        results = results.sort(compare);
        res.json(results);
      }
    } catch (error) {
      res.status(422).json(error);
    }

    // (query || query === ""
    //   ? await db.Event.find({
    //       $or: [
    //         { heading: { $regex: query, $options: "i" } },
    //         { subheading: { $regex: query, $options: "i" } },
    //       ],
    //     })
    //   : await db.Event.find(req.query)
    // )
    //   .then((events) => res.json(events))
    //   .catch((err) => res.status(422).json(err));
  },
};
