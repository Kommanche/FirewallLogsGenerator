import { format } from "https://deno.land/std@0.71.0/datetime/mod.ts";
import config from "./config.ts";
import LineGenerator from "./LineGenerator.ts";
import makeFormatter from "./makeFormatter.ts";

const lineGenerator = LineGenerator(config);
const formatter = makeFormatter(config);

const fileName = `output_${format(new Date(), "yyyyMMdd_HHmmss")}.csv`;

let csvOutput = "";

for (let data of lineGenerator) {
  csvOutput += formatter(data) + "\n";
}

await Deno.writeTextFile(fileName, csvOutput);

console.log(`Output written to ${fileName}`);
