'use client';

import { useState } from 'react';

type Tweet = {
  content: string;
  username: string;
  url: string;
};

export default function Home() {
  const [hashtag, setHashtag] = useState('');
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTweets = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/yaps?hashtag=${hashtag}`);
      const data = await res.json();
      setTweets(data.tweets);
    } catch (err) {
      alert('Failed to fetch tweets');
    }
    setLoading(false);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Twitter Hashtag Dashboard</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter hashtag (e.g. ai)"
          className="border p-2 flex-grow"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
        />
        <button
          onClick={fetchTweets}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>
      <ul className="space-y-4">
        {tweets.map((tweet, idx) => (
          <li key={idx} className="border p-3 rounded">
            <p>{tweet.content}</p>
            <small className="block text-gray-500">@{tweet.username}</small>
            <a href={tweet.url} className="text-blue-500 text-sm" target="_blank" rel="noopener noreferrer">
              View on Twitter
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
