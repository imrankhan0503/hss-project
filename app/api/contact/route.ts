import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  
  try {
    const { name, email, mobileNumber, locality, message } = await req.json();
    
    await resend.emails.send({
      from: "HSS Website <onboarding@resend.dev>",
      to: 'michellechicsarmiento@yahoo.com',
      subject: "Nytt meddelande från hemsidan",
      replyTo: email,
      html: `
        <h2>Nytt meddelande från kontaktformuläret</h2>

        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Telefonnummer:</strong> ${mobileNumber}</p>
        <p><strong>Ort:</strong> ${locality || 'Ej angivet'}</p>

        <hr />

        <p><strong>Meddelande:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }

}