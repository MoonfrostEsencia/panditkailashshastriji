"use client"
import React, { useEffect } from 'react';

const InstagramEmbed: React.FC = () => {
  useEffect(() => {
    // Ensure the Instagram script is loaded after the component is mounted
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="space-y-4">
      {/* Embed 1 */}
      <div className="instagram-embed-container">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/C8BrOuKyMiV/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{ width: 'calc(100% - 2px)' }}
        >
          <div className="p-4">
            <a
              href="https://www.instagram.com/reel/C8BrOuKyMiV/?utm_source=ig_embed&amp;utm_campaign=loading"
              className="block bg-white text-center no-underline w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Content here */}
            </a>
          </div>
        </blockquote>
      </div>

      {/* Embed 2 */}
      <div className="instagram-embed-container">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/C8PYYsivp0s/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{ width: 'calc(100% - 2px)' }}
        >
          <div className="p-4">
            <a
              href="https://www.instagram.com/reel/C8PYYsivp0s/?utm_source=ig_embed&amp;utm_campaign=loading"
              className="block bg-white text-center no-underline w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Content here */}
            </a>
          </div>
        </blockquote>
      </div>

      {/* Embed 3 */}
    
        
    
    </div>
  );
};

export default InstagramEmbed;
