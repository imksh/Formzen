import Link from "next/link";

const metrics = [
  { label: "Published forms", value: "24" },
  { label: "Active responses", value: "1,284" },
  { label: "Open approvals", value: "6" },
  { label: "Avg. completion", value: "82%" },
];

const recentForms = [
  { name: "Partner onboarding", status: "Live", responses: "184" },
  { name: "Q2 customer survey", status: "Draft", responses: "42" },
  { name: "Event RSVP", status: "Live", responses: "391" },
];

export const metadata = {
  title: "Dashboard",
  description: "Monitor forms, responses, and approval status inside FormZen.",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="card border border-base-300 bg-base-100/85 shadow-lg"
          >
            <div className="card-body p-5">
              <p className="text-sm text-base-content/60">{metric.label}</p>
              <p className="text-3xl font-semibold text-base-content">
                {metric.value}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="card border border-base-300 bg-base-100/85 shadow-lg">
          <div className="card-body gap-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-base-content/50">
                  Recent forms
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-base-content">
                  Everything that matters right now
                </h2>
              </div>
              <Link
                href="/dashboard/forms"
                className="btn btn-outline btn-secondary btn-sm"
              >
                View all
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr className="text-base-content/50">
                    <th>Form</th>
                    <th>Status</th>
                    <th>Responses</th>
                  </tr>
                </thead>
                <tbody>
                  {recentForms.map((form) => (
                    <tr key={form.name}>
                      <td className="font-medium text-base-content">
                        {form.name}
                      </td>
                      <td>
                        <span
                          className={`badge badge-outline ${form.status === "Live" ? "badge-success" : "badge-warning"}`}
                        >
                          {form.status}
                        </span>
                      </td>
                      <td className="text-base-content/75">{form.responses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </article>

        <article className="card border border-base-300 bg-base-100/85 shadow-lg">
          <div className="card-body gap-5">
            <p className="text-sm uppercase tracking-[0.24em] text-base-content/50">
              Launch checklist
            </p>
            <div className="space-y-3">
              {[
                "Create the form structure and sections.",
                "Add branching logic and validation.",
                "Publish the public link and track responses.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-base-300 bg-base-200/70 p-4 text-base-content/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
