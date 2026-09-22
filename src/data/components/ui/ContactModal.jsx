import emailjs from '@emailjs/browser';
import { CheckCircle2, Loader2, Mail, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const DESTINATION_EMAIL = 'giltechnology.2025@gmail.com';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const COUNTRY_CODES = [
  { code: '+58', label: 'Venezuela', flag: '🇻🇪' },
  { code: '+57', label: 'Colombia', flag: '🇨🇴' },
  { code: '+52', label: 'México', flag: '🇲🇽' },
  { code: '+1', label: 'Estados Unidos', flag: '🇺🇸' },
  { code: '+34', label: 'España', flag: '🇪🇸' },
  { code: '+51', label: 'Perú', flag: '🇵🇪' },
  { code: '+56', label: 'Chile', flag: '🇨🇱' },
  { code: '+54', label: 'Argentina', flag: '🇦🇷' },
  { code: '+593', label: 'Ecuador', flag: '🇪🇨' },
  { code: '+507', label: 'Panamá', flag: '🇵🇦' },
];

const INITIAL_FORM = {
  name: '',
  countryCode: '+58',
  phone: '',
  email: '',
  message: '',
};

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setForm(INITIAL_FORM);
    setStatus('idle');
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS no está configurado.');
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          phone: `${form.countryCode} ${form.phone}`,
          reply_to: form.email,
          message: form.message,
          to_email: DESTINATION_EMAIL,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus('success');
    } catch (err) {
      console.error('Error al enviar el formulario de contacto:', err);
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="absolute inset-0 bg-[#0F1E29]/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between px-6 py-5 bg-[#0F1E29]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#00CED1] flex items-center justify-center">
              <Mail size={16} className="text-[#0F1E29]" />
            </div>
            <h2 id="contact-modal-title" className="text-lg font-bold text-white">
              Hablemos de tu negocio
            </h2>
          </div>
          <button
            onClick={handleClose}
            aria-label="Cerrar"
            className="text-white/70 hover:text-white transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#00CED1]/10 flex items-center justify-center mb-4">
                <CheckCircle2 size={36} className="text-[#00CED1]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F1E29] mb-2">
                ¡Mensaje enviado con éxito!
              </h3>
              <p className="text-slate-600 mb-6">
                Gracias por escribirnos. Pronto nos pondremos en contacto contigo.
              </p>
              <button
                onClick={handleClose}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 bg-[#00CED1] text-[#0F1E29] hover:bg-opacity-90"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0F1E29] mb-1">
                  Nombre o empresa
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ej. Gilbert Mendoza / Giltech C.A."
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D8E0] focus:outline-none focus:ring-2 focus:ring-[#00CED1] text-[#0F1E29]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#0F1E29] mb-1">
                  Teléfono
                </label>
                <div className="flex gap-2">
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="px-3 py-3 rounded-lg border border-[#D1D8E0] focus:outline-none focus:ring-2 focus:ring-[#00CED1] text-[#0F1E29] bg-white"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="4121234567"
                    className="flex-1 min-w-0 px-4 py-3 rounded-lg border border-[#D1D8E0] focus:outline-none focus:ring-2 focus:ring-[#00CED1] text-[#0F1E29]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0F1E29] mb-1">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D8E0] focus:outline-none focus:ring-2 focus:ring-[#00CED1] text-[#0F1E29]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#0F1E29] mb-1">
                  ¿En qué podemos ayudarte?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos tu duda o lo que necesitas..."
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D8E0] focus:outline-none focus:ring-2 focus:ring-[#00CED1] text-[#0F1E29] resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  No pudimos enviar tu mensaje. Intenta nuevamente o escríbenos directo a{' '}
                  <a href={`mailto:${DESTINATION_EMAIL}`} className="font-semibold underline">
                    {DESTINATION_EMAIL}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 bg-[#00CED1] text-[#0F1E29] hover:bg-opacity-90 shadow-[0_4px_14px_0_rgba(0,206,209,0.39)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Enviando...
                  </>
                ) : (
                  'Enviar mensaje'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
