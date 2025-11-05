import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const certificates = [
  { id: 1, src: "/Data analytics certification.JPG", title: "Google Data Analytics Certificate" },
  { id: 2, src: "/agile certification.JPG", title: "Agile Project Development" },
  { id: 3, src: "/Technical support certification.JPG", title: "Technical Support Fundamentals" },
];

export default function CertificationsPage() {
  const [previewSrc, setPreviewSrc] = useState(null);

  return (
    <div className="px-20 py-32 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold text-gray-300 mb-8">Certifications</h1>

      <p className="text-gray-400 text-lg mb-10">
        Here are some of my certifications and achievements.
      </p>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-800 p-4 rounded-lg flex flex-col items-center shadow-lg"
          >
            <Image
              src={cert.src}
              alt={cert.title}
              width={300}
              height={200}
              onClick={() => setPreviewSrc(cert.src)}
              className="rounded-md object-cover cursor-pointer hover:scale-105 transition"
            />
            <p className="text-gray-200 mt-3 text-center">{cert.title}</p>
          </div>
        ))}
      </div>

      {/* Back to Home */}
      <div className="mt-10">
        <Link href="/" className="text-purple-400 hover:underline">
          Back to Home
        </Link>
      </div>

      {/* ===== Preview Modal ===== */}
      {previewSrc && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[999]"
          onClick={() => setPreviewSrc(null)}
        >
          <img
            src={previewSrc}
            className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
}
