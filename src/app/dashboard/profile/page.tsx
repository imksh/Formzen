export const metadata = {
  title: "Profile",
  description: "Update workspace and account settings inside FormZen.",
};

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-base-content/50">
          Profile
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-base-content">
          Workspace preferences and account settings
        </h1>
      </div>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <article className="card border border-base-300 bg-base-100/85 shadow-lg">
          <div className="card-body gap-5">
            <div className="flex items-center gap-4">
              <div className="avatar placeholder">
                <div className="w-16 rounded-2xl bg-primary text-primary-content">
                  <span className="text-xl font-semibold">F</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-base-content">
                  FormZen Admin
                </h2>
                <p className="text-base-content/60">admin@formzen.app</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-base-300 bg-base-200/70 p-4">
                <p className="text-sm text-base-content/60">Plan</p>
                <p className="mt-1 font-medium text-base-content">
                  Enterprise trial
                </p>
              </div>
              <div className="rounded-2xl border border-base-300 bg-base-200/70 p-4">
                <p className="text-sm text-base-content/60">Security</p>
                <p className="mt-1 font-medium text-base-content">
                  Two-factor enabled
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="card border border-base-300 bg-base-100/85 shadow-lg">
          <div className="card-body gap-5">
            <div>
              <p className="text-sm text-base-content/60">Preferences</p>
              <h2 className="text-2xl font-semibold text-base-content">
                Brand and notification controls
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Theme", "Corporate dark"],
                ["Workspace color", "Blue steel"],
                ["Email alerts", "Enabled"],
                ["Public form language", "English"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-base-300 bg-base-200/70 p-4"
                >
                  <p className="text-sm text-base-content/60">{label}</p>
                  <p className="mt-1 font-medium text-base-content">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
