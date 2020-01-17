import PropTypes from 'prop-types';
import React from 'react';

import ImageContent from './ImageContent';
import DownloadAttachment from './DownloadAttachment';

const ImageAttachment = ({ activity, attachment }) => (
  <div>
    <ImageContent alt={attachment.name} src={attachment.thumbnailUrl || attachment.contentUrl} />
    <DownloadAttachment activity={activity} attachment={attachment} />
  </div>
);

ImageAttachment.propTypes = {
  activity: PropTypes.shape({
    attachments: PropTypes.array.isRequired
  }).isRequired,
  attachment: PropTypes.shape({
    contentUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    thumbnailUrl: PropTypes.string
  }).isRequired
};

export default ImageAttachment;
