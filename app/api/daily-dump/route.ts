import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, overwhelmLevel, userId } = body;

    // Validate required fields
    if (!text || !userId) {
      return NextResponse.json(
        { error: 'Text and userId are required' },
        { status: 400 }
      );
    }

    // Create the entry in the database
    const entry = await prisma.entry.create({
      data: {
        text,
        type: 'daily-dump',
        userId,
        // Store overwhelm level in the text field for now
        // In a real app, you might want to add this as a separate field
        text: `${text}\n\nOverwhelm Level: ${overwhelmLevel || 3}`,
      },
    });

    return NextResponse.json({ 
      success: true, 
      entry: {
        id: entry.id,
        createdAt: entry.createdAt
      }
    });

  } catch (error) {
    console.error('Error saving daily dump entry:', error);
    return NextResponse.json(
      { error: 'Failed to save entry' },
      { status: 500 }
    );
  }
}