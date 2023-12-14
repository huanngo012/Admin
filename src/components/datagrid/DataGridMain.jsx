import "./style.scss";

import { Card, Stack, Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../../hooks/handleWindowDimensions";

const DataGridMain = ({
  totalRow = 99,
  pageSize = 20,
  rows,
  columns,
  page,
  setPage,
  slots,
  height = 140,
  pagination = true,
}) => {
  const { t } = useTranslation();
  const [tableheight, setTableHeight] = useState(800);
  const windowDimensions = useWindowDimensions();

  const getHeaderHeight = () => {
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    const heightHeader = computedStyle
      .getPropertyValue("--height-header")
      .trim();

    const numericHeight = parseFloat(heightHeader);

    return numericHeight;
  };

  useEffect(() => {
    if (
      windowDimensions.height != null &&
      windowDimensions.width != null &&
      windowDimensions.width > 1200
    ) {
      setTableHeight(windowDimensions.height - (getHeaderHeight() + height));
    } else if (
      windowDimensions.height != null &&
      windowDimensions.width != null &&
      windowDimensions.width <= 1200
    ) {
      height = height + 56;
      setTableHeight(windowDimensions.height - (getHeaderHeight() + height));
    }
  }, [windowDimensions]);

  const totalPage = Math.ceil(totalRow / pageSize);
  const labelRowPageper = () => {
    let to = 0,
      from = 0;
    if (page) {
      if (totalRow < 1) {
        return `${to} - ${from} ${t("of-total-label-table")} ${totalRow}`;
      }
      if (page === 1 && totalRow > 0) {
        return `${1} - ${pageSize} ${t("of-total-label-table")} ${totalRow}`;
      }
      if (totalRow / page <= pageSize) {
        to = pageSize * (page - 1) + 1;
        from = totalRow;
        return `${to} - ${from} ${t("of-total-label-table")} ${totalRow}`;
      }
      to = (page - 1) * pageSize + 1;
      from = pageSize * page;
      return `${to} - ${from} ${t("of-total-label-table")} ${totalRow}`;
    }
  };
  const handleChangePage = (e, value) => {
    setPage(value);
  };

  return (
    <Card
      elevation={0}
      className="card-data-grid-layout"
      sx={{ height: `${tableheight}px !important` }}
    >
      <Box className="scroll-table" sx={{ overflowX: "auto" }}>
        <DataGrid
          key={page}
          slots={slots}
          rowHeight={56}
          rows={rows}
          columns={columns}
          disableColumnSelector
          hideFooter
          hideFooterPagination
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: pageSize,
                page: page ? page - 1 : -1,
              },
            },
          }}
        />
      </Box>
      <Stack
        direction={"row"}
        mt={"10px"}
        alignItems={"center"}
        justifyContent={"end"}
        sx={{ display: `${pagination ? "flex" : "none"}` }}
      >
        <Typography variant="body3"> {labelRowPageper()}</Typography>
        <Pagination
          count={totalPage}
          page={page}
          onChange={handleChangePage}
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Card>
  );
};
export default DataGridMain;
