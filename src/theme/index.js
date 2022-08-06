/**
 * ANTD CONFIGURATION
 *
 * Full configuration options:
 * https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
 *
 * **/
const ANTD_COLORS = {
  PRIMARY: "#3249D7;", // primary color for all components
  LINK: "#2B69A9", // link color
  SUCCESS: "#52c41a", // success state color
  WARNING: "#faad14", // warning state color
  ERROR: "#f5222d", // error state color
  GEEK_BLUE: "geekblue", //special blue AntD tags
  HEADING: "#242E39", // heading text color
  TEXT_PRIMARY: "#242E39", // major text color
  TEXT_SECONDARY: "#637487", // secondary text color
  DISABLED: "rgba(0, 0, 0, .25)", // disable state color
  BORDER: "#d9d9d9", // major border color
}

const GREY_COLORS = {
  GREY_S_70: "#161C22",
  GREY_S_50: "#242E39",
  GREY_S_30: "#324050",
  GREY_S_20: "#3A4A5B",
  GREY_S_10: "#415367",
  GREY_100: "#485C72",
  GREY_T_15: "#637487",
  GREY_T_25: "#768595",
  GREY_T_35: "#8895A3",
  GREY_T_50: "#A3ADB8",
  GREY_T_65: "#BFC6CE",
  GREY_T_75: "#D1D6DC",
  GREY_T_85: "#E4E7EA",
  GREY_T_92: "#F0F2F4",
  GREY_T_96: "#F8F8F9",
  GREY_T_98: "#FBFCFC",
}

const GREEN_COLOR = {
  GREEN_PRIMARY: "green",
  GREEN_DARK: "#4cb187",
  GREEN_LIGHT: "#3d8e6c",

  GREEN_T_15: "#47BA78",
  GREEN_T_50: "#93D7AF",
  GREEN_T_96: "#F6FCF9",
  GREEN_T_75: "#C9EBD7",
  GREEN_T_85: "#DFF3E7",
  GREEN_S_56: "#5DC288",
  GREEN_100: "#27AB66",
}

const BLUE_COLORS = {
  BLUE_S_10: "#185998",
  BLUE_S_37: "#275F98",
  BLUE_T_15: "#3D7AB6",
  BLUE_T_25: "#548ABF",
  BLUE_T_50: "#8DB1D4",
  BLUE_T_65: "#AFC8E1",
  BLUE_T_69: "#8DB1D4",
  BLUE_T_92: "#EDF3F8",
  BLUE_S_30: "#134576",
  BLUE_100: "#1B63A9",
  BLUE_T_96: "#F6F9FC",
  BLUE_T_75: "#C6D8E9",
  BLUE_T_85: "#DDE8F2",
}

const RED_COLORS = {
  RED_T_15: "#E04C4C",
  RED_T_25: "#E46161",
  RED_T_96: "#FEF7F7",
  RED_T_75: "#F7CCDA",
  RED_T_85: "#FADFDF",
  RED_S_49: "#C52828",
  RED_S_50: "#6E1616",
  RED_S_100: "#DC3232",
  RED_100: "#DD326C",
}

const ORANGE_COLORS = {
  YELLOW_OR_80: "#FFA642",
  YELLOW_T_85: "#FFFBE6",
  YELLOW_OR_50: "#FFBE4B",
  YELLOW_T_96: "#FFFEF8",
  YELLOW_T_35: "#FFEF94",
  YELLOW_T_75: "#FFF9D6",
  YELLOW_T_92: "#FFFDF2",
  YELLOW_T_50: "#FFF3AC",
}

const PURPLE_COLORS = {
  PRIMARY_PURPLE: '#FBFAFF',
  PURPLE_T_80: '#E3DEFF',
  PURPLE_T_96: "#FAF8FC",
  PURPLE_T_75: "#E0D1EF",
  PURPLE_100: "#8246BE",
  PURPLE_T_85: "#ECE3F5",
}

const ANTD_STYLES = {
  FONT_FAMILY: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
  'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  FONT_SIZE: "14px", // major text font size
  BORDER_RADIUS: "4px", // major border radius
  BOX_SHADOW: "0px 2px 10px rgba(99, 116, 135, 0.2)", // major shadow for layers
}

const ANTD_THEME = {
  "primary-color": ANTD_COLORS.PRIMARY,
  "link-color": ANTD_COLORS.LINK,
  "success-color": ANTD_COLORS.SUCCESS,
  "warning-color": ANTD_COLORS.WARNING,
  "error-color": ANTD_COLORS.ERROR,
  "font-size-base": ANTD_STYLES.FONT_SIZE,
  "heading-color": ANTD_COLORS.HEADING,
  "text-color": ANTD_COLORS.TEXT_PRIMARY,
  "text-color-secondary": ANTD_COLORS.TEXT_SECONDARY,
  "disabled-color": ANTD_COLORS.DISABLED,
  "border-radius-base": ANTD_STYLES.BORDER_RADIUS,
  "border-color-base": ANTD_COLORS.BORDER,
  "box-shadow-base": ANTD_STYLES.BOX_SHADOW,
  "font-family": ANTD_STYLES.FONT_FAMILY,
  "btn-default-bg": GREY_COLORS.GREY_T_85,
  "background-color-light": GREY_COLORS.GREY_T_92,
  "table-header-bg": GREY_COLORS.GREY_T_85,
  "table-header-color": GREY_COLORS.GREY_T_15,
  "table-row-hover-bg": GREY_COLORS.GREY_T_92,
  "table-selected-row-bg": GREY_COLORS.GREY_T_92,
  "table-selected-row-hover-bg": GREY_COLORS.GREY_T_92,
  "table-footer-bg": GREY_COLORS.GREY_T_96,
  "modal-header-bg": GREY_COLORS.GREY_T_85,
  "menu-item-color": GREY_COLORS.GREY_T_25,
  "menu-item-active-bg": "#EDF3F8",
  "popover-bg": GREY_COLORS.GREY_S_30,
  "popover-distance": "0px",
  "drawer-body-padding": "0px",
  "collapse-header-padding": "0px",
  "collapse-header-padding-extra": "0px",
  "collapse-content-padding": "20px",
  "label-color": GREY_COLORS.GREY_T_15,
  "slider-track-background-color": ANTD_COLORS.PRIMARY,
  "slider-handle-color": ANTD_COLORS.PRIMARY,
  "btn-disable-bg": "none",
  "menu-inline-toplevel-item-height": "50px",
  "menu-item-height": "50px",
  "menu-item-group-height": "30px",
  "menu-collapsed-width": "80px",
  "menu-item-active-border-width": "0px",
  "menu-horizontal-line-height": "50px",
  "collapse-content-bg": "#fff !important",
  "zindex-dropdown": "1000",
}

/**
 * CONFIGURE THEME HERE
 * **/
const COLORS = {
  ...ANTD_COLORS,
  ...GREY_COLORS,
  ...GREEN_COLOR,
  ...BLUE_COLORS,
  ...RED_COLORS,
  ...ORANGE_COLORS,
  ...PURPLE_COLORS,
  SS_PRIMARY: "#2B69A9",
  BACKGROUND_COLOR: GREY_COLORS.GREY_T_92,
  BORDER_COLOR: "#ccc",
}

const STYLES = {
  ...ANTD_STYLES,
  CONTAINER_PADDING: 32,
}

module.exports = {
  COLORS,
  STYLES,
  ANTD_THEME,
  ANTD_COLORS,
}
