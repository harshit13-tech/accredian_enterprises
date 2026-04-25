import { NextResponse } from 'next/server'

// In-memory store (mock DB — resets on server restart)
// In production, replace with MongoDB via mongoose or Prisma
const leads = []

export async function POST(request) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, company, teamSize, interest } = body
    if (!name || !email || !company || !teamSize || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Save lead
    const newLead = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      status: 'new',
    }
    leads.push(newLead)

    console.log('New enterprise lead:', newLead)

    return NextResponse.json(
      { success: true, message: 'Lead captured successfully', id: newLead.id },
      { status: 201 }
    )
  } catch (err) {
    console.error('Lead submission error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Simple endpoint to view all leads (for demo/admin purposes)
  return NextResponse.json({ leads, total: leads.length })
}
