db.trips.aggregate(
  [
    {
      $group: {
        _id: { $dayOfWeek: "$startTime" },
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
        diaDaSemana: "$_id",
        total: "$totalTrip",
      },
    },
  ],
);
