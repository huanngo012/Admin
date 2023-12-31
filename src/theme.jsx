import { createTheme } from "@mui/material/styles";

const cssVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const sizeButton = {
  small: "6px 12px",
  medium: "8px 16px",
  large: "12px 24px",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: cssVar("--primary"),
    },
    secondary: {
      main: cssVar("--white"),
    },
    red: {
      main: cssVar("--alert"),
    },
    green: {
      main: cssVar("--success"),
    },
    tertiary: {
      main: cssVar("--grey-primary-60"),
    },
    background: {
      default: cssVar("--bg"),
    },
    text: {
      primary: "#1E2020",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "BeVietNamPro",
        variantMapping: {
          label1: "p",
          label2: "p",
          label3: "p",
          body3: "p",
          button1: "p",
          button2: "p",
          caption1: "p",
          caption2: "p",
          caption3: "p",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: "medium",
      },
      styleOverrides: {
        sizeLarge: {
          padding: sizeButton.large,
          fontSize: "16px",
        },
        sizeMedium: {
          padding: sizeButton.medium,
          fontSize: "16px",
        },
        sizeSmall: {
          padding: sizeButton.small,
          fontSize: "14px",
        },

        root: ({ ownerState }) => ({
          borderRadius: 6,
          textTransform: "none",
          fontWeight: 500,

          "&.Mui-disabled": {
            borderColor: "var(--grey-neutral-80)",
            background: "var(--grey-neutral-80)",
            color: "var(--text-secondary)",
          },
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              color: "var(--white) ",
              backgroundColor: "var(--primary)",
              "&:hover": {
                backgroundColor: "var(--blue-600)",
              },
              "&:active": {
                backgroundColor: "var(--blue-400)",
              },
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "red" && {
              color: "var(--alert) ",
              backgroundColor: "var(--red-80)",
              "&:hover": {
                backgroundColor: "var(--red-200)",
              },
              "&:active": {
                backgroundColor: "var(--red-400)",
              },
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "green" && {
              color: "var(--success) ",
              backgroundColor: "var(--green-80)",
              "&:hover": {
                backgroundColor: "var(--green-200)",
              },
              "&:active": {
                backgroundColor: "var(--green-400)",
              },
            }),

          ...(ownerState.variant === "contained" &&
            ownerState.color === "secondary" && {
              color: "var(--primary) ",
              backgroundColor: "var(--white)",
              "&:hover": {
                backgroundColor: "var(--grey-primary-60)",
              },
              "&:active": {
                backgroundColor: "var(--blue-60)",
              },
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "tertiary" && {
              color: "var(--text-primary) ",
              backgroundColor: "var(--grey-primary-60)",
              "&:hover": {
                backgroundColor: "var(--grey-primary-80)",
              },
              "&:active": {
                color: "var(--primary) ",
                backgroundColor: "var(--grey-primary-60)",
              },
            }),

          ...(ownerState.variant === "outlined" &&
            ownerState.color === "primary" && {
              color: "var(--primary)",
              backgroundColor: "var(--white)",
              borderWidth: 1,
              borderColor: "var(--primary)",
              "&:hover": {
                backgroundColor: "var(--primary)",
                borderColor: "var(--primary)",
                color: "var(--white)",
              },
              "&:active": {
                backgroundColor: "var(--blue-400)",
                borderColor: "var(--blue-400)",
                color: "var(--white)",
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "secondary" && {
              color: "var(--primary)",
              backgroundColor: "var(--white)",
              borderWidth: 1,
              borderColor: "var(--border-color)",
              "&:hover": {
                color: "var(--primary)",
                backgroundColor: "var(--white)",
                borderColor: "var(--primary)",
              },
              "&:active": {
                color: "var(--primary)",
                backgroundColor: "var(--blue-60)",
                borderColor: "var(--blue-100)",
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "tertiary" && {
              color: "var(--text-primary)",
              backgroundColor: "var(--white)",
              borderWidth: 1,
              borderColor: "var(--white)",
              "&:hover": {
                backgroundColor: "var(--grey-primary-60)",
                borderWidth: 1,

                borderColor: "var(--white)",
              },
              "&:active": {
                color: "var(--primary)",
                backgroundColor: "var(--white)",
                borderWidth: 1,
                borderColor: "var(--white)",
              },
            }),

          ...(ownerState.variant === "text" &&
            ownerState.color === "primary" && {
              color: "var(--text-primary)",
              // backgroundColor: "transparent",
              "&:hover": {
                color: "var(--primary)",
                // backgroundColor: "transparent",
                textDecoration: "none",
              },
              "&:active": {
                color: "var(--primary)",
                // backgroundColor: "transparent",
                textDecoration: "none",
              },
            }),
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          color: "var(--grey-neutral-80)",
          "&.Mui-disabled": {
            color: "var(--grey-neutral-200)",
          },
          "&.Mui-checked, &.MuiCheckbox-indeterminate": {
            color: "var(--primary)",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        InputLabelProps: {
          shrink: false,
        },
      },

      styleOverrides: {
        root: ({ ownerState }) => ({
          "& .MuiFormHelperText-root": {
            marginLeft: 0,
            marginTop: "6px",
            "&.Mui-error": {
              color: "var(--alert)",
            },
          },
          "& .MuiInputLabel-root": {
            position: "static",
            color: "var(--text-primary) ",
            transform: "none",
            fontWeight: "600",
            fontSize: "16px",
            marginBottom: "8px",
            "&.Mui-error": {
              color: "var(--alert)",
            },
            "&.Mui-focused": {
              color: "var(--text-primary) ",
            },
          },
          "& .MuiInputAdornment-root": {
            marginRight: "12px",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "6px",
            backgroundColor: "var(--white)",

            "& input": {
              "&::placeholder": {
                color: "var(--text-tertiary)",
              },
              overflow: "hidden",
              fontSize: 16,
              padding: "8px 16px",
              height: "24px",
            },
            "& fieldset": {
              border: "1px solid",
              borderColor: "var(--border-color)",
            },
            //hover
            "&:hover fieldset": {
              borderColor: "var(--text-tertiary)",
            },
            //focus
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primary)",
              borderWidth: "1px",
            },

            "&.Mui-error fieldset": {
              borderColor: "var(--alert) ",
            },
            "&.Mui-disabled fieldset": {
              backgroundColor: "var(--grey-neutral-80) ",
              borderColor: "var(--grey-neutral-100)",
            },
          },
        }),
      },
    },
    // MuiInputLabel: {
    //   defaultProps: {
    //     shrink: true,
    //   },
    // },
    MuiTab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: "none",
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: 0,
        }),
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: ({ owerState }) => ({
          "&.MuiSnackbar-anchorOriginTopRight": {
            left: "auto",
          },
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          border: "1px solid",
          borderRadius: "8px",

          "&.MuiAlert-root": {
            width: "450px",
            backgroundColor: "var(--grey-primary-800)",
            padding: "24px",
            "& .MuiAlert-icon": {
              padding: "0 16px 0 0",
              margin: 0,
            },
            "& .MuiAlert-action": {
              color: "var(--white)",
            },
            "& .MuiAlert-message": {
              padding: 0,
              color: "var(--white)",
              "& .MuiAlertTitle-root": {
                marginBottom: "8px",
              },
            },
          },
          // '&.MuiAlert-filledSuccess': {
          //   backgroundColor: 'var(--green-60)',
          //   borderColor: 'var(--success)',
          // },
        }),
      },
    },

    //dataGrid
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: cssVar("--white"),
          border: "none",
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },

          "& .MuiDataGrid-row": {
            "&.Mui-selected": {
              // backgroundColor: "yellow",
            },
            "&.Mui-selected:hover": {
              // backgroundColor: "red",
            },
          },
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: "100px",
          "& .MuiPaper-root": {
            marginTop: "5px",
            padding: "12px",
          },
          "& .MuiList-root": {
            padding: "0px",
          },
          "& .MuiButtonBase-root": {
            borderRadius: "8px",
            padding: "0 12px",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["BeVietNamPro"].join(","),
    button1: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "24px",
    },
    button2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "20px",
    },
    h1: {
      fontSize: 56,
      lineHeight: "72px",
      fontWeight: 700,
    },
    h2: {
      fontSize: 40,
      lineHeight: "52px",
      fontWeight: 700,
    },
    h3: {
      fontSize: 36,
      lineHeight: "44px",
      fontWeight: 700,
    },
    h4: {
      fontSize: 32,
      lineHeight: "40px",
      fontWeight: 700,
    },
    h5: {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 600,
    },
    h6: {
      fontSize: 20,
      lineHeight: "24px",
      fontWeight: 600,
    },

    label1: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 600,
    },
    label2: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 600,
    },
    label3: {
      fontSize: 12,
      lineHeight: "18px",
      fontWeight: 600,
    },
    body1: {
      fontSize: 18,
      lineHeight: "28px",
      fontWeight: 400,
    },
    body2: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 400,
    },
    body3: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 400,
    },
    caption1: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 400,
    },
    caption2: {
      fontSize: 12,
      lineHeight: "18px",
      fontWeight: 400,
    },
    caption3: {
      fontSize: 10,
      lineHeight: "16px",
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 700,
      desktop: 1200,
      oversize: 1600,
    },
  },
});
