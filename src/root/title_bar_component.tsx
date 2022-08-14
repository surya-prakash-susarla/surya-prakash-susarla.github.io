import { BaseInfo } from "./interfaces"
import { PageHeader , Typography } from "antd";

export const TitleBar: React.FC<BaseInfo> = (props: BaseInfo) => {
  return (
    <PageHeader className={'header-text animate__animated animate__fadeInUp'} ghost={true}>
      <Typography.Title code={true} level={1} >
        Surya Prakash Susarla
      </Typography.Title>
    </PageHeader>
  )
}
