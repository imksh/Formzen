import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function FormDetailsPage({ params }: Props) {
  const { id } = await params;
  redirect(`/dashboard/forms/${id}`);
}
