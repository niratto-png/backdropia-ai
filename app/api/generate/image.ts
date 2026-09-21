import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    // ここで画像生成APIを呼ぶ（今は未実装）
    // Replicate か別のAPIを使う
    
    return NextResponse.json({ 
      imageUrl: 'https://via.placeholder.com/512x512',
      success: true 
    })
  } catch (error) {
    return NextResponse.json({ 
      error: '画像生成に失敗しました',
      success: false 
    }, { status: 500 })
  }
}
