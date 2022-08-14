export enum PageSelection {
  HomePage = 1,
  AboutMePage,
  ResumePage,
  ContactMePage
};

export interface BaseInfo { }

export interface SideMenuProps extends BaseInfo {
  clickHandler: (pageSelection: PageSelection) => void
};

export interface ContentPageProps extends BaseInfo {
  pageSelection: PageSelection
};

export interface FooterBarProps extends BaseInfo { };
