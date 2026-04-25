import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, businessStage, message } = await request.json()

    await resend.emails.send({
      from: 'Coach Britt Website <onboarding@resend.dev>',
      to: 'thecoachbrittmethod@gmail.com',
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d1f1a;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Business Stage:</strong> ${businessStage}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #faf8f4; padding: 16px; border-radius: 8px;">${message}</p>
          <hr style="border-color: #d8b89f;" />
          <p style="color: #999; font-size: 12px;">Sent from coachbritt.xyz contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
