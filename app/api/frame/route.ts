import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)

  const nextId = idAsNumber + 1

  if(idAsNumber === 4){
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 4</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmd4qSev2KBvxAVfUFwpZa21UzBEqWPyQC4aucyijZWf3L/5.png" />
    
    <meta property="fc:frame:button:1" content="get on my Telegram." />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
  } else {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmd4qSev2KBvxAVfUFwpZa21UzBEqWPyQC4aucyijZWf3L/${id}.png" />
    <meta property="fc:frame:button:1" content="Next Page" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
