import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      country,
      message,
      services,
      budget
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    console.log('--- NEW CONTACT INQUIRY RECEIVED ---');
    console.log({
      name: `${firstName} ${lastName}`,
      email,
      company: company || 'N/A',
      phone: phone || 'N/A',
      country: country || 'N/A',
      services: services && services.length > 0 ? services : ['Not specified'],
      budget: budget || 'Not specified',
      message: message || 'N/A',
      submittedAt: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your request has been received. Our team will get back to you shortly.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}
