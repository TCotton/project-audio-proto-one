import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">

			<span className="video-list media">

				<span className="media-left">
					<img className="media-object" src={imageUrl} />
				</span>

				<span className="media-body">
					<span className="media-heading">
						{video.snippet.title}
					</span>
				</span>

			</span>

		</li>
	);
};

export default VideoListItem;