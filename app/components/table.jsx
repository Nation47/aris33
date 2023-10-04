"use client"

import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["#", "Code", "Title", "Type","Credits","Grade","Status"];
 
const TABLE_ROWS = [
  {
    name: "1",
    job: "EB 202",
    title:"Agricultural Products Marketing II",
    date: "Core",
    credits:"12.00",
    grade:"B",
    status:"Pass"
  },
  {
    name: "2",
    job: "EB 203",
    title:"Fisheries Economics and Aquaculture",
    date: "Core",
    credits:"12.00",
    grade:"B",
    status:"Pass"
  },
  {
    name: "3",
    job: "EB 204",
    title:"Business Planning",
    date: "Core",
    credits:"12.00",
    grade:"B",
    status:"Pass"
  },
  {
    name: "4",
    job: "EC 228",
    title:"Quantitative Methods II",
    date: "Core",
    credits:"12.00",
    grade:"B+",
    status:"Pass"
  },
  {
    name: "5",
    job: "EC 229",
    title:"Econometrics II",
    date: "Core",
    credits:"12.00",
    grade:"D",
    status:"Fail"
  },
  {
    name: "6",
    job: "EC 230",
    title:"Development Economics II",
    date: "Core",
    credits:"12.00",
    grade:"B+",
    status:"Pass"
  },
];
 
export function DefaultTable() {
  return (
    <Card className="h-full w-full overflow-scroll">
        <div className="flex flex-row gap-4 px-6 py-4 text-5cqw ">
            <p className="text-center">edits: 72.00</p>
            <p className="text-center">| Total Grade Points: 216</p>
            <p className="text-center">| GPA: 3.0</p>
            <p className="text-center">| Remarks:-</p>
        </div>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className=" p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none text-green-400 "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, title,date,credits,grade,status }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {credits}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {grade}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {status}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}