import { defineConfig } from "cypress";
import watermark from "./cypress/watermark";

export default defineConfig({
  e2e: {
   baseUrl: "http://localhost:8000",
    watchForFileChanges: false,
    experimentalSessionAndOrigin: true,
    viewportWidth: 1600,
    viewportHeight: 960,
    setupNodeEvents(on, config) {
     on("after:screenshot", (details) => {
        
      });
      
    },
  },
});
