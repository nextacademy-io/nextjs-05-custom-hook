'use client';

import { ProfilePicture } from '@/components/profile-picture';
import { useState } from 'react';

export default function Home() {
  const [pictureIndex, setPictureIndex] = useState(1);
  const [previousPictureUrl, setPreviousPictureUrl] = useState<string | null>(null);
  const pictureUrl = `https://randomuser.me/api/portraits/women/${pictureIndex}.jpg`;

  function profilePictureClicked(profileUrl: string) {
    console.log(profileUrl);
    setPictureIndex((prevIndex) => (prevIndex + 1) % 100);
    setPreviousPictureUrl(pictureUrl);
  }

  return (
    <main className="p-24 flex flex-col gap-8">
      <h1 className="text-3xl font-bold underline">Hello, Workshop</h1>
      <div className="flex gap-4">
        {previousPictureUrl ? (
          <ProfilePicture profileUrl={previousPictureUrl} />
        ) : (
          <div
            style={{
              width: 100,
              height: 100,
            }}
          ></div>
        )}
        <ProfilePicture profileUrl={pictureUrl} onClick={profilePictureClicked} />
      </div>
    </main>
  );
}
