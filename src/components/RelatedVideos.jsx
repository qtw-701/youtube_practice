import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = new useYoutubeApi();
  // 계속 오류남... 400 error
  // relatedToVideoId api가 서비스 종료되어서 그런걸까...
  // const {
  //   isLoading,
  //   error,
  //   data: videos,
  // } = useQuery(['related', id], () => youtube.relatedVideos(id), {
  //   staleTime: 1000 * 60 * 5,
  // });
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', id], () => youtube.search(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
