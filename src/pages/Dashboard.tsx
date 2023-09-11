import {
  Card,
  Grid,
  Flex,
  Text,
  Metric,
  BadgeDelta,
  DeltaType,
  AreaChart,
  Col,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@tremor/react";
import RegionsChart from "../charts/RegionsChart";
import PlatformsList from "../charts/PlatformsList";
import BestSellerChart from "../charts/BestSellerChart";

type TCategorie = {
  title: string;
  data: number;
  prevData: number;
  deltatype: DeltaType;
};

const categories: TCategorie[] = [
  {
    title: "Users",
    data: 325,
    prevData: 313,
    deltatype: "moderateDecrease",
  },
  {
    title: "Sales",
    data: 5962,
    prevData: 4903,
    deltatype: "moderateIncrease",
  },
  {
    title: "Profits",
    data: 2350,
    prevData: 1369,
    deltatype: "increase",
  },
];

const monthlyData = [
  {
    Date: "1",
    Revenue: 135,
  },
  {
    Date: "2",
    Revenue: 115,
  },
  {
    Date: "3",
    Revenue: 137,
  },
  {
    Date: "4",
    Revenue: 158,
  },
  {
    Date: "5",
    Revenue: 99,
  },
  {
    Date: "6",
    Revenue: 123,
  },
  {
    Date: "7",
    Revenue: 118,
  },
  {
    Date: "8",
    Revenue: 120,
  },
  {
    Date: "9",
    Revenue: 198,
  },
  {
    Date: "10",
    Revenue: 180,
  },
  {
    Date: "11",
    Revenue: 185,
  },
  {
    Date: "12",
    Revenue: 285,
  },
  {
    Date: "13",
    Revenue: 156,
  },
  {
    Date: "14",
    Revenue: 99,
  },
  {
    Date: "15",
    Revenue: 158,
  },
  {
    Date: "16",
    Revenue: 143,
  },
  {
    Date: "17",
    Revenue: 135,
  },
  {
    Date: "18",
    Revenue: 118,
  },
  {
    Date: "19",
    Revenue: 200,
  },
  {
    Date: "20",
    Revenue: 235,
  },
  {
    Date: "21",
    Revenue: 190,
  },
  {
    Date: "22",
    Revenue: 182,
  },
  {
    Date: "23",
    Revenue: 98,
  },
  {
    Date: "24",
    Revenue: 136,
  },
  {
    Date: "25",
    Revenue: 190,
  },
  {
    Date: "26",
    Revenue: 182,
  },
  {
    Date: "27",
    Revenue: 98,
  },
  {
    Date: "28",
    Revenue: 136,
  },
];

const weeklyData = [
  {
    Day: "Sun",
    Revenue: 115,
  },
  {
    Day: "Mon",
    Revenue: 158,
  },
  {
    Day: "Tue",
    Revenue: 120,
  },
  {
    Day: "Wed",
    Revenue: 215,
  },
  {
    Day: "Thu",
    Revenue: 126,
  },
  {
    Day: "Fri",
    Revenue: 112,
  },
  {
    Day: "Sat",
    Revenue: 140,
  },
];

const yearlyData = [
  {
    Month: "March",
    Revenue: 7540,
  },
  {
    Month: "April",
    Revenue: 5395,
  },
  {
    Month: "May",
    Revenue: 8354,
  },
  {
    Month: "June",
    Revenue: 7480,
  },
  {
    Month: "July",
    Revenue: 5349,
  },
  {
    Month: "Aug",
    Revenue: 5540,
  },
  {
    Month: "Sept",
    Revenue: 4507,
  },
  {
    Month: "Oct",
    Revenue: 6908,
  },
  {
    Month: "Nov",
    Revenue: 7530,
  },
  {
    Month: "Dec",
    Revenue: 7001,
  },
  {
    Month: "Jan",
    Revenue: 6560,
  },
  {
    Month: "Feb",
    Revenue: 8039,
  },
];

function Dashboard() {
  function calcPercent(cur: number, prev: number): number {
    return Math.floor(-((prev - cur) / prev) * 100);
  }

  return (
    <Grid
      numItemsLg={3}
      numItemsMd={2}
      numItemsSm={1}
      className=" pt-5 pb-20 gap-5 h-full overflow-auto scrollbar-none"
    >
      {categories.map((item) => {
        return (
          <Card key={item.title}>
            <Text>{item.title}</Text>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="truncate space-x-3"
            >
              <Metric>
                {item.title !== "Users" && "$"}
                {item.data}
              </Metric>
              <Text className="truncate">
                from {item.title !== "Users" && "$"}
                {item.prevData}
              </Text>
            </Flex>
            <Flex justifyContent="start" className="space-x-2 mt-4">
              <BadgeDelta deltaType={item.deltatype}>
                {calcPercent(item.data, item.prevData)}%
              </BadgeDelta>
              <Flex justifyContent="start" className="space-x-1 truncate">
                <Text className="truncate">to previous month</Text>
              </Flex>
            </Flex>
          </Card>
        );
      })}
      <RevenueChart />
      <PlatformsList/>
      <BestSellerChart/>
      <RegionsChart/>
    </Grid>
  );
}

export default Dashboard;

function RevenueChart() {
  return (
    <Col numColSpanLg={2} numColSpanMd={2} numColSpanSm={1}>
      <Card>
        <TabGroup>
          <TabList variant="solid">
            <Tab>Week</Tab>
            <Tab>Month</Tab>
            <Tab>Year</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <AreaChart
                colors={["purple", "violet"]}
                data={weeklyData}
                index="Day"
                categories={["Revenue"]}
                yAxisWidth={40}
                curveType="monotone"
              />
            </TabPanel>
            <TabPanel>
              <AreaChart
                colors={["purple", "violet"]}
                data={monthlyData}
                index="Date"
                categories={["Revenue"]}
                yAxisWidth={40}
                startEndOnly={true}
                curveType="monotone"
              />
            </TabPanel>
            <TabPanel>
              <AreaChart
                colors={["purple", "violet"]}
                data={yearlyData}
                index="Month"
                categories={["Revenue"]}
                yAxisWidth={40}
                curveType="monotone"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </Col>
  );
}
