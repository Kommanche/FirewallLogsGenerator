export default {
  fieldSeparator: ",",
  lineSeparator: "\n",
  lines: { min: 9031, max: 9031 },
  fields: [
    {
      type: "datetime",
      name: "timestamp",
      config: {
        startDate: "2023-01-14",
        step: { min: 0, max: 100000 },
      },
    },
    {
      type: "ipv4",
      name: "source",
      config: {
        number: { min: 100, max: 100 },
        distribution: "uniform",
      },
    },
    {
      type: "ipv4",
      name: "target",
      config: {
        number: { min: 10, max: 20 },
        distribution: "linear",
      },
    },
    {
      type: "integer",
      name: "size",
      config: {
        number: { max: 1500 },
      },
    },
    {
      type: "element",
      name: "protocol",
      config: {
        list: ["TCP", "UDP"],
      },
    },
    // {
    //   type: "element",
    //   name: "location",
    //   config: {
    //     list: ["Manchester", "Blackpool", "Preston", "London"],
    //   },
    // },
  ],
};
