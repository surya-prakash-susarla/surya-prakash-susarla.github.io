import { ContentPageProps, PageSelection } from "./interfaces";

export const ContentPage: React.FC<ContentPageProps> = (props: ContentPageProps) => {
  switch (props.pageSelection) {
    case PageSelection.AboutMePage:
      return null;
    case PageSelection.ResumePage:
      return null;
    case PageSelection.ContactMePage:
      return null;
    default:
      return null;
  }
}

