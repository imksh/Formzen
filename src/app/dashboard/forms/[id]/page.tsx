import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export const metadata = {
  title: "Form details",
  description: "Inspect a form builder and its publishing settings.",
};

export default async function FormDetailsPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-base-content/50">
            Form details
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-base-content">
            {id.replace(/-/g, " ")}
          </h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/dashboard/forms"
            className="btn btn-outline btn-secondary"
          >
            Back to forms
          </Link>
          <button className="btn btn-primary">Publish changes</button>
        </div>
      </div>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.82fr]">
        <article className="card border border-base-300 bg-base-100/85 shadow-lg">
          <div className="card-body gap-5">
            <div>
              <p className="text-sm text-base-content/60">Builder canvas</p>
              <h2 className="text-2xl font-semibold text-base-content">
                Core questions
              </h2>
            </div>
            <div className="space-y-4">
              {[
                "What is the request type?",
                "Who owns the request?",
                "What is the desired start date?",
              ].map((question) => (
                <div
                  key={question}
                  className="rounded-2xl border border-base-300 bg-base-200/70 p-4"
                >
                  <p className="font-medium text-base-content">{question}</p>
                  <p className="mt-1 text-sm text-base-content/65">
                    Add help text, validation, and branching rules.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <aside className="card border border-base-300 bg-base-100/85 shadow-lg">
          <div className="card-body gap-5">
            <div>
              <p className="text-sm text-base-content/60">Form settings</p>
              <h2 className="text-2xl font-semibold text-base-content">
                Publication state
              </h2>
            </div>
            <div className="space-y-3">
              {[
                ["Visibility", "Public link"],
                ["Theme", "Corporate dark"],
                ["Approval", "Enabled"],
                ["Responses", "Collecting"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-base-300 bg-base-200/70 px-4 py-3"
                >
                  <span className="text-sm text-base-content/65">{label}</span>
                  <span className="font-medium text-base-content">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
