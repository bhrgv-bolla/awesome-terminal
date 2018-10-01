import * as React from 'react';

import styles from './styles';

export interface XTermProps {
  text?: string;
}

export default class XTerm extends React.Component<XTermProps, void> {

  render() {

    const { text } = this.props;

    return (
      <div>
        
      </div>
  );
  }
}
