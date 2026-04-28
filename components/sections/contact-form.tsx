'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { services } from '@/lib/site-config';

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email.'),
  phone: z.string().min(7, 'Please enter a valid phone.'),
  service: z.string().min(1, 'Please choose a service.'),
  message: z.string().min(10, 'Tell us a bit more (10+ characters).'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: Wire this to your backend or service like Resend, Formspree, or Sanity.
    // For now, we simulate a network call so you can deploy and demo immediately.
    await new Promise((r) => setTimeout(r, 800));
    console.log('Lead submitted:', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-400/40 bg-teal-400/5 p-10 text-center">
        <CheckCircle2 size={40} className="mx-auto text-teal-400" />
        <h3 className="mt-5 font-display text-2xl font-bold text-ink-50">
          Message received.
        </h3>
        <p className="mt-3 text-ink-300 max-w-md mx-auto">
          We&apos;ll be in touch within 24 hours to schedule your free
          discovery call. Looking forward to talking.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-6"
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Jane Doe"
            {...register('name')}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-xs text-ember-400">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register('email')}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-ember-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 555-5555"
            {...register('phone')}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-xs text-ember-400">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">I&apos;m Interested In</Label>
          <select
            id="service"
            {...register('service')}
            aria-invalid={!!errors.service}
            className="flex h-12 w-full rounded-lg border border-ink-700 bg-ink-900/60 px-4 py-2 text-sm text-ink-50 focus-visible:outline-none focus-visible:border-teal-400 focus-visible:ring-1 focus-visible:ring-teal-400 transition-colors"
            defaultValue=""
          >
            <option value="" disabled>
              Choose a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Not sure / something else</option>
          </select>
          {errors.service && (
            <p className="text-xs text-ember-400">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell Us About Your Goals</Label>
        <Textarea
          id="message"
          placeholder="What are you trying to accomplish? Any injuries or limitations we should know about?"
          rows={5}
          {...register('message')}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-xs text-ember-400">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </Button>

      <p className="text-xs text-ink-400 leading-relaxed">
        By submitting this form, you&apos;re agreeing to a friendly conversation —
        not a contract. We&apos;ll get back to you within 24 hours.
      </p>
    </form>
  );
}
