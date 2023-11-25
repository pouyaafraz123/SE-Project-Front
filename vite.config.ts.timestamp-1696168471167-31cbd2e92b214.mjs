// vite.config.ts
import path from "path";
import { defineConfig } from "file:///G:/Projects/Robov-Front/node_modules/.pnpm/vite@4.4.5_sass@1.68.0/node_modules/vite/dist/node/index.js";
import react from "file:///G:/Projects/Robov-Front/node_modules/.pnpm/@vitejs+plugin-react-swc@3.3.2_vite@4.4.5/node_modules/@vitejs/plugin-react-swc/index.mjs";
import svgr from "file:///G:/Projects/Robov-Front/node_modules/.pnpm/@svgr+rollup@8.1.0_typescript@5.0.2/node_modules/@svgr/rollup/dist/index.js";
var __vite_injected_original_dirname = "G:\\Projects\\Robov-Front";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@public": path.resolve(__vite_injected_original_dirname, "./public"),
      "@hook": path.resolve(__vite_injected_original_dirname, "./src/hook/index.ts"),
      "@utils": path.resolve(__vite_injected_original_dirname, "./src/utils/index.ts"),
      "@constants": path.resolve(__vite_injected_original_dirname, "./src/constants/index.ts"),
      "@stores": path.resolve(__vite_injected_original_dirname, "./src/stores/index.ts"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components")
    }
  },
  server: { port: 3e3 },
  plugins: [react(), svgr()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxQcm9qZWN0c1xcXFxSb2Jvdi1Gcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRzpcXFxcUHJvamVjdHNcXFxcUm9ib3YtRnJvbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0c6L1Byb2plY3RzL1JvYm92LUZyb250L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcclxuaW1wb3J0IHN2Z3IgZnJvbSAnQHN2Z3Ivcm9sbHVwJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAnQHB1YmxpYyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYycpLFxyXG4gICAgICAnQGhvb2snOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvaG9vay9pbmRleC50cycpLFxyXG4gICAgICAnQHV0aWxzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3V0aWxzL2luZGV4LnRzJyksXHJcbiAgICAgICdAY29uc3RhbnRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbnN0YW50cy9pbmRleC50cycpLFxyXG4gICAgICAnQHN0b3Jlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zdG9yZXMvaW5kZXgudHMnKSxcclxuICAgICAgJ0Bjb21wb25lbnRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMnKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VydmVyOiB7IHBvcnQ6IDMwMDAgfSxcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwgc3ZncigpXVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZQLE9BQU8sVUFBVTtBQUM5USxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxVQUFVO0FBQUEsTUFDN0MsU0FBUyxLQUFLLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsTUFDdEQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsc0JBQXNCO0FBQUEsTUFDeEQsY0FBYyxLQUFLLFFBQVEsa0NBQVcsMEJBQTBCO0FBQUEsTUFDaEUsV0FBVyxLQUFLLFFBQVEsa0NBQVcsdUJBQXVCO0FBQUEsTUFDMUQsZUFBZSxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsSUFDM0Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRLEVBQUUsTUFBTSxJQUFLO0FBQUEsRUFDckIsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDM0IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
