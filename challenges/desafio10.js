const hora1 = "$startTime";
const hora2 = "$stopTime";

db.trips.aggregate(
  [
    {
      $group: {
        _id: "$usertype",
        duracaoMedia: {
          $avg: {
            $divide: [{ $subtract: [hora2, hora1] }, 60 * 60 * 1000],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        tipo: "$_id",
        duracaoMedia: {
          $round: ["$duracaoMedia", 2],
        },
      },
    },
    {
      $sort: {
        tipo: -1,
      },
    },
  ],
);
