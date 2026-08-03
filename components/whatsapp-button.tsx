"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "923260341216"; // Medalign WhatsApp
  const whatsappMessage = encodeURIComponent(
    "Hello! I want to inquire about physiotherapy services.",
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
