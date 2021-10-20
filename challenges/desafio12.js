db.trips.aggregate(
  [
    {
      $group: {
        _id: { estacao: "$startStationName", day: { $dayOfWeek: "$startTime" } },
        totalTrip: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        totalTrip: -1,
      },
    },
    {
      $limit: 1,
    },
    {
      $project: {
        _id: 0,
        nomeEstacao: "$_id.estacao",
        total: "$totalTrip",
      },
    },
  ],
);
