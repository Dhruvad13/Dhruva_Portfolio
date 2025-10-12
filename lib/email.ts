import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_qrt1vla';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_i8eivcl';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'MaQCTgcn7BjjL_-2c';

type EmailParams = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const sendEmail = async (params: EmailParams): Promise<{ success: boolean; message: string }> => {
  try {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS environment variables are not properly configured');
      return {
        success: false,
        message: 'Email service is not properly configured. Please try again later.'
      };
    }

    const templateParams = {
      from_name: params.name,
      from_email: params.email,
      to_name: 'Dhruva',
      subject: params.subject,
      message: params.message,
      reply_to: params.email,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send your message. Please try again later or contact me directly at dhruvad13@gmail.com.'
    };
  }
};
