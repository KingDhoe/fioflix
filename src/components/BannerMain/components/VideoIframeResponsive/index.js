import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';

function YouTubeIframeResponsive({ youtubeID }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"

        src="https://www.youtube.com/embed/CWe4aUiNWLA" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      />
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
