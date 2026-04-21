import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}

export async function POST(request: Request) {
  try {
    const { name, email, session_date, session_type, notes } = await request.json()

    if (!name || !email || !session_date || !session_type) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
    }

    const supabase = getSupabase()
    const { error } = await supabase
      .from('meeting_notes_requests')
      .insert([{ name, email, session_date, session_type, notes }])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
