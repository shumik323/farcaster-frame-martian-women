import { getFrameMetadata } from '@coinbase/onchainkit/frame'; //one step, create button start
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "get to know me."
    }
  ],
  // image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmXNWyv5kA1w27xU7EQhAcazW8ivFjouEm7B3k4K92AMaZ/0.png`,
  state: 'text example',
  postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'My greeting',
  description: 'A little backstory for the farcaster community.',
  openGraph: {
    title: 'My greeting',
    description: 'A little backstory for the farcaster community.',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmXNWyv5kA1w27xU7EQhAcazW8ivFjouEm7B3k4K92AMaZ/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>shumik.</h1>
    </>
  );
}
