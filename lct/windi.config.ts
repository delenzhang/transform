// import { defineConfig } from 'windicss/helpers';
import plugin from "windicss/plugin";
import lineClamp from "windicss/plugin/line-clamp";

console.log(lineClamp, "<<<<<");

function getBoldClass() {
  return {
    "font-weight": "400",
    "-webkit-font-smoothing": "antialiased",
    "-webkit-text-stroke-width": "0.4px",

    "@media all and (width: 320px), all and (width: 375px), all and (width: 390px), all and (width: 393px), all and (width: 414px), all and (width: 428px), all and (width: 430px)": {
      "font-weight": "500",
      "-webkit-text-stroke-width": "0"
    }
  };
}

export const getWindiConfig = () => ({
  prefix: "w-",
  // 预植入一些样式在工程中
  safelist: ["w-h-[46rpx]", "w-text-green", "w-h-[60rpx]", "w-bg-border"],
  // extract: {
  //   include: IS_H5
  //     ? ['./src/**/*.{vue,js,ts,jsx,tsx,wxml}', './docs/*.mdx', `${componentsDir}/**/*.{vue,js,ts,jsx,tsx,wxml}`]
  //     : ['./src/**/*.{vue,js,ts,jsx,tsx,wxml}', './docs/*.mdx'],
  // },
  preflight: false,
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: false,
    // hippy原因禁止使用gap
    gap: false,
    // hippy原因禁止使用grid
    gridTemplateColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    gridAutoFlow: false
  },
  theme: {
    colors: {
      // 黑色， 黑色文字
      black: "#000",
      // 白色背景，重要白色提示文字
      white: "#fff",
      blue: {
        // 蓝色提示背景
        100: "#EDF5FF",
        // 主题颜色
        DEFAULT: "#2470EB"
      },
      orange: "#FA6525",
      red: {
        200: "#FCD9D7",
        100: "#FCEFEE",
        DEFAULT: "#ED5454"
      },
      green: {
        200: "#D7F7DF",
        100: "#E9F7EC",
        DEFAULT: "#43A047"
      },
      link: "#526896",

      /**
       * 其他特殊颜色
       */
      // 灰色背景颜色, 也是分隔条颜色
      gray: "rgba(0,0,0,0.05)",
      // 分割线
      border: "rgba(0,0,0,0.1)",
      // 表格背景
      frame: "rgba(0,0,0,0.03)",
      // 蒙板背景
      mask: "rgba(0,0,0,0.7)",

      // icon 颜色
      icon: {
        // 灰色icon
        grey: "#3D3D3D",
        // 蓝色icon
        blue: "#4F96FF"
      },
      // 字体颜色
      /**
       * 黑色文字
       */
      // 一般文字
      black1: "rgba(0,0,0,0.65)",
      // 弱化文字
      black2: "rgba(0,0,0,0.4)",
      // 禁用文字
      black3: "rgba(0,0,0,0.2)",

      /**
       * 白色字体
       */
      // 一般文字
      white1: "rgba(255,255,255,0.8)",
      // 弱化文字
      white2: "rgba(255,255,255,0.4)",
      // 禁用文字
      white3: "rgba(255,255,255,0.3)"
    },
    /**
     * 阴影
     */
    boxShadow: {
      // 一般方框阴影
      DEFAULT: "0 5rpx 6rpx 0 rgba(0,0,0,0.05)",
      // 浮层阴影
      layer:
        "0 3rpx 14rpx 2rpx rgba(0,0,0,0.05), 0 8rpx 10rpx 1rpx rgba(0,0,0,0.06), 0 5rpx 5rpx -2rpx rgba(0,0,0,0.1)"
    },

    fontSize: {
      // 极小文字 小标签
      "22r": ["22rpx", "33rpx"],
      // 辅助文字
      "24r": ["24rpx", "36rpx"],
      // 普通文字 描述性文字
      "26r": ["26rpx", "39rpx"],
      // 普通标题 列表标题
      "28r": ["28rpx", "42rpx"],
      // 小标题/重要文字 卡片标题-小
      "32r": ["32rpx", "48rpx"],
      // 大标题/重要文字 卡片标题-大
      "36r": ["36rpx", "54rpx"],
      // 大标题/重要文字 页面标题-大
      "40r": ["40rpx", "56rpx"],
      // 特殊数字
      "44r": ["44rpx", "unset"],
      // 突出页面标题
      "48r": ["48rpx", "64rpx"],
      // 特殊数字
      "56r": ["56rpx", "unset"],
      // 特殊数字
      "64r": ["64rpx", "unset"],
      // 特殊数字
      "72r": ["72rpx", "unset"]
    },
    spacing: {
      "0r": "0rpx",
      "2r": "2rpx",
      "4r": "4rpx",
      "8r": "8rpx",
      "12r": "12rpx",
      "16r": "16rpx",
      "20r": "20rpx",
      "24r": "24rpx",
      "28r": "28rpx",
      "32r": "32rpx",
      "40r": "40rpx",
      "48r": "48rpx",
      "56r": "56rpx",
      "60r": "60rpx",
      "64r": "64rpx",
      "72r": "72rpx",
      "80r": "80rpx",
      "88r": "88rpx",
      "96r": "96rpx",
      "112r": "112rpx",
      "128r": "128rpx",
      "160r": "160rpx",
      "192r": "192rpx",
      "224r": "224rpx",
      "256r": "256rpx",
      "288r": "288rpx",
      "320r": "320rpx",
      "352r": "352rpx",
      "384r": "384rpx",
      "416r": "416rpx",
      "448r": "448rpx",
      "480r": "480rpx",
      "512r": "512rpx",
      "576r": "576rpx",
      "640r": "640rpx",
      "768r": "768rpx"
    },
    borderRadius: {
      sm: "4rpx",
      DEFAULT: "8rpx",
      md: "8rpx",
      lg: "12rpx",
      full: "9999rpx"
    }
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    lineClamp, // require('windicss/plugin/line-clamp'),
    plugin(({ theme, addUtilities }) => {
      const obj = {
        // 上下左右居中
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        // 上下居中，左右两边对齐
        ".flex-center-between": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        },
        // 上下居中
        ".flex-y-center": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        // 左右居中
        ".flex-x-center": {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        },
        ".flex-col-center": {
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
          "justify-content": "center"
        },
        ".click-active": {
          "&:active": {
            "-webkit-filter": "brightness(90%)"
          }
        }
      };
      addUtilities(obj);

      // 添加字体加粗，以及数字字体
      // 详细参考：https://fbit-help.pages.woa.com/storybook-static/?path=/docs/font%E5%AD%97%E4%BD%93--page
      const family = ["LCTNUMB", ""];
      const size = [
        "22r",
        "24r",
        "26r",
        "28r",
        "32r",
        "36r",
        "40r",
        "44r",
        "48r",
        "56r",
        "64r",
        "72r"
      ];
      const bold = ["500", ""];
      for (const b of bold) {
        for (const f of family) {
          for (const s of size) {
            // 如果既不是加粗，也不是数字跳过
            if (!b && !f) {
              continue;
            }

            if (f) {
              if (b) {
                addUtilities({
                  [`.text-${s}-bold-num`]: {
                    fontSize: theme(`fontSize.${s}.0`) as string,
                    lineHeight: "1",
                    fontFamily: f as string,
                    // fontWeight: b,
                    // '-webkit-text-stroke-width': '0',
                    ...getBoldClass()
                  }
                });
              } else {
                addUtilities({
                  [`.text-${s}-num`]: {
                    fontSize: theme(`fontSize.${s}.0`) as string,
                    lineHeight: "1",
                    fontFamily: f as string
                  }
                });
              }
            } else {
              if (b) {
                addUtilities({
                  [`.text-${s}-bold`]: {
                    fontSize: theme(`fontSize.${s}.0`) as string,
                    lineHeight: theme(`fontSize.${s}.1`) as string,
                    // fontWeight: b,
                    // '-webkit-text-stroke-width': '0',
                    ...getBoldClass()
                  }
                });
              }
            }
          }
        }
      }
    })
  ]
});
