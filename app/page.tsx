import { getFrameMetadata } from '@coinbase/onchainkit/frame'; //one step, create button start
import type { Metadata } from 'next';

console.log(33);

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "get to know me."
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmd4qSev2KBvxAVfUFwpZa21UzBEqWPyQC4aucyijZWf3L/0.png`,
  postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'My greeting',
  description: 'A little backstory for the farcaster community.',
  openGraph: {
    title: 'My greeting',
    description: 'A little backstory for the farcaster community.',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmd4qSev2KBvxAVfUFwpZa21UzBEqWPyQC4aucyijZWf3L/0.png`],
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
