import { guideSteps } from "@/app/lib/guideSteps";
import Link from "next/link";
import { notFound } from "next/navigation";

type GuideStepPageProps = {
  params: {
    step: string;
  };
};

export default function GuideStepPage({ params }: GuideStepPageProps) {
  const stepNumber = parseInt(params.step);
  const step = guideSteps.find((s) => s.id === stepNumber);

  if (!step) return notFound();

  const nextStep = guideSteps.find((s) => s.id === stepNumber + 1);
  const prevStep = guideSteps.find((s) => s.id === stepNumber - 1);

  return (
    <main className="max-w-xl mx-auto py-12 px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">{step.title}</h1>
      <p className="mb-8 text-gray-700">{step.description}</p>

      <div className="flex justify-between">
        {prevStep ? (
          <Link href={`/guide/${prevStep.id}`}>
            <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              ← Previous
            </button>
          </Link>
        ) : (
          <div />
        )}

        {nextStep ? (
          <Link href={`/guide/${nextStep.id}`}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Next →
            </button>
          </Link>
        ) : (
          <Link href="/app">
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Go to App →
            </button>
          </Link>
        )}
      </div>
    </main>
  );
}
