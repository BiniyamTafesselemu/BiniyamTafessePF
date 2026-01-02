import { type NextRequest, NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

interface ContactFormData {
  name: string
  email: string
  telegram?: string
  phone?: string
  message: string
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateTelegram(username: string): boolean {
  if (!username) return true // Optional field
  const telegramRegex = /^@?[a-zA-Z0-9_]{5,32}$/
  return telegramRegex.test(username)
}

function validatePhone(phone: string): boolean {
  if (!phone) return true // Optional field
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
  return phoneRegex.test(phone)
}

async function sendTelegramMessage(formData: ContactFormData): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("[v0] Telegram configuration missing")
    return false
  }

  const message = `
📧 <b>New Contact Form Submission</b>

<b>Name:</b> ${formData.name}
<b>Email:</b> ${formData.email}
${formData.telegram ? `<b>Telegram:</b> ${formData.telegram}` : ""}
${formData.phone ? `<b>Phone:</b> ${formData.phone}` : ""}

<b>Message:</b>
${formData.message}
  `.trim()

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("[v0] Telegram API error:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("[v0] Error sending Telegram message:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name?.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    if (!body.email?.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    if (!body.message?.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Validate optional fields
    if (body.telegram && !validateTelegram(body.telegram)) {
      return NextResponse.json({ error: "Invalid Telegram username format" }, { status: 400 })
    }

    if (body.phone && !validatePhone(body.phone)) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 })
    }

    const telegramSent = await sendTelegramMessage(body)

    if (!telegramSent) {
      console.error("[v0] Failed to send via Telegram")
      return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
    }

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
