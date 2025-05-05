import { Scraper } from '@the-convocation/twitter-scraper';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const hashtag = req.nextUrl.searchParams.get('hashtag');
  if (!hashtag) {
    return NextResponse.json({ error: 'Missing hashtag' }, { status: 400 });
  }

  let cookies = [];
  try {
    const base64 = process.env.TWITTER_COOKIES || '';
    const decoded = Buffer.from(base64, 'base64').toString('utf-8');
    cookies = JSON.parse(decoded);
  } catch (err) {
    console.error('Failed to parse cookies:', err);
    return NextResponse.json({ error: 'Invalid cookies format' }, { status: 500 });
  }

  const scraper = new Scraper({
    auth: {
      username: process.env.TWITTER_USERNAME!,
      password: process.env.TWITTER_PASSWORD!,
      email: process.env.TWITTER_EMAIL!,
      cookies,
    },
  });

  try {
    const tweetsIterator = await scraper.searchTweets(`#${hashtag}`, 10);
    const tweets = [];

    for await (const tweet of tweetsIterator) {
      tweets.push({
        content: tweet.text,
        username: tweet.username,
        url: `https://x.com/${tweet.username}/status/${tweet.id}`,
      });
    }

    return NextResponse.json({ tweets });
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return NextResponse.json({ error: 'Failed to fetch tweets' }, { status: 500 });
  }
}
