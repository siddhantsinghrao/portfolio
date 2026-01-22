import { useState, useEffect } from 'react';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_mi3mx5g';
const EMAILJS_TEMPLATE_ID = 'template_6y079dm';
const EMAILJS_PUBLIC_KEY = '_JfgJP5HCei5ujy0l';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Heading and Social */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">LET'S CONNECT</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Say hello at{' '}
              <a href="mailto:raosiddhantsingh@gmail.com" className="text-[#D4FF00] hover:underline">
                raosiddhantsingh@gmail.com
              </a>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              For more info, here's my{' '}
              <a href="#" className="text-[#D4FF00] hover:underline">
                profile
              </a>
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/siddhantsinghrao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-[#D4FF00] hover:text-black flex items-center justify-center transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-[#D4FF00] hover:text-black flex items-center justify-center transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-[#D4FF00] hover:text-black flex items-center justify-center transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href="mailto:raosiddhantsingh@gmail.com"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-[#D4FF00] hover:text-black flex items-center justify-center transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs text-gray-500 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-[#D4FF00] focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-gray-500 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-[#D4FF00] focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs text-gray-500 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-[#D4FF00] focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-gray-500 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-[#D4FF00] focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-[#D4FF00] text-black text-xs font-bold rounded-md hover:bg-[#bfe600] transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </button>

              {submitStatus === 'success' && (
                <p className="mt-2 text-sm text-green-500">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-2 text-sm text-red-500">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}