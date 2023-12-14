import "./style.scss";

import {
  Badge,
  Box,
  Button,
  ClickAwayListener,
  Divider,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useTranslation } from "react-i18next";
import icons from "../../../utils/icons";

const NotiPopUp = () => {
  const { t } = useTranslation();
  const anchorRefNoti = React.useRef(null);
  const [openNoti, setOpenNoti] = useState(false);

  const handleToggleNoti = () => {
    setOpenNoti((prevOpen) => !prevOpen);
  };

  const handleCloseNoti = () => {
    setOpenNoti(false);
  };

  return (
    <Badge
      color="error"
      badgeContent=""
      variant="dot"
      overlap="circular"
      sx={{ cursor: "pointer" }}
      ref={anchorRefNoti}
      onClick={handleToggleNoti}
    >
      <NotificationsOutlinedIcon />

      <Popper open={openNoti} anchorEl={anchorRefNoti.current} id="popup-noti">
        <ClickAwayListener onClickAway={handleCloseNoti}>
          <Paper
            sx={{
              padding: "12px",
              borderRadius: "8px",
              boxShadow: "none !important",
            }}
          >
            <MenuList
              autoFocusItem={openNoti}
              sx={{ width: "350px" }}
              id="menu-list-grow"
            >
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent={"space-between"}
                p={2}
              >
                <Typography variant="label1">
                  {t("notification.notification")}
                </Typography>
                <Box
                  sx={{
                    padding: "4px 12px",
                    borderRadius: "50px",
                    bgcolor: "var(--blue-60)",
                  }}
                >
                  <Typography variant="caption3" color={"var(--blue-600)"}>
                    3 {t("new")}
                  </Typography>
                </Box>
              </Stack>

              <Divider sx={{ mb: "10px" }} />

              <MenuItem onClick={handleCloseNoti}>
                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <Stack direction="row" spacing={1} alignItems={"center"}>
                    <img
                      src={icons.usa}
                      alt=""
                      width={32}
                      height={32}
                      style={{ borderRadius: "4px" }}
                    />
                    <Box>
                      <Typography variant="label2">Tên thiết bị</Typography>
                      <Typography
                        variant="body3"
                        color={"var(--text-secondary)"}
                      >
                        Tên lỗi
                      </Typography>
                    </Box>
                  </Stack>
                  <Box width={"70px"}>
                    <Typography variant="body3" color={"var(--text-secondary)"}>
                      Hôm qua
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
              <Box p={2}>
                <Link to="/notification">
                  <Button fullWidth variant="outlined">
                    {t("view-all")}
                  </Button>
                </Link>
              </Box>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Badge>
  );
};
export default NotiPopUp;
