import { Capacitor } from "@capacitor/core";
import { StatusBar, Style } from "@capacitor/status-bar";
export const setupStatusBar = async () => {
  if (Capacitor.getPlatform === "android") {
    try {
      await StatusBar.setBackgroundColor({ color: "red" });
      await StatusBar.setStyle({ style: Style.Dark });
      await StatusBar.setOverlaysWebView({ overlay: false });
    } catch (error) {
      console.log("Status bar setup failed :: ", error);
    }
  }
};
