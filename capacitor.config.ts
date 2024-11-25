import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.clochard.grimoar",
  appName: "Grimoar",
  webDir: "dist",
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId:
        "976308014328-c5sjeutgm9bcjk289hm1khihjkmpc6c5.apps.googleusercontent.com",
    },
  },
};

export default config;
