import { format as dateFormat } from "https://deno.land/std@0.71.0/datetime/mod.ts";
import { getInteger } from "../random/number.ts";

export default function* (
  {
    startDate = "2023-01-14T08:00:00",
    step = { min: 0, max: (18-8) * 3600 * 1000 }, // Number of milliseconds between 8am and 6pm
    format = "toISOString",
  } = {},
) {
  const transforms = [
    {
      type: "shift",
      value: (new Date(startDate)).getTimezoneOffset() * 60 * 1000 // shift timezone to UTC+0
    },
    {
      type: "custom",
      fn: (date) => {
        const hours = date.getUTCHours();
        if (hours < 8) {
          date.setUTCHours(8, 0, 0, 0); // set to 8am if before 8am
        } else if (hours >= 18) {
          date.setUTCHours(8, 0, 0, 0); // set to 8am of next day if after 6pm
          date.setDate(date.getUTCDate() + 1);
        }
        return date;
      }
    },
    {
      type: "shift",
      value: -((new Date(startDate)).getTimezoneOffset() * 60 * 1000) // shift timezone back to original
    }
  ];

  const date = new Date(startDate);

  while (true) {
    date.setTime(date.getTime() + getInteger(step));
    transforms.forEach(({ type, value, fn }) => {
      if (type === "shift") {
        date.setTime(date.getTime() + value);
      } else if (type === "custom") {
        date.setTime(fn(date).getTime());
      }
    });
    yield format === "toISOString"
      ? date.toISOString()
      : dateFormat(date, format);
  }
}
