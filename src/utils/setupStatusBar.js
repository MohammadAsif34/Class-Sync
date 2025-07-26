import { StatusBar, Style } from "@capacitor/status-bar";

export const setupStatusBar = async () => {
  try {
    // Show the status bar
    await StatusBar.show();

    // Set a safe background color (not transparent)
    await StatusBar.setBackgroundColor({ color: "#000000" }); // Black or theme color

    // Set light or dark content for contrast
    await StatusBar.setStyle({ style: Style.Light }); // For light text, use Style.Dark
  } catch (err) {
    console.warn("StatusBar setup failed:", err);
  }
};
