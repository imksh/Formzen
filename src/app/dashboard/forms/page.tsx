import Link from "next/link";

const forms = [
  {
    id: "partner-onboarding",
    name: "Partner onboarding",
    status: "Live",
    responses: 184,
    updated: "2 hours ago",
  },
  {
    id: "customer-survey",
    name: "Q2 customer survey",
    status: "Draft",
    responses: 42,
    updated: "Yesterday",
  },
  {
    id: "event-rsvp",
    name: "Event RSVP",
    status: "Live",
    responses: 391,
    updated: "4 days ago",
  },
];

export const metadata = {
  title: "Forms",
  description: "Browse, create, and manage forms from the FormZen dashboard.",
};

export default function FormsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-base-content/50">
            Forms
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-base-content">
            Manage every published and draft form
          </h1>
        </div>
        <Link href="/dashboard/forms/new" className="btn btn-primary">
          New form
        </Link>
      </div>

      <div className="card border border-base-300 bg-base-100/85 shadow-lg">
        <div className="card-body overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-base-content/50">
                <th>Form</th>
                <th>Status</th>
                <th>Responses</th>
                <th>Updated</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {forms.map((form) => (
                <tr key={form.id}>
                  <td className="font-medium text-base-content">{form.name}</td>
                  <td>
                    <span
                      className={`badge badge-outline ${form.status === "Live" ? "badge-success" : "badge-warning"}`}
                    >
                      {form.status}
                    </span>
                  </td>
                  <td className="text-base-content/75">{form.responses}</td>
                  <td className="text-base-content/75">{form.updated}</td>
                  <td>
                    <Link
                      href={`/dashboard/forms/${form.id}`}
                      className="link link-primary"
                    >
                      Open
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
