import { defineNuxtModule, addComponent, createResolver } from "@nuxt/kit";
import { name, version } from "../package.json"; // TODO: Copy this approach to the real project!

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "oziocbNuxtModule",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url);

    // From the runtime directory
    addComponent({
      name: "TestComponent", // name of the component to be used in vue templates
      filePath: resolver.resolve("runtime/components/TestComponent.vue"),
    });
  },
});
