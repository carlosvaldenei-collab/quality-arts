import type { Locale } from '@/components/site/language-provider'
import type { MeetingType } from '@/lib/site-data'

export const BOOKING_COPY: Record<
  Locale,
  {
    eyebrow: string
    titlePrefix: string
    titleHighlight: string
    description: string
    cardTitle: string
    cardDescription: string
    perks: {
      durationTitle: string
      durationSubtitle: string
      formatTitle: string
      formatSubtitle: string
      emailTitle: string
      emailSubtitle: string
      reminderTitle: string
      reminderSubtitle: string
    }
    meetingTypeLegend: string
    modeTabsAria: string
    modeQuick: string
    modeGoogle: string
    iframeTitle: string
    validationDateTime: string
    validationFields: string
    whatsappRequest: (params: {
      typeLabel: string
      name: string
      company: string
      phone: string
      email: string
      dayLabel: string
      time: string
    }) => string
    confirmationTitle: (firstName: string) => string
    confirmationBodyWithCalendar: string
    confirmationBodyWhatsapp: string
    confirmationEnd: string
    summaryType: string
    summaryDate: string
    summaryTime: string
    durationSuffix: string
    openGoogleCalendar: string
    newBooking: string
    step1Legend: string
    step2Legend: string
    step3Legend: string
    fields: {
      name: string
      company: string
      phone: string
      phonePlaceholder: string
      email: string
    }
    submitButton: string
    preferWhatsapp: string
    preferWhatsappMessage: string
  }
> = {
  pt: {
    eyebrow: 'Agendamento Online',
    titlePrefix: 'Agende sua ',
    titleHighlight: 'Reunião de Diagnóstico',
    description:
      'Escolha o melhor dia e horário diretamente na nossa agenda. A confirmação e o link da videoconferência são enviados automaticamente para o seu e-mail.',
    cardTitle: 'Reunião de Diagnóstico',
    cardDescription:
      'Uma conversa estratégica e sem compromisso para entender o seu negócio e indicar a melhor solução.',
    perks: {
      durationTitle: '30 min',
      durationSubtitle: 'Duração da reunião',
      formatTitle: 'Reunião Online',
      formatSubtitle: 'via Google Meet',
      emailTitle: 'Confirmação automática',
      emailSubtitle: 'enviada por e-mail',
      reminderTitle: 'Lembrete',
      reminderSubtitle: 'no seu Google Agenda',
    },
    meetingTypeLegend: 'Tipo de reunião',
    modeTabsAria: 'Modo de agendamento',
    modeQuick: 'Agendamento rápido',
    modeGoogle: 'Agenda Google',
    iframeTitle: 'Agenda de horários da Quality Arts no Google Agenda',
    validationDateTime: 'Escolha um dia e um horário para a reunião.',
    validationFields: 'Preencha nome, WhatsApp e um e-mail válido.',
    whatsappRequest: ({ typeLabel, name, company, phone, email, dayLabel, time }) =>
      `Olá, Quality Arts! Gostaria de agendar uma Reunião de Diagnóstico (${typeLabel}).\n\nNome: ${name}\nEmpresa: ${company || '-'}\nWhatsApp: ${phone}\nE-mail: ${email}\nPreferência: ${dayLabel} às ${time}`,
    confirmationTitle: (firstName) => `Quase lá, ${firstName}!`,
    confirmationBodyWithCalendar:
      'Abrimos a nossa agenda oficial do Google em uma nova aba. Confirme o horário por lá para receber o convite e o link do Google Meet em ',
    confirmationBodyWhatsapp:
      'Enviamos sua solicitação pelo WhatsApp. Assim que confirmarmos, você recebe o convite e o link do Google Meet em ',
    confirmationEnd: '.',
    summaryType: 'Tipo',
    summaryDate: 'Data',
    summaryTime: 'Horário',
    durationSuffix: '(30 min)',
    openGoogleCalendar: 'Abrir Google Agenda',
    newBooking: 'Fazer novo agendamento',
    step1Legend: '1. Escolha o dia',
    step2Legend: '2. Horários disponíveis',
    step3Legend: '3. Seus dados',
    fields: {
      name: 'Nome',
      company: 'Empresa',
      phone: 'WhatsApp',
      phonePlaceholder: '(35) 9 9999-9999',
      email: 'E-mail',
    },
    submitButton: 'Confirmar Agendamento no Google Agenda',
    preferWhatsapp: 'Prefere combinar pelo WhatsApp?',
    preferWhatsappMessage: 'Olá, Quality Arts! Gostaria de agendar uma reunião de diagnóstico.',
  },
  en: {
    eyebrow: 'Online Scheduling',
    titlePrefix: 'Book Your ',
    titleHighlight: 'Discovery Call',
    description:
      'Pick the best day and time directly on our calendar. Confirmation and your video call link are sent straight to your email.',
    cardTitle: 'Discovery Call',
    cardDescription:
      'A strategic, no-obligation conversation to understand your business and recommend the right solution.',
    perks: {
      durationTitle: '30 min',
      durationSubtitle: 'Meeting length',
      formatTitle: 'Online Meeting',
      formatSubtitle: 'via Google Meet',
      emailTitle: 'Automatic confirmation',
      emailSubtitle: 'sent by email',
      reminderTitle: 'Calendar reminder',
      reminderSubtitle: 'in your Google Calendar',
    },
    meetingTypeLegend: 'Meeting topic',
    modeTabsAria: 'Booking mode',
    modeQuick: 'Quick booking',
    modeGoogle: 'Google Calendar',
    iframeTitle: 'Quality Arts Google Calendar availability',
    validationDateTime: 'Please select a day and time for the meeting.',
    validationFields: 'Please fill in your name, WhatsApp/phone, and a valid email address.',
    whatsappRequest: ({ typeLabel, name, company, phone, email, dayLabel, time }) =>
      `Hi, Quality Arts! I would like to book a Discovery Call (${typeLabel}).\n\nName: ${name}\nCompany: ${company || '-'}\nWhatsApp/Phone: ${phone}\nEmail: ${email}\nPreferred time: ${dayLabel} at ${time}`,
    confirmationTitle: (firstName) => `Almost there, ${firstName}!`,
    confirmationBodyWithCalendar:
      'We opened our official Google Calendar in a new tab. Please confirm your slot there to receive your invite and Google Meet link at ',
    confirmationBodyWhatsapp:
      'We sent your request via WhatsApp. Once confirmed, you will receive your calendar invite and Google Meet link at ',
    confirmationEnd: '.',
    summaryType: 'Topic',
    summaryDate: 'Date',
    summaryTime: 'Time',
    durationSuffix: '(30 min)',
    openGoogleCalendar: 'Open Google Calendar',
    newBooking: 'Book another session',
    step1Legend: '1. Choose a day',
    step2Legend: '2. Available time slots',
    step3Legend: '3. Your details',
    fields: {
      name: 'Name',
      company: 'Company',
      phone: 'WhatsApp / Phone',
      phonePlaceholder: '+55 (35) 9 9999-9999',
      email: 'Email',
    },
    submitButton: 'Confirm Booking on Google Calendar',
    preferWhatsapp: 'Prefer to coordinate on WhatsApp?',
    preferWhatsappMessage: 'Hi, Quality Arts! I would like to schedule a discovery call.',
  },
}

export const MEETING_TYPES_EN: Record<MeetingType, string> = {
  'novo-site': 'New Website',
  catalogo: 'Digital Catalog',
  infraestrutura: 'Domain & Hosting',
  rastreamento: 'Tracking & SEO',
}