import {
  Comment,
  InsertChartOutlined,
  PeopleAlt,
  QrCode,
  RefreshOutlined,
  StarPurple500,
  VisibilityOutlined,
  WindowOutlined,
} from "@mui/icons-material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { DashboardDrawer } from "../../components";
import { colors } from "../../utils/common";
import { Link } from "react-router-dom";

function createData(
  id: number,
  title: string,
  category: string,
  rating: number
) {
  return { id, title, category, rating };
}

const rows = [
  createData(321, "I Dream in Another Language", "Movie", 9.2),
  createData(54, "Benched", "Movie", 9.1),
  createData(670, "Whitney", "TV Show", 9),
  createData(241, "Blindspotting 2", "TV Show", 8.9),
  createData(22, "Blindspotting", "TV Show", 8.9),
];

export const Dashboard: React.FC = () => {
  return (
    <DashboardDrawer
      title="Dashboard"
      rightSide={
        <Link
          to="/add-item"
          className={`text-md md:text-lg px-4 py-1 rounded-full ${
            colors.bg().blue500
          } `}
        >
          Add item
        </Link>
      }
    >
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-8">
        <div className={`p-5 ${colors.bg().lightBlue} rounded-xl`}>
          <div className="mb-2">Unique views this month</div>
          <div className="flex justify-between items-center w-full text-3xl">
            5,678 <VisibilityOutlined className="w-8 h-8 fill-blue-500" />
          </div>
        </div>
        <div className={`p-5 ${colors.bg().lightBlue} rounded-xl`}>
          <div className="mb-2">Items added this month</div>
          <div className="flex justify-between items-center w-full text-3xl">
            172 <QrCode className="w-8 h-8 fill-blue-500" />
          </div>
        </div>
        <div className={`p-5 ${colors.bg().lightBlue} rounded-xl`}>
          <div className="mb-2">New comments</div>
          <div className="flex justify-between items-center w-full text-3xl">
            2,573 <Comment className="w-8 h-8 fill-blue-500" />
          </div>
        </div>
        <div className={`p-5 ${colors.bg().lightBlue} rounded-xl`}>
          <div className="mb-2">New reviews</div>
          <div className="flex justify-between items-center w-full text-3xl">
            1,021 <StarPurple500 className="w-8 h-8 fill-blue-500" />
          </div>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 xl:grid-cols-2 mt-8">
        <TableContainer
          component={Paper}
          className={`${colors.bg().lightBlue} rounded-xl`}
        >
          <div className="flex justify-between p-5">
            <div className="flex gap-2 items-center text-white text-lg">
              <InsertChartOutlined className="w-6 h-6 fill-blue-500" />
              Top items
            </div>
            <div className="flex gap-2 items-center text-white text-lg">
              <RefreshOutlined className="w-6 h-6" />
              <a
                href=""
                className={`px-3 py-1 text-sm hover:${
                  colors.text.blue600
                } rounded-2xl ${
                  colors.bg().darkBlue
                } transition-colors duration-500 `}
              >
                View all
              </a>
            </div>
          </div>
          <Table sx={{ minWidth: 500 }} aria-label="table">
            <TableHead className="relative">
              <div
                className={`absolute top-0 w-full border-b ${
                  colors.divider().lightBlue
                }`}
              />
              <TableRow sx={{ th: { border: 0 } }}>
                <TableCell className="text-white" align="left">
                  ID
                </TableCell>
                <TableCell className="text-white" align="left">
                  TITLE
                </TableCell>
                <TableCell className="text-white" align="left">
                  CATEGORY
                </TableCell>
                <TableCell className="text-white" align="left">
                  RATING
                </TableCell>
              </TableRow>
              <div
                style={{ width: `calc(100% - 32px)`, margin: "0 15px" }}
                className={`absolute bottom-0 border-b ${
                  colors.divider().lightBlue
                }`}
              />
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} sx={{ "td, th": { border: 0 } }}>
                  <TableCell className="text-white" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.title}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.category}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.rating}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer
          component={Paper}
          className={`${colors.bg().lightBlue} rounded-xl`}
        >
          <div className="flex justify-between p-5">
            <div className="flex gap-2 items-center text-white text-lg">
              <WindowOutlined className="w-6 h-6 fill-blue-500" />
              Latest items
            </div>
            <div className="flex gap-2 items-center text-white text-lg">
              <RefreshOutlined className="w-6 h-6" />
              <a
                href=""
                className={`px-3 py-1 text-sm hover:${
                  colors.text.blue600
                } rounded-2xl ${
                  colors.bg().darkBlue
                } transition-colors duration-500 `}
              >
                View all
              </a>
            </div>
          </div>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead className="relative">
              <div
                className={`absolute top-0 w-full border-b ${
                  colors.divider().lightBlue
                }`}
              />
              <TableRow sx={{ th: { border: 0 } }}>
                <TableCell className="text-white" align="left">
                  ID
                </TableCell>
                <TableCell className="text-white" align="left">
                  TITLE
                </TableCell>
                <TableCell className="text-white" align="left">
                  CATEGORY
                </TableCell>
                <TableCell className="text-white" align="left">
                  RATING
                </TableCell>
              </TableRow>
              <div
                style={{ width: `calc(100% - 32px)`, margin: "0 15px" }}
                className={`absolute bottom-0 border-b ${
                  colors.divider().lightBlue
                }`}
              />
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} sx={{ "td, th": { border: 0 } }}>
                  <TableCell className="text-white" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.title}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.category}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.rating}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer
          component={Paper}
          className={`${colors.bg().lightBlue} rounded-xl`}
        >
          <div className="flex justify-between p-5">
            <div className="flex gap-2 items-center text-white text-lg">
              <PeopleAlt className="w-6 h-6 fill-blue-500" />
              Latest users
            </div>
            <div className="flex gap-2 items-center text-white text-lg">
              <RefreshOutlined className="w-6 h-6" />
              <a
                href=""
                className={`px-3 py-1 text-sm hover:${
                  colors.text.blue600
                } rounded-2xl ${
                  colors.bg().darkBlue
                } transition-colors duration-500 `}
              >
                View all
              </a>
            </div>
          </div>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead className="relative">
              <div
                className={`absolute top-0 w-full border-b ${
                  colors.divider().lightBlue
                }`}
              />
              <TableRow sx={{ th: { border: 0 } }}>
                <TableCell className="text-white" align="left">
                  ID
                </TableCell>
                <TableCell className="text-white" align="left">
                  TITLE
                </TableCell>
                <TableCell className="text-white" align="left">
                  CATEGORY
                </TableCell>
                <TableCell className="text-white" align="left">
                  RATING
                </TableCell>
              </TableRow>
              <div
                style={{ width: `calc(100% - 32px)`, margin: "0 15px" }}
                className={`absolute bottom-0 border-b ${
                  colors.divider().lightBlue
                }`}
              />
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} sx={{ "td, th": { border: 0 } }}>
                  <TableCell className="text-white" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.title}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.category}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.rating}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer
          component={Paper}
          className={`${colors.bg().lightBlue} rounded-xl`}
        >
          <div className="flex justify-between p-5">
            <div className="flex gap-2 items-center text-white text-lg">
              <StarPurple500 className="w-6 h-6 fill-blue-500" />
              Latest reviews
            </div>
            <div className="flex gap-2 items-center text-white text-lg">
              <RefreshOutlined className="w-6 h-6" />
              <a
                href=""
                className={`px-3 py-1 text-sm hover:${
                  colors.text.blue600
                } rounded-2xl ${
                  colors.bg().darkBlue
                } transition-colors duration-500 `}
              >
                View all
              </a>
            </div>
          </div>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead className="relative">
              <div
                className={`absolute top-0 w-full border-b ${
                  colors.divider().lightBlue
                }`}
              />
              <TableRow sx={{ th: { border: 0 } }}>
                <TableCell className="text-white" align="left">
                  ID
                </TableCell>
                <TableCell className="text-white" align="left">
                  TITLE
                </TableCell>
                <TableCell className="text-white" align="left">
                  CATEGORY
                </TableCell>
                <TableCell className="text-white" align="left">
                  RATING
                </TableCell>
              </TableRow>
              <div
                style={{ width: `calc(100% - 32px)`, margin: "0 15px" }}
                className={`absolute bottom-0 border-b ${
                  colors.divider().lightBlue
                }`}
              />
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} sx={{ "td, th": { border: 0 } }}>
                  <TableCell className="text-white" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.title}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.category}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {row.rating}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </DashboardDrawer>
  );
};
