import React from "react";


class ReactTest extends React.Component<ReactTest.Props, ReactTest.State> {

}


namespace ReactTest {

  export type Props = Readonly<{
    className?: string;
  }>;

  export type State = Readonly<{
    sample: number;
  }>;

}


export default ReactTest;
