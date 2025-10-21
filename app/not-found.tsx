"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-gradient-primary text-white px-6 py-3 rounded-lg hover:shadow-glow-purple transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
