import { memo, ReactNode, VFC } from "react";

import { Header } from "../organisms/layout/Header";

type Props = {
  chidlren: ReactNode;
};

export const HeadeLayout: VFC<Props> = memo((props) => {
  const {children} = props;
  return (
    <>
      <Header />
      { children }
    </>
  )
});