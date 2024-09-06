import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
    cardBgColor: string;
    cardHoverBgColor: string;
    asideColor: string;
    priceUpColor: string;
    priceDownColor: string;
    borderColor: string;
  }
}
