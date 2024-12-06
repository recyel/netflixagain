'use server'

import { z } from 'zod'

const phoneSchema = z.object({
  countryCode: z.string().min(1, "Country code is required"),
  phoneNumber: z.string().regex(/^\d{10}$/, {
    message: "Phone number must be 10 digits",
  })
})

export async function sendToTelegram(prevState: any, formData: FormData) {
  const validatedFields = phoneSchema.safeParse({
    countryCode: formData.get('countryCode'),
    phoneNumber: formData.get('phoneNumber')
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message }
  }

  const { countryCode, phoneNumber } = validatedFields.data
  const fullPhoneNumber = `${countryCode}${phoneNumber}`
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error('Telegram bot token or chat ID is missing')
    return { error: 'Configuration error' }
  }

  const message = `New phone number: ${fullPhoneNumber}`
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram')
    }

    return { success: true, message: 'Phone number submitted successfully!' }
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return { error: 'Failed to send message' }
  }
}
