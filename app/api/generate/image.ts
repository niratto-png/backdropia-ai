import Replicate from 'replicate';
import { NextRequest, NextResponse } from 'next/server';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request: NextRequest) {
  try {
    const { prompt, style } = await request.json();

    const output = (await replicate.run(
      'stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bea92b7',
      {
        input: {
          prompt: `${style} game background: ${prompt}`,
          num_outputs: 1,
          height: 1080,
          width: 1920,
          scheduler: 'K_EULER',
          num_inference_steps: 50,
          guidance_scale: 7.5,
        },
      }
    )) as string[];

    return NextResponse.json({ imageUrl: output[0] });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}
