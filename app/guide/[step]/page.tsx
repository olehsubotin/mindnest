import { guideSteps } from "@/app/lib/guideSteps";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return guideSteps.map((step) => ({
    step: step.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;
  const stepNumber = parseInt(step);
  const currentStep = guideSteps.find((s) => s.id === stepNumber);

  if (!currentStep) return notFound();

  const prev = guideSteps.find((s) => s.id === stepNumber - 1);
  const next = guideSteps.find((s) => s.id === stepNumber + 1);

  return (
    <main className="max-w-2xl mx-auto py-16 px-6 text-center">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {currentStep.title}
      </h1>
      <p className="mb-10 text-gray-600 text-lg">{currentStep.description}</p>

      <div className="flex justify-between items-center gap-4">
        {prev ? (
          <Link href={`/guide/${prev.id}`}>
            <button className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 transition">
              ← Previous
            </button>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link href={`/guide/${next.id}`}>
            <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition">
              Next →
            </button>
          </Link>
        ) : (
          <Link href="/app">
            <button className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition">
              Go to App →
            </button>
          </Link>
        )}
      </div>
    </main>
  );
}
