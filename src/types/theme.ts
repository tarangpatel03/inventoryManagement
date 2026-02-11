export interface KnownBaseTheme {
  colors: {
    [key: string]: string;
  };
}

export interface BaseTheme extends KnownBaseTheme {
  [key: string]: any;
}
