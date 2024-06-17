/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Document from 'next/document';
import DocumentComponent, { getInitialProps, DocumentComponentProps } from 'ui/pages/_document';

class MyDocument extends Document<DocumentComponentProps> {
  render() {
    return <DocumentComponent emotionStyleTags={this.props.emotionStyleTags} />;
  }
}

MyDocument.getInitialProps = getInitialProps;

export default MyDocument;
