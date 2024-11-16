import { theme } from "@src/components/theme";
import "styled-components";

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
