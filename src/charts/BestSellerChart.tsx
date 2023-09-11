import { Card, Title, BarChart, Subtitle, Col } from "@tremor/react";

const chartdata = [
  {
    name: "Smartphone",
    "Counts of sell": 1234,
  },
  {
    name: "Headphones",
    "Counts of sell": 987,
  },
  {
    name: "Smart TV",
    "Counts of sell": 567,
  },
  {
    name: "Tracker",
    "Counts of sell": 345,
  },
  {
    name: "Watch",
    "Counts of sell": 678,
  },
];

const dataFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString();
};

export default function BestSellerChart() {
  return (
    <Col numColSpanLg={2}>
      <Card>
        <Title>Best Sellers</Title>
        <Subtitle>
          The IUCN Red List has assessed only a small share of the total known
          species in the world.
        </Subtitle>
        <BarChart
          className="mt-6"
          data={chartdata}
          index="name"
          categories={["Counts of sell"]}
          colors={["blue"]}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
        />
      </Card>
    </Col>
  );
}
