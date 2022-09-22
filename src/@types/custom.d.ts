declare module "*.mp4" {
  const src: string;
  export default src;
}

declare namespace CSS {
  interface PropertyDefinition {
    name: string;
    syntax?: string;
    inherits: boolean;
    initialValue?: string;
  }
  function registerProperty(propertyDefinition: PropertyDefinition): undefined;
}
