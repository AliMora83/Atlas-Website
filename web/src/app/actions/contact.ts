'use server';

import { z } from 'zod';
import { sendEmail } from '@/lib/email';

const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    organization: z.string().optional(),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormState = {
    success: boolean;
    message?: string;
    errors?: {
        [K in keyof z.infer<typeof contactSchema>]?: string[];
    };
};

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        organization: formData.get('organization'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    };

    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
            message: 'Please correct the errors below.',
        };
    }

    const { name, email, organization, subject, message } = result.data;

    try {
        // Email content
        const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

        await sendEmail(process.env.SMTP_USER || 'info@atlasconference.africa', `Contact Form: ${subject}`, htmlContent);

        return {
            success: true,
            message: 'Message sent successfully! We will get back to you soon.',
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            success: false,
            message: 'Failed to send message. Please try again later.',
        };
    }
}
